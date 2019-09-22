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

	register_block_type( 'bayder-school/schedule', array(
		'editor_script' => 'bayder-school-schedule',
	) );
	
	register_block_type( 'bayder-school/location', array(
		'render_callback' => 'location_render_callback',
		'attributes' => [
			'venueId' => [ 'type' => 'number' ],
			'title' => [ 'type' => 'string'	],
			'index' => [ 'type' => 'number' ],
			'tablesCount' => ['type' => 'number'],
			'zoom' => [ 'type' => 'number', 'default' => 16 ],
			'point' => [ 'type' => 'string' ],
			'venueAddress' => ['type' => 'string'],
			'baloonContent' => ['type' => 'string'],
		])
	);
	
}

function location_render_callback($attributes, $content) {
	$class = 'tab-pane fade' . ( $attributes['index'] ? '': 'show active' );
	$venueId = $attributes['venueId'];

	$venueAddress = $attributes['venueAddress'];
	$point = $attributes['point'];
	$zoom = $attributes['zoom'];
	$baloonContent = $attributes['baloonContent'];
	$permalink = get_permalink($venueId);
	$title = get_the_title($venueId);

	return "<div class='{$class}' id='nav-{$venueId}' role='tabpanel' aria-labelledby='{$venueId}-tab'>
    {$content}
    <p class='text-center font-weight-bold'><a href='{$permalink}'>{$venueAddress}</a></p>
		<div class='ymap-block' point='{$point}' center='{$point}' zoom='{$zoom}'>
			<div class='baloon d-none' title='{$title}' link='{$permalink}'>{$baloonContent}</div>
		</div>
  </div>";
}

add_action( 'init', 'bayder_school_block_schedule_register_block' );
