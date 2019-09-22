const attributes = {
  venueId: {
    type: 'number',
  },
  title: {
    type: 'string',
  },
  index: {
    type: 'number',
  },
  tablesCount: {
    type: 'number',
  },
  zoom: {
    type: 'number',
    default: 16,
  },	
  point:{
    type: 'string',
  },
  venueAddress:{
    type: 'string',
  },
};

export default attributes;