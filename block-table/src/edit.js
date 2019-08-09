const { InnerBlocks } = wp.blockEditor;

const TEMPLATE = [
  ['core/heading', { 
    placeholder: 'Recipe Title',
    className: 'text-light bg-primary text-uppercase p-2',
    level: 5,
    content: 'Расписание'
  }],
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

export default props => (<div>
  <InnerBlocks 
	  template={TEMPLATE} 
	  templateLock="all" 
  /> 
</div>);