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
function bayder_school_bio_register_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_style(
		'bayder-school-bio-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	wp_register_script(
		'bayder-school-bio',
		plugins_url( 'build/index.js', __FILE__ ),
		[
			'wp-blocks',
			'wp-element',
			'wp-editor'
		],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	register_block_type( 'bayder-school/bio', array(
		'editor_style' => 'bayder-school-bio-editor',
		'editor_script' => 'bayder-school-bio',
	) );
}
add_action( 'init', 'bayder_school_bio_register_block' );
