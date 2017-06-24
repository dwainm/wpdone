<?php
/**
* Plugin URI: https://dwain.blog
* Description: Simple todo list app.
* Version: 0.1.0
* Author: Dwain Maralack
*/
add_action( 'init', 'wpdone_create_post_type' );

function wpdone_create_post_type() {
  register_post_type( 'wpdone_todo_item',
   array(
      'labels' => array(
        'name' => __( 'todo' ),
        'singular_name' => __( 'Todo' )
      ),
      'public'       => true,
      'has_archive'  => true,
      'show_in_rest' => true,
      'rest_base'    => 'todos',
      'rest_controller_class' => 'WP_REST_Posts_Controller',
    )
  );
}

add_action( 'wp_footer', function(){
     $scripts_dir = plugins_url( 'wpdone' ) . '/scripts/';
     wp_enqueue_script( 'wpdoneapp', $scripts_dir . 'app_bundle.js' , false, '0.1', true );
	// get all todos in array
		$todo_query = new WP_Query( array(
			'post_type' => 'wpdone_todo_item',
			'post_per_page' => '200',
			'author' => get_current_user_id(),
		) );
		$data = $todo_query->get_posts();
		$needed_data = array();
		foreach( $data as $index => $todo ){
			$obj = json_decode( $todo->post_content );
			$completed = isset( $obj->completed ) && $obj->completed ? true : false;
			$needed_data[] = array( 
					'id' => $todo->ID,
					'text' => $todo->post_title,
					'completed' => $completed,
				);
		}
		wp_localize_script('wpdoneapp','localizedInitialState', $needed_data );
		
		$rest_api_endpoing = get_site_url() . '/wp-json/wp/v2/todos';
		wp_localize_script( 'wpdoneapp', 'wpDoneRestApi', array( 'root' => esc_url_raw( rest_url() . 'wp/v2/todos'), 'nonce' => wp_create_nonce( 'wp_rest' ) ) );
});

add_filter( 'template_include', function ( $original ) {
       return   plugin_dir_path ( __FILE__ ) . 'templates/app.php' ;
});

add_action( 'init', function () {
    /* Disable WordPress Admin Bar for all users but admins. */
  show_admin_bar(false);
});

