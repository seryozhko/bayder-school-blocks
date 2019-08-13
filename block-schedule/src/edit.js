const {	CheckboxControl, ToggleControl, PanelBody, PanelRow, RangeControl, SelectControl, TextControl } = wp.components;
const {	Fragment } = wp.element;
const { withSelect } = wp.data;
const { InspectorControls, InnerBlocks } = wp.blockEditor;

const getBlockList = () => {
  const schedules = wp.data.select( 'core/block-editor' ).getBlocks().filter(block => block.name === 'bayder-school/block-schedule');
  return schedules.length ? schedules[0].innerBlocks.map(block => block.attributes.venueId) : [];
};
let blockList = getBlockList();
wp.data.subscribe(() => blockList = getBlockList());

const addVenue = (venue, clientId) => {
  const blockTable = wp.blocks.createBlock( 'bayder-school/block-table', { venueId: venue.id, title: venue.title.rendered } );
  wp.data.dispatch('core/block-editor').insertBlock( blockTable, 100, clientId, false );
};

const removeVenue = (venue, clientId) => {
  const blockId = wp.data.select("core/block-editor").getBlock(clientId).innerBlocks.filter(item => item.attributes.venueId === venue.id)[0].clientId;
  wp.data.dispatch( 'core/block-editor' ).removeBlock(blockId, false);
};

export default withSelect( select => {
  const locations = select( 'core' ).getEntityRecords( 'taxonomy', 'locations', { hide_empty:true, parent:0 } );
  const venues = locations ? select( 'core' ).getEntityRecords( 'postType', 'venues', { locations: locations.map(location => location.id) } ) : [];
  return { 
    locations : locations && venues ? locations.map( location => ({ ...location, venues: venues.filter( venue => venue.locations.includes(location.id) ) }) ) : [],
  };
} )(({ locations, clientId }) => 
  (<div>
    Залы и Расписание
    <InnerBlocks renderAppender={ () => (<div></div>) }/>
    <InspectorControls>
      <Fragment>
        { locations && locations.map(location => 
          <PanelBody title={ location.name }>
            { location.venues && location.venues.map(venue =>
              <PanelRow>
                <CheckboxControl
                  label={ venue.title.rendered }
                  checked={ blockList.includes(venue.id) }
                  onChange={ isChecked => isChecked ? addVenue(venue, clientId) : removeVenue(venue, clientId) }
                />
              </PanelRow>
            ) }
          </PanelBody>
        ) }
      </Fragment>
    </InspectorControls>
  </div>));