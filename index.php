<?php

/**
 * Plugin Name: Bayder School - blocks
 * Plugin URI: https://seryozhko.me
 * Version: 1.0
 * Author: Seryozhko
 *
 * @package bayder-school
 */

defined( 'ABSPATH' ) || exit;

add_filter( 'block_categories', function( $categories, $post ) {
  return array_merge($categories, [[ 'slug'  => 'bayder-school', 'title' => 'Школа Байдера', 'icon' => 'admin-generic' ]]);
}, 10, 2 );

add_action( 'enqueue_block_editor_assets', function() {
  wp_register_script( 'yandex-maps','//api-maps.yandex.ru/2.1/?apikey='. get_theme_mod( 'ymap_key' ) .'&lang='. get_bloginfo('language') , [], false, true );
  wp_enqueue_script( 'yandex-maps' );
} );

function ymap_customize_register($wp_customize){
  // Contact Section
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
}

add_action( 'customize_register', 'ymap_customize_register');


include 'block-map/index.php';
include 'block-schedule/index.php';
include 'block-location/index.php';
include 'block-table/index.php';
