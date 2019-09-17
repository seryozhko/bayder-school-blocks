const BLOCK_NAME = 'bayder-school/schedule';
const BLOCK_TITLE = 'Залы и Расписание';
const BLOCK_DESCRIPTION = 'Выберите залы, чтобы добавить расписание';

import attributes from './attributes';
import edit from './edit';
import save from './save';

export const name = BLOCK_NAME;
export const settings = {
	title: BLOCK_TITLE,
	description: BLOCK_DESCRIPTION,
	icon: 'calendar-alt',
	category: 'bayder-school',
	supports: {
		html: false,
		className: false,
		multiple: false,
		reusable: false,
	},
	attributes,
	edit,
	save,
};
