const {	CheckboxControl, ToggleControl, PanelBody, PanelRow, RangeControl, SelectControl, TextControl, Button } = wp.components;
const {	Fragment } = wp.element;
const { withSelect, withDispatch } = wp.data;
const { useDispatch, useSelect } = wp.data;
const { compose } = wp.compose;
const { InspectorControls, InnerBlocks } = wp.blockEditor;

let blocks = [];
const block = ( { addVenue, removeVenue, updateVenues, setAttributes, blockList, locations } ) => {

  if(JSON.stringify(blocks) !== JSON.stringify(blockList)){
    blocks = [...blockList];
    const currentMeta = useSelect( select => select( 'core/editor' ).getEditedPostAttribute( 'meta' ) );
    useDispatch( 'core/editor' ).editPost( { meta: { ...currentMeta, venueIds: JSON.stringify(blocks.map(block => block.id)) } } );
    setAttributes({ venues: blocks });
    updateVenues();
  }
  
  return (<div>
    <InspectorControls>
      <Fragment>
        { locations && locations.map(location => 
          <PanelBody title={ location.name }>
            { location.venues && location.venues.map(venue => 
              <PanelRow>
                <CheckboxControl
                  label={ venue.title.rendered }
                  checked={ blockList.find(item => item.id === venue.id) !== undefined }
                  onChange={ isChecked => isChecked ? addVenue({ 
                      venueId: venue.id,
                      title: venue.title.rendered,
                      point: venue.meta.point,
                      zoom: venue.meta.zoom,
                      venueAddress: venue.meta.venueAddress,
                      baloonContent: venue.meta.baloonContent,
                    }) : removeVenue(venue)
                  }
                />
              </PanelRow>
            ) }
          </PanelBody>
        ) }
      </Fragment>
    </InspectorControls>
    Залы и Расписание
    <div>
      <InnerBlocks
        allowedBlocks={['bayder-school/location']}
        renderAppender={ () => (<div></div>) }
      />
    </div>
  </div>)
};

const dispatchFunc = (dispatch, ownProps, registry) => {
  const { clientId } = ownProps;
  const { getBlocks } = registry.select( 'core/block-editor' );
  const innerBlocks = getBlocks( clientId );
  return {
    updateVenues(){
      const { updateBlockAttributes } = dispatch( 'core/block-editor' );
      innerBlocks.map((block, index) => updateBlockAttributes( block.clientId, { index } ));
    },
    removeVenue(venue){    
      const { removeBlock } = dispatch( 'core/block-editor' );
      const blockId = innerBlocks.filter(item => item.attributes.venueId === venue.id)[0].clientId;
      removeBlock(blockId, false);
    },
    addVenue(opts){
      const { insertBlock } = dispatch( 'core/block-editor' );
      const blockTable = wp.blocks.createBlock( 'bayder-school/location', opts );
      insertBlock( blockTable, 100, clientId, false );
    }
  };
};

const selectFunc = (select, ownProps) => {
  const { clientId } = ownProps;
  const innerBlocks = select( 'core/block-editor' ).getBlocks(clientId);
  const blockList = innerBlocks.map(block => ({ id:block.attributes.venueId, title:block.attributes.title, tables:block.innerBlocks.length }));
  const locations = select( 'core' ).getEntityRecords( 'taxonomy', 'locations', { hide_empty:true, parent:0 } );
  const venues = locations ? select( 'core' ).getEntityRecords( 'postType', 'venues', { locations: locations.map(location => location.id), per_page: 100 } ) : [];

  return {
    blockList,
    locations: locations && venues ? locations.map( location => ({ ...location, venues: venues.filter( venue => venue.locations.includes(location.id) ) }) ) : []
  }
};

export default compose(
  withSelect(selectFunc),
  withDispatch(dispatchFunc)
)(block);