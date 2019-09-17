const { InnerBlocks } = wp.blockEditor;

export default ({ attributes: { venues } }) => (<div>
  <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      {
        venues.map((venue, index) => 
          venue.tables ? 
          (<a
            class={`nav-item nav-link ${index ? '' : 'active'}`}
            data-toggle="tab"
            id={ `${venue.id}-tab` }
            href={ `#nav-${venue.id}` }
            role="tab"
            aria-controls={ `nav-${venue.id}` }
            aria-selected="true"
          >
            { venue.title }
          </a>) :
          null
        )
      }        
    </div>
  </nav>
  
  <div class="tab-content" id="nav-tabContent">
    <InnerBlocks.Content />
  </div>
</div>);
