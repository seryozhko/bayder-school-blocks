<?php

/**
 * Plugin Name: Bayder School
 * Plugin URI: https://seryozhko.me
 * Version: 1.1
 * Author: Seryozhko
 *
 * @package bayder-school
 */

defined( 'ABSPATH' ) || exit;

add_filter( 'block_categories', function( $categories, $post ) {
  return array_merge($categories, [[ 'slug'  => 'bayder-school', 'title' => 'Школа Байдера', 'icon' => 'admin-generic' ]]);
}, 10, 2 );

function ymap_customize_register($wp_customize){
  // Maps settings section
  $wp_customize->add_section('ymap_block', array(
    'title' => 'Настройки карт',
    'description' => 'Настройки блока Яндекс.карт',
    'priority' => 140
  ));
  // API key field
  $wp_customize->add_setting('ymap_key', array(
    'default' => '',
    'type' => 'theme_mod'
  ));
  $wp_customize->add_control('ymap_key', array(
    'label' => 'Ключ API',
    'section' => 'ymap_block',
    'priority' => 1
  ));
  // Deafault map height
  $wp_customize->add_setting('ymap_height', array(
    'default' => '450',
    'type' => 'theme_mod'
  ));
  $wp_customize->add_control('ymap_height', array(
    'label' => 'Высота блока карты (px)',
    'section' => 'ymap_block',
    'priority' => 2
  ));
  //Pin image
  $wp_customize->add_setting('pin_image', array(
    'default' => plugin_dir_url( __FILE__ ) . 'pin.png',
    'type' => 'theme_mod',
    'transport' => 'postMessage',
  ));
  $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'pin_image', array(
    'label' => 'Выберите изображение для точки на карте',
    'section' => 'ymap_block',
    'settings' => 'pin_image',
    'priority' => 3
  )));
}

add_action( 'customize_register', 'ymap_customize_register');

function add_roles_on_plugin_activation() {
  add_role('instructor', 'инструктор', [
    "upload_files" => true,
    "edit_posts"=> true,
    "edit_published_posts" => true,
    "publish_posts" => true,
    "read" => true,
    "level_2" => true,
    "level_1" => true,
    "level_0" => true,
    "delete_posts" => true,
    "delete_published_posts" => true,
    "publish_instructors" => true,
    "edit_published_instructors" => true,
    "edit_instructors" => true,
    "create_posts" => true,
    "edit_venues" => true,
    "manage_locations" => true,

    "unfiltered_html" => true,
  ]);
  $admin = get_role('administrator');

  $admin->add_cap('edit_venue');
  $admin->add_cap('read_venue');
  $admin->add_cap('delete_venue');
  $admin->add_cap('edit_venues');
  $admin->add_cap('edit_others_venues');
  $admin->add_cap('publish_venues');
  $admin->add_cap('read_private_venues');
  $admin->add_cap('delete_venues');
  $admin->add_cap('delete_private_venues');
  $admin->add_cap('delete_published_venues');
  $admin->add_cap('delete_others_venues');
  $admin->add_cap('edit_private_venues');
  $admin->add_cap('edit_published_venues');
  $admin->add_cap('create_venues');

  $admin->add_cap('edit_instructor');
  $admin->add_cap('read_instructor');
  $admin->add_cap('delete_instructor');
  $admin->add_cap('edit_instructors');
  $admin->add_cap('edit_others_instructors');
  $admin->add_cap('publish_instructors');
  $admin->add_cap('read_private_instructors');
  $admin->add_cap('delete_instructors');
  $admin->add_cap('delete_private_instructors');
  $admin->add_cap('delete_published_instructors');
  $admin->add_cap('delete_others_instructors');
  $admin->add_cap('edit_private_instructors');
  $admin->add_cap('edit_published_instructors');
  $admin->add_cap('create_instructors');
}
register_activation_hook( __FILE__, 'add_roles_on_plugin_activation' );

function remove_roles_on_plugin_deactivation() {
  remove_role('instructor');    
}
register_deactivation_hook( __FILE__, 'remove_roles_on_plugin_deactivation' );

include 'block-map/index.php';
include 'block-bio/index.php';
include 'block-schedule/index.php';
