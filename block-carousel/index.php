<?php

/**
 * Plugin Name: Bayder School - Carousel Block
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
function bayder_school_carousel_register_block() {
	if ( ! function_exists( 'register_block_type' ) ) return;
	
	wp_register_script(
		'bayder-school-carousel',
		plugins_url( 'build/index.js', __FILE__ ),
		[
			'wp-blocks',
			'wp-element',
			'wp-editor'
		],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	register_block_type( 'bayder-school/carousel', [
		'attributes' => [
			'blockId' => [ 'type' => 'string' ],
			'isInterval' => [ 'type' => 'boolean', 'default' => false ],
			'interval' => [ 'type' => 'number', 'default' => 5000 ],
		],
		'editor_style' => 'bayder-school-carousel-editor',
		'editor_script' => 'bayder-school-carousel',
		'render_callback' => 'carousel_render_callback',
	 ]);
}
add_action( 'init', 'bayder_school_carousel_register_block' );

function findCarouselBlock($blocks, $id){
	foreach ( $blocks as $block ) {
		$result = ( 'bayder-school/carousel' === $block['blockName'] && $id === $block['attrs']['blockId'] ) ? $block : findCarouselBlock($block['innerBlocks'], $id);
		if( !empty($result) ) return $result;
	}
	return [];
}

function carousel_render_callback($attributes, $content){
	if(empty( trim($content) )) return "";
	$blockId = "carousel-{$attributes['blockId']}";
	$carousel = findCarouselBlock(parse_blocks( get_the_content() ), $attributes['blockId']);
	$interval = $attributes['isInterval'] ? $attributes['interval'] : 'false';

	foreach ($carousel['innerBlocks'] as $index => $block) {
		$active = $index ? '' : 'active';
		$embedHTML = "<figure class='embed-responsive embed-responsive-16by9'>%s</figure>";
		$html = preg_match( '/^core-embed/', $block['blockName'] ) ? sprintf( $embedHTML, wp_oembed_get($block['attrs']['url']) )  : render_block($block);
		$indicators .= 	"<li data-target='#{$blockId}' data-slide-to='{$index}' class='{$active}'></li>";
		$slides .= "<div class='carousel-item {$active}'>{$html}</div>";
	}
	return "<div id='{$blockId}' class='carousel slide' data-ride='carousel' data-interval='{$interval}'>
						<ol class='carousel-indicators'>{$indicators}</ol>
						<div class='carousel-inner'>{$slides}</div>
						<a class='carousel-control-prev' href='#{$blockId}' role='button' data-slide='prev'>
							<span class='carousel-control-prev-icon' aria-hidden='true'></span>
							<span class='sr-only'>Previous</span>
						</a>
						<a class='carousel-control-next' href='#{$blockId}' role='button' data-slide='next'>
							<span class='carousel-control-next-icon' aria-hidden='true'></span>
							<span class='sr-only'>Next</span>
						</a>
					</div>";
}