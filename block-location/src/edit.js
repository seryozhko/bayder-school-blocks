const {	CheckboxControl, ToggleControl, PanelBody, PanelRow, RangeControl, SelectControl, TextControl, Button, Toolbar } = wp.components;
const {	Fragment } = wp.element;
const { InspectorControls, InnerBlocks, BlockControls } = wp.blockEditor;
const { withSelect, withDispatch } = wp.data;
const { useDispatch, useSelect } = wp.data;
const { compose } = wp.compose;


const TEMPLATE = [
  ['bayder-school/block-table'],
];

const EMPTY_TEMPLATE = [];

export default ({ attributes: { title, tablesCount }, setAttributes, clientId }) => {
  const hasChildBlocks = useSelect( (select) => select('core/block-editor').getBlockOrder( clientId ).length > 0 );
  const { insertBlock } = useDispatch('core/block-editor');

  if( hasChildBlocks && tablesCount === undefined){
    setAttributes({ tablesCount: 1 });
  };  

  return (<div>
    { title }
    <InspectorControls>
      <Fragment>
        <PanelBody>
          <Button
            isDefault
            isDestructive
            onClick={ () => insertBlock( wp.blocks.createBlock( 'bayder-school/block-table' ), 100, clientId, false ) }
          >
            Добавить Таблицу расписания
          </Button>
        </PanelBody>
      </Fragment>
    </InspectorControls>
    <InnerBlocks
      template = {hasChildBlocks || tablesCount ===  undefined ? TEMPLATE : EMPTY_TEMPLATE}
      template_lock={false}
      allowedBlocks={['bayder-school/block-table']}
      renderAppender={ () => (<div></div>) }
      templateInsertUpdatesSelection={false}
    /> 
  </div>)
};