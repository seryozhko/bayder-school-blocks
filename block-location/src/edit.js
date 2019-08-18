const {	CheckboxControl, ToggleControl, PanelBody, PanelRow, RangeControl, SelectControl, TextControl, Button, Toolbar } = wp.components;
const {	Fragment } = wp.element;
const { InspectorControls, InnerBlocks, BlockControls } = wp.blockEditor;

const TEMPLATE = [
  ['bayder-school/block-table'],
];

export default ({ attributes: { title }, clientId }) => (<div>
  { title }
  <InspectorControls>
    <Fragment>
      <PanelBody>
        <Button
          isDefault
          isDestructive
          onClick={() => wp.data.dispatch('core/block-editor').insertBlock( wp.blocks.createBlock( 'bayder-school/block-table' ), 100, clientId, false )}
        >
          Добавить Таблицу расписания
        </Button>
      </PanelBody>
    </Fragment>
  </InspectorControls>
  <InnerBlocks
    template = {TEMPLATE}
    allowedBlocks={['bayder-school/block-table']}
    renderAppender={ () => (<div></div>) }
    templateInsertUpdatesSelection={false}
  /> 
</div>);