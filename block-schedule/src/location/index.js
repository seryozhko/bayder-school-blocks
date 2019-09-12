const BLOCK_NAME = 'bayder-school/location';
const BLOCK_TITLE = 'Зал';
const BLOCK_DESCRIPTION = '';

import attributes from './attributes';
import edit from './edit';
import save from './save';

export const name = BLOCK_NAME;
export const settings = {
	title: BLOCK_TITLE,
	description: BLOCK_DESCRIPTION,
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
	edit,
	save,
};
