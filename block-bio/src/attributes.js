const attributes = {
  content: {
    type: 'string',
  },
  imgUrl: {
    type: 'string',
    default: 'http://placehold.it/160x236'
  },
  linkUrl: { 
    type: 'string',
    default: ''
  },
  email: { 
    selector: 'p.email a',
    source: 'children'
  },
  phone: {
    selector: 'p.phone a',
    source: 'children'
  },
};

export default attributes;