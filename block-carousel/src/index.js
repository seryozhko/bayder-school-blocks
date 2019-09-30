const { registerBlockType } = wp.blocks;

import attributes from './attributes';
import edit from './edit';
import save from './save';

registerBlockType( 'bayder-school/carousel', {
	title: 'Карусель',
	icon: 'images-alt2',
	category: 'bayder-school',
	supports: {
		html: false,
	},
	attributes,
	edit,
	save,
} );
