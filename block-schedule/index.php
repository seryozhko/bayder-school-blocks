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
		'render_callback' => 'schedule_render_callback',
		'attributes' => [
			'venues' => [ 'type' => 'array', 'default' => [] ],
		],
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

function schedule_render_callback($attributes, $content){
	if(empty( trim($content) )) return "";

	$venues = $attributes['venues'];
	$links = '';
	foreach ($venues as $index => $venue) {
		if(!empty($venue['tables'])){
			$active = $index ? '' : ' active';
			$id = $venue['id'];
			$title = get_the_title($id);
			$links .= "<a
				class='nav-item nav-link{$active}'
				data-toggle='tab'
				id='{$id}-tab'
				href='#nav-{$id}'
				role='tab'
				aria-controls='nav-{$id}' 
				aria-selected='true'
			>
				{$title}
			</a>";
		}
	};
	return "<div class='card my-2'>
						<div class='card-header'>
							<nav>
								<div class='nav nav-tabs card-header-tabs' id='nav-tab' role='tablist'>
									{$links}
								</div>
							</nav>
						</div>
						<div class='card-body'>
							<div class='tab-content' id='nav-tabContent'>
								{$content}
							</div>
						</div>
					</div>";
}

function location_render_callback($attributes, $content) {
	if(empty( trim($content) )) return "";
	
	$class = 'tab-pane fade' . ( $attributes['index'] ? '': 'show active' );
	$venueId = $attributes['venueId'];
	$blocks = parse_blocks( get_post_field('post_content', $venueId) );

	foreach ( $blocks as $block ) {
		if ( 'bayder-school/map' === $block['blockName'] ) {
			$attrs = $block["attrs"];
			break;
		}
	}

	$zoom = $attrs['zoom'] ? $attrs['zoom'] : 16;
	$permalink = get_permalink($venueId);
	$title = get_the_title($venueId);

	return "<div class='{$class}' id='nav-{$venueId}' role='tabpanel' aria-labelledby='{$venueId}-tab'>
    {$content}
		<p class='text-center font-weight-bold'><a href='{$permalink}'>{$attrs['venueAddress']}</a></p>
		<div class='ymap-block' center='{$attrs['point']}' zoom='{$zoom}'>
			<div class='point d-none' title='{$title}' location='{$attrs['point']}' link='{$permalink}'><div class='text-center'>{$attrs['baloonContent']}</div></div>
		</div>
  </div>";
}

add_action( 'init', 'bayder_school_block_schedule_register_block' );
