const BLOCK_NAME = 'bayder-school/table';
const BLOCK_TITLE = 'Таблица расписания';
const BLOCK_DESCRIPTION = '';

import tableEdit from './edit';
import tableSave from './save';

export const name = BLOCK_NAME;
export const settings = {
	title: BLOCK_TITLE,
	description: BLOCK_DESCRIPTION,
	icon: 'editor-table',
	category: 'bayder-school',
	parent: ['bayder-school/location'],
	supports: {
		html: false,
		className: false,
		inserter: false,
		reusable: false,
	},
	edit: tableEdit,
	save: tableSave,
};
