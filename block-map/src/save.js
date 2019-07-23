export default ( props ) => {
  const {
    attributes: {
      address,
      center,
      zoom,
      point,
    }
  } = props;

  return (<div className="ymap-block" point={ point } center={ JSON.stringify(center) } address={ address } zoom={ zoom }></div>);
};
