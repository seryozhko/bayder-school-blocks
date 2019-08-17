const { registerBlockType } = wp.blocks;

import attributes from './attributes';
import mapEdit from './edit';
import mapSave from './save';

registerBlockType( 'bayder-school/location', {
	title: 'Регион',
	description: '',
	icon: 'location',
	category: 'bayder-school',
	parent: ['bayder-school/schedule'],
	supports: {
		html: false,
		className: false,
		inserter: false,
		reusable: false,
	},
	attributes,
	edit: mapEdit,
	save: mapSave,
} );
