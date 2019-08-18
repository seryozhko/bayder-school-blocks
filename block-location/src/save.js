const { InnerBlocks } = wp.blockEditor;

export default ( { attributes: {venueId, index} } ) => (
  <div
    class={ `tab-pane fade ${index ? '': 'show active'}` }
    id={ `nav-${venueId}` }
    role="tabpanel"
    aria-labelledby={ `${venueId}-tab` }
  >
    <InnerBlocks.Content />
  </div>);
