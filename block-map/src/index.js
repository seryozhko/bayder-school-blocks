const { registerBlockType } = wp.blocks;
const {	RichText,	AlignmentToolbar, BlockControls } = wp.editor;

registerBlockType( 'bayder-school/block-test', {
	title: 'Bayder: block-test',
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
		alignment: {
			type: 'string',
			default: 'none',
		},		
	},
	edit: ( props ) => {
		const { attributes: { content, alignment }, setAttributes, className } = props;
		const onChangeContent = newContent => setAttributes( { content: newContent } );
		const onChangeAlignment = newAlignment => setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );

		return (
			<div>
				{
					<BlockControls>
						<AlignmentToolbar
							value={ alignment }
							onChange={ onChangeAlignment }
						/>
					</BlockControls>
				}				
				<RichText
					tagName="p"
					style={ { textAlign: alignment } }
					className={ className }
					onChange={ onChangeContent }
					value={ content }
				/>
			</div>
		);
	},
	save: ( props ) => {
		const { attributes: { content, alignment } } = props;
		return (
		<RichText.Content 
			className={ `text-${ alignment }` }
			tagName="p"
			value={ content }
		/>)
	},
} );
