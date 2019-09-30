<?php

/**
 * Plugin Name: Bayder School - Yandex Maps Block
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

	register_block_type( 'bayder-school/map', array(
		'render_callback' => 'map_render_callback',
		'attributes' => [
			'venueAddress' => [ 'type' => 'string' ],
			'address' => [ 'type' => 'string'],
			'zoom' => [ 'type' => 'namber',	'default' => '16'],
			'center' => [ 'type' => 'array', 'default' => [55.75, 37.57] ],
			'point' => [ 'type' => 'string' ],
			'baloonContent' => [ 'type' => 'string' ],
		],
		'editor_style' => 'bayder-school-map-editor',
		'editor_script' => 'bayder-school-map',
	) );
}
add_action( 'init', 'bayder_school_map_register_block' );

wp_register_script( 'yandex-maps','//api-maps.yandex.ru/2.1/?apikey='. get_theme_mod( 'ymap_key' ) .'&lang='. get_bloginfo('language') , [], false, true );
add_action( 'enqueue_block_assets', function() {  
	wp_enqueue_script( 'yandex-maps' );
// } );

// add_action( 'enqueue_block_editor_assets', function() {
	$ymap_key = get_theme_mod('ymap_key');
	$ymap_height = get_theme_mod('ymap_height', 450);
	$pin_image = get_theme_mod( 'pin_image', plugin_dir_url( __FILE__ ) . '../pin.png' );
	
	wp_add_inline_script( 'yandex-maps', "var themeMods={mapKey:'{$ymap_key}',mapHeight:{$ymap_height},pinImg:'{$pin_image}'}" );
} );

function map_render_callback($attributes) {
	$venueId = $attributes['venueId'];

	$venueAddress = $attributes['venueAddress'];
	$point = $attributes['point'];
	$center = json_encode( $attributes['center'] );
	$zoom = $attributes['zoom'];
	$baloonContent = $attributes['baloonContent'];
	$permalink = get_permalink($venueId);
	$title = get_the_title($venueId);

	return "<p class='text-center font-weight-bold'>{$venueAddress}</p>
	<div class='ymap-block' center='{$center}' zoom='{$zoom}'>
		<div class='point d-none' location='{$point}' title='' link=''><div class='text-center'>{$baloonContent}</div></div>
	</div>";
}