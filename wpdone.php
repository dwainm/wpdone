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
