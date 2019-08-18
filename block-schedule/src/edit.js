const {	CheckboxControl, ToggleControl, PanelBody, PanelRow, RangeControl, SelectControl, TextControl } = wp.components;
const {	Fragment } = wp.element;
const { withSelect } = wp.data;
const { InspectorControls, InnerBlocks } = wp.blockEditor;

const addVenue = (venue, clientId) => {
  const blockTable = wp.blocks.createBlock( 'bayder-school/location', { venueId: venue.id, title: venue.title.rendered } );
  wp.data.dispatch('core/block-editor').insertBlock( blockTable, 100, clientId, false );
};

const removeVenue = (venue, clientId) => {
  const blockId = wp.data.select("core/block-editor").getBlock(clientId).innerBlocks.filter(item => item.attributes.venueId === venue.id)[0].clientId;
  wp.data.dispatch( 'core/block-editor' ).removeBlock(blockId, false);
};

const scheduleBlock = ({ locations, clientId, setAttributes, attributes:{ venues } }) => 
{
  const thisBlock = wp.data.select( 'core/block-editor' ).getBlock(clientId);
  const blockList = thisBlock.innerBlocks.map(block => ({ id:block.attributes.venueId, title:block.attributes.title, tables:block.innerBlocks.length }));
  
  if (JSON.stringify(blockList) !== JSON.stringify(venues)) {
    setAttributes({ venues: blockList });
    thisBlock.innerBlocks.map((block, index) => {
      wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( block.clientId, { index } )
    });
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
                  onChange={ isChecked => isChecked ? addVenue(venue, clientId) : removeVenue(venue, clientId) }
                />
              </PanelRow>
            ) }
          </PanelBody>
        ) }
      </Fragment>
    </InspectorControls>
    Залы и Расписание  
    <div class="tab-content" id="nav-tabContent">
      <InnerBlocks
        allowedBlocks={['bayder-school/location']}
        renderAppender={ () => (<div></div>) }/>
    </div>
  </div>)};

const getLocations = select => {
  const locations = select( 'core' ).getEntityRecords( 'taxonomy', 'locations', { hide_empty:true, parent:0 } );
  const venues = locations ? select( 'core' ).getEntityRecords( 'postType', 'venues', { locations: locations.map(location => location.id) } ) : [];
  return { 
    locations : locations && venues ? locations.map( location => ({ ...location, venues: venues.filter( venue => venue.locations.includes(location.id) ) }) ) : [],
  };
};

export default withSelect(getLocations)(scheduleBlock);