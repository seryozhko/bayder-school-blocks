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
    'default' => '',
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


include 'block-map/index.php';
include 'block-schedule/index.php';
include 'block-location/index.php';
include 'block-table/index.php';
