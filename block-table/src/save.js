const { InnerBlocks } = wp.blockEditor;

export default ( { attributes } ) => {
  const { venueId } = attributes;
  
  return (<div>
    <InnerBlocks.Content />
  </div>)
};
