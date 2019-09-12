<?php

/**
 * Plugin Name: Bayder School
 * Plugin URI: https://seryozhko.me
 * Version: 1.0.0
 * Author: Seryozhko
 *
 * @package bayder-school
 */

defined( 'ABSPATH' ) || exit;

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function bayder_school_map_register_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'bayder-school-map',
		plugins_url( 'build/index.js', __FILE__ ),
		[
			'wp-blocks',
			'wp-element',
			'wp-editor'
		],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	wp_register_style(
		'bayder-school-map-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	wp_register_style(
		'bayder-school-map',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);


	register_block_type( 'bayder-school/map', array(
		'style' => 'bayder-school-map',
		'editor_style' => 'bayder-school-map-editor',
		'editor_script' => 'bayder-school-map',
	) );
}
add_action( 'init', 'bayder_school_map_register_block' );

add_action( 'enqueue_block_editor_assets', function() {
  wp_register_script( 'yandex-maps','//api-maps.yandex.ru/2.1/?apikey='. get_theme_mod( 'ymap_key' ) .'&lang='. get_bloginfo('language') , [], false, true );
	wp_enqueue_script( 'yandex-maps' );

	$ymap_key = get_theme_mod('ymap_key');
	$ymap_height = get_theme_mod('ymap_height',450);
	$pin_image = get_theme_mod( 'pin_image' );
	
	wp_add_inline_script( 'yandex-maps', "var themeMods={mapKey:'{$ymap_key}',mapHeight:{$ymap_height},pinImg:'{$pin_image}'}" );
} );

