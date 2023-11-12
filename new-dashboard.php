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

class NewDashboard
{
    public function __construct()
    {
        // add_action('admin_init', array($this, 'redirect_to_orders'));

        add_filter('login_redirect', array($this, 'redirect_to_orders_dashboard'), 10, 3);

        add_action('admin_menu', array($this, 'create_custom_new_dashboard_type'));

        add_action( 'admin_enqueue_scripts', array($this,'conduct_admin_enqueue_scripts' ));

    }

    
   

     function create_custom_new_dashboard_type() {
        add_menu_page(
            __('Conduct Dashboard', 'textdomain'),
            __('Conduct', 'textdomain'),
            'manage_options',
            'conduct',
            array($this, 'wpdocs_plugin_function'),
            'dashicons-dashboard',
            20
        );
        add_submenu_page(
            'conduct',    // Parent slug
            'Settings',        // Page title
            'Settings',        // Menu title
            'manage_options',  // Capability
            'conduct-settings', // Menu slug
           array($this,'conduct_settings_page' ) // Callback function
        );
    }

    function conduct_settings_page() {
        echo "yosef";
    }

     function wpdocs_plugin_function() {
       
            echo '<style type="text/css">
                #adminmenu,#wpfooter ,#wpadminbar,#adminmenuback {
                    visibility: hidden;
                    display: none;         
                }
                #wpcontent{
                    margin-left: 0px;
                }
                html.wp-toolbar{
                    padding-top: 0px;
                }
                .update-nag notice notice-warning inline , .error{
                    display: none;  
                }

            </style>';
        
       
        
        require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';

    }

     function conduct_admin_enqueue_scripts() {
        wp_enqueue_style( 'jobplace-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
        wp_enqueue_script( 'jobplace-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.19', true );
    }

    // function redirect_to_orders(){
    //     wp_redirect( admin_url( 'admin.php?page=conduct' ) );
    // }

    function redirect_to_orders_dashboard( $redirect_to, $request, $user ){
        $redirect_to = admin_url( 'admin.php?page=conduct' );
        return $redirect_to;
    }
}

new NewDashboard;
