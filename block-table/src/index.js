const { registerBlockType } = wp.blocks;

import attributes from './attributes';
import edit from './edit';
import save from './save';

registerBlockType( 'bayder-school/block-table', {
	title: 'Таблица расписания',
	description: '',
	icon: 'editor-table',
	category: 'bayder-school',
	parent: ['bayder-school/location'],
	supports: {
		html: false,
		className: false,
		inserter: false,
		reusable: false,
	},
	attributes,
	edit,
	save,
} );
