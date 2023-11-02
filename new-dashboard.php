<?php

/**
 * plugin Name: Test Yosef
 * Description: new-Dashboard for woocommerce
 * Author: Contact LTD
 * Version: 1.0.0
 * Text Domain:  newdashboard
 */

if (!defined("ABSPATH")) {
    exit;
}

class NewDashboard {
    public function __construct() {
        // add_action('admin_init', array($this, 'redirect_to_orders'));

        // add_filter('login_redirect', array($this, 'redirect_to_orders_dashboard'), 10, 3);

        add_action('admin_menu', array($this, 'create_custom_new_dashboard_type'));

        add_action( 'admin_enqueue_scripts', array($this,'conduct_admin_enqueue_scripts' ));
    }

    // function redirect_to_orders(){
    //     wp_redirect( admin_url( 'edit.php?post_type=shop_order' ) );
    // }
 
    // function redirect_to_orders_dashboard( $redirect_to, $request, $user ){
    //     $redirect_to = admin_url( 'edit.php?post_type=shop_order' );
    //     return $redirect_to;
    // }

     function create_custom_new_dashboard_type() {
        add_menu_page(
            __('Conduct Dashboard', 'textdomain'),
            __('Conduct', 'textdomain'),
            'manage_options',
            'wpdocs-unique-identifier',
            array($this, 'wpdocs_plugin_function'),
            'dashicons-dashboard',
            20
        );
    }

     function wpdocs_plugin_function() {
        require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
    }

     function conduct_admin_enqueue_scripts() {
        wp_enqueue_style( 'jobplace-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
        wp_enqueue_script( 'jobplace-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.1', true );
    }
}

new NewDashboard;







// // Add HTML to the beginning of post content
// function add_html_to_content($content) {
//     $custom_html = '<div class="custom-html">Your HTML content here</div>';
//     return $custom_html . $content;
// }

// add_filter('the_content', 'add_html_to_content');

// echo "yosef";
