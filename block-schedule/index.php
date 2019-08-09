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
function bayder_school_block_schedule_register_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'bayder-school-schedule',
		plugins_url( 'build/index.js', __FILE__ ),
		[
			'wp-blocks',
			'wp-element',
			'wp-editor'
		],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	wp_register_style(
		'bayder-school-schedule-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	wp_register_style(
		'bayder-school-schedule',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);


	register_block_type( 'bayder-school/block-schedule', array(
		'style' => 'bayder-school-schedule',
		'editor_style' => 'bayder-school-schedule-editor',
		'editor_script' => 'bayder-school-schedule',
	) );
}
add_action( 'init', 'bayder_school_block_schedule_register_block' );
