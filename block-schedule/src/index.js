const { registerBlockType } = wp.blocks;

import attributes from './attributes';
import mapEdit from './edit';
import mapSave from './save';

registerBlockType( 'bayder-school/block-schedule', {
	title: 'Залы и Расписание',
	description: 'Выберите залы, чтобы добавить расписание',
	icon: 'calendar-alt',
	category: 'bayder-school',
	// supports: {
	// 	html: false,
	// 	className: false,
	// },
	attributes,
	edit: mapEdit,
	save: mapSave,
} );
