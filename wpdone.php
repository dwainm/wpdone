<?php
/**
* Plugin Name: WP Done
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
        $scripts_dir =  plugins_url( 'wpdone' ) . '/scripts/';
        wp_enqueue_script( 'wpdoneapp', $scripts_dir . 'app_bundle.js' , false, '0.1', true );
});

add_filter( 'template_include', function ( $original ) {
    if ( is_user_logged_in() ) {
        return   plugin_dir_path ( __FILE__ ) . 'templates/app.php' ;
   } else {
        return   plugin_dir_path ( __FILE__ ) . 'templates/login.php' ;
    }
});

add_action( 'init', function () {
    /* Disable WordPress Admin Bar for all users but admins. */
  show_admin_bar(false);
});

