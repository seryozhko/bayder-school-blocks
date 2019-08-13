const { registerBlockType } = wp.blocks;

import attributes from './attributes';
import mapEdit from './edit';
import mapSave from './save';

registerBlockType( 'bayder-school/block-table', {
	title: 'Таблица расписания',
	description: '',
	icon: 'editor-table',
	category: 'bayder-school',
	parent: ['bayder-school/block-schedule'],
	// supports: {
	// 	html: false,
	// 	className: false,
	// },
	attributes,
	edit: mapEdit,
	save: mapSave,
} );
