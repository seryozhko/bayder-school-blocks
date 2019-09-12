const {	registerBlockType } = wp.blocks;

import * as schedule from './schedule';
import * as location from './location';
import * as table from './table';

[	
	schedule,
	location,
	table,
].forEach( block => {
	if ( ! block ) return;

	const { name, settings } = block;
	registerBlockType( name, settings );
} );