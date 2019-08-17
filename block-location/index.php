<?php

/**
 * Plugin Name: Bayder School Basic EsNext
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
function bayder_school_location_register_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'bayder-school-location',
		plugins_url( 'build/index.js', __FILE__ ),
		[
			'wp-blocks',
			'wp-element',
			'wp-editor'
		],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	wp_register_style(
		'bayder-school-location-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	wp_register_style(
		'bayder-school-location',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);


	register_block_type( 'bayder-school/block-location', array(
		'style' => 'bayder-school-location',
		'editor_style' => 'bayder-school-location-editor',
		'editor_script' => 'bayder-school-location',
	) );
}
add_action( 'init', 'bayder_school_location_register_block' );
