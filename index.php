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
}
register_activation_hook( __FILE__, 'add_roles_on_plugin_activation' );

function remove_roles_on_plugin_deactivation() {
  remove_role('instructor');    
}
register_deactivation_hook( __FILE__, 'remove_roles_on_plugin_deactivation' );

include 'block-map/index.php';
include 'block-bio/index.php';
include 'block-schedule/index.php';
