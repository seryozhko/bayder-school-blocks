const { InnerBlocks } = wp.blockEditor;

export default () => (<InnerBlocks.Content />);
// export default ( { attributes: {venueId, index, point, zoom, venueAddress} } ) => (
//   <div
//     class={ `tab-pane fade ${index ? '': 'show active'}` }
//     id={ `nav-${venueId}` }
//     role="tabpanel"
//     aria-labelledby={ `${venueId}-tab` }
//   >
//     <InnerBlocks.Content />
//     <p className="text-center font-weight-bold">{venueAddress}</p>
//     <div className="ymap-block" point={ point } center={ point } zoom={ zoom }></div>
//   </div>);
