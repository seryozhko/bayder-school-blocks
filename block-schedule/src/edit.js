const {	RichText,	AlignmentToolbar, BlockControls } = wp.editor;
const {	CheckboxControl, ToggleControl, PanelBody, PanelRow, RangeControl, SelectControl, TextControl } = wp.components;
const {	Component, Fragment } = wp.element;
const { withSelect } = wp.data;
const { withState } = wp.compose;
const { InspectorControls, InnerBlocks } = wp.blockEditor;

const TEMPLATE = [
  ['core/heading', { placeholder: 'Recipe Title', className: 'text-light bg-primary text-uppercase p-2' }],
  ['core/table', {
    "hasFixedLayout": true,
    "head": [
      {
        "cells": [
          {
            "content": "one",
            "tag": "th"
          },
          {
            "content": "two",
            "tag": "th"
          },
          {
            "content": "three",
            "tag": "th"
          }
        ]
      }
    ],
    "body": [
      {
        "cells": [
          {
            "content": "mon",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          }
        ]
      },
      {
        "cells": [
          {
            "content": "t",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          }
        ]
      },
      {
        "cells": [
          {
            "content": "w",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          }
        ]
      },
      {
        "cells": [
          {
            "content": "t",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          }
        ]
      },
      {
        "cells": [
          {
            "content": "f",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          }
        ]
      },
      {
        "cells": [
          {
            "content": "s",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          }
        ]
      },
      {
        "cells": [
          {
            "content": "s",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td"
          }
        ]
      }
    ],
    "foot": []
  }]
];

export default withSelect( select => {
  const locations = select( 'core' ).getEntityRecords( 'taxonomy', 'locations', { hide_empty:true, parent:0 } );
  const venues = locations ? select( 'core' ).getEntityRecords( 'postType', 'venues', { locations: locations.map(location => location.id) } ) : [];

  return { 
    locations : locations && venues ? locations.map( location => ({ ...location, venues: venues.filter( venue => venue.locations.indexOf(location.id) !== -1 ) }) ) : [],
    venuesdata: venues ? venues.map(venue => ({ id: venue.id, title: venue.title.rendered })) : [],
  };
} )( ({ locations, venuesdata, attributes: { venues }, setAttributes }) => {
  return (
    <div>
      Расписание
      {
        venuesdata.length &&
        venues.map(venue => (<div>{ venuesdata.filter( item => item.id === venue )[0].title }</div>))
      }
<InnerBlocks 
	template={TEMPLATE} 
	templateLock="all" 
/>      
      <InspectorControls>
        <Fragment>
          {
            locations &&
            locations.map(location => 
            <PanelBody 
              title={location.name}
              icon='null'
              initialOpen={ false }
            >
              {
                location.venues && location.venues.map(venue =>
                <PanelRow>
                  <CheckboxControl
                    label={ venue.title.rendered }
                    checked={ venues.indexOf(venue.id) !== -1 }
                    onChange={ isChecked => {
                      const newVenues = venues.slice(0);
                      isChecked ? newVenues.push(venue.id) : newVenues.splice(newVenues.indexOf(venue.id), 1);
                      setAttributes({ venues: newVenues });
                    } }
                  />
                </PanelRow>
              )}
            </PanelBody>)
          }
        </Fragment>
      </InspectorControls>

    </div>
  );
});