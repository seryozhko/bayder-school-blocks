const { registerBlockType } = wp.blocks;

import attributes from './attributes';
import mapEdit from './edit';

registerBlockType( 'bayder-school/map', {
	title: 'Карта',
	icon: 'location-alt',
	category: 'bayder-school',
	supports: {
		html: false,
		// className: false,
	},
	attributes,
	edit: mapEdit,
} );
