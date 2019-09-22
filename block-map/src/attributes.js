const attributes = {
  venueAddress:{
    type: 'string',
  },
  address: {
    type: 'string',
  },
  zoom: {
    type: 'namber',
    default: '16',
  },	
  center: {
    type: 'array',
    default: [55.75, 37.57],
  },
  point:{
    type: 'string',
  },
  baloonContent:{
    type: 'string',
  }
};

export default attributes;