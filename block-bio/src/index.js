const { registerBlockType } = wp.blocks;

import attributes from './attributes';
import edit from './edit';
import save from './save';

registerBlockType( 'bayder-school/bio', {
	title: 'Профиль инструктора',
	icon: 'admin-users',
	category: 'bayder-school',
	supports: {
		html: false,
		// className: false,
	},
	attributes,
	edit,
	save,
} );
