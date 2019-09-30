const {	CheckboxControl, ToggleControl, PanelBody, PanelRow, RangeControl, SelectControl, TextControl, Button } = wp.components;
const { InspectorControls, InnerBlocks } = wp.blockEditor;
const {	Fragment } = wp.element;

export default ( {clientId, setAttributes, attributes: { isInterval, interval } } ) => {
  setAttributes( { blockId:clientId } );
  const allowedBlocks = wp.blocks.getBlockTypes().filter( ({ name }) => !name.match(/bayder|paragraph|gallery/) ).map( ({name}) => name );
  return (<div>
    Карусель
    <InspectorControls>
      <Fragment>
          <PanelBody>
              <PanelRow>
                <ToggleControl
                  label='Автоматическая прокрутка'
                  checked={ isInterval }
                  onChange={ (isInterval) => setAttributes({ isInterval }) }
                />
              </PanelRow>
              { isInterval && 
              <PanelRow>
                <TextControl
                  label='Время показа слайда (мс)'
                  value={ interval }
                  onChange={ (interval) => setAttributes({ interval }) }
                />
              </PanelRow> }
          </PanelBody>
      </Fragment>
    </InspectorControls>
    <InnerBlocks allowedBlocks={allowedBlocks}/> 
  </div>);
};
