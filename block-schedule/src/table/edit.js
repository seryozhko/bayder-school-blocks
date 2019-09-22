const {	CheckboxControl, ToggleControl, PanelBody, PanelRow, RangeControl, SelectControl, TextControl, Button } = wp.components;
const {	Fragment } = wp.element;
const { InspectorControls, InnerBlocks } = wp.blockEditor;


const TEMPLATE = [
  ['core/heading', { 
    placeholder: 'Recipe Title',
    className: 'text-light bg-primary text-uppercase p-2',
    level: 5,
    content: 'Расписание занятий',
    align: 'center',
  }],
  ['core/table', {
    "className": 'table table-bordered',
    "hasFixedLayout": true,
    "head": [],
    "body": [
      {
        "cells": [
          {
            "content": "Понедельник",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          }
        ]
      },
      {
        "cells": [
          {
            "content": "Вторник",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          }
        ]
      },
      {
        "cells": [
          {
            "content": "Среда",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          }
        ]
      },
      {
        "cells": [
          {
            "content": "Четверг",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          }
        ]
      },
      {
        "cells": [
          {
            "content": "Пятница",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          }
        ]
      },
      {
        "cells": [
          {
            "content": "Суббота",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          }
        ]
      },
      {
        "cells": [
          {
            "content": "Воскресенье",
            "tag": "td"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          },
          {
            "content": "",
            "tag": "td",
            "align": "center"
          }
        ]
      }
    ],
    "foot": []
  }],
];

export default ({ attributes: { title }, clientId, isSelected }) => (<div>
  <InnerBlocks 
	  template={TEMPLATE} 
    templateLock="all" 
    templateInsertUpdatesSelection={false}
  /> 
  {isSelected && (<Button 
    isPrimary
    isDestructive
    onClick={() => wp.data.dispatch( 'core/block-editor' ).removeBlock(clientId, false)}
  >
    Удалить эту таблицу
  </Button>)}
</div>);