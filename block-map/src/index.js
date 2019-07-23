const { registerBlockType } = wp.blocks;

import attributes from './attributes';
import mapEdit from './edit';
import mapSave from './save';

registerBlockType( 'bayder-school/block-map', {
	title: 'Карта',
	icon: 'location-alt',
	category: 'bayder-school',
	supports: {
		html: false,
		className: false,
	},
	attributes,
	edit: mapEdit,
	save: mapSave,
} );
