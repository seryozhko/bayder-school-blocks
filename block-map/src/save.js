export default ( props ) => {
  const {
    attributes: {
      venueAddress,
      address,
      center,
      zoom,
      point,
    }
  } = props;

  return (<>
    <p className="text-center font-weight-bold">{venueAddress}</p>
    <div className="ymap-block" point={ point } center={ JSON.stringify(center) } address={ venueAddress } zoom={ zoom }>
      <div class='baloon d-none' title='{$title}'></div>
    </div>
  </>);
};
