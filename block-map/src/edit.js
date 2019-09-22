const {	AlignmentToolbar, BlockControls } = wp.editor;
const {	CheckboxControl, ToggleControl, PanelBody, RangeControl, SelectControl, TextControl } = wp.components;
const {	Component, Fragment } = wp.element;
const { RichText, InspectorControls } = wp.blockEditor;

const minZoom = 0;
const maxZoom = 19;

import { YMaps, Map, Placemark, Button } from 'react-yandex-maps';

export default ( { attributes: { address, zoom, center, point, venueAddress, baloonContent }, setAttributes, clientId, className } ) => {

  const editMeta = newMeta => {
    const currentMeta = wp.data.select( select => select( 'core/editor' ).getEditedPostAttribute( 'meta' ) );
    wp.data.dispatch( 'core/editor' ).editPost( { meta: { ...currentMeta, ...newMeta } } );
  }

  const onChangeAddress = address => {
    ymaps.geocode(address)
    .then(result => {
      const point = result.geoObjects.get(0).geometry.getCoordinates(); 
      setAttributes({ center: point, point: JSON.stringify(point) });
      editMeta({ venueAddress, point: JSON.stringify(point), zoom });
    })
    setAttributes( { address } );
  };

  const onVenueAddressChange = venueAddress => {
    setAttributes({ venueAddress });
    editMeta({ venueAddress, point, zoom });
  };

  const initMap = map => {
    if(!map) return;
    map.events.add('boundschange', e => {
      if(e.get('newZoom') !== e.get('oldZoom')){
        setAttributes({ zoom: e.get('newZoom') });
        editMeta({ venueAddress, point, zoom: e.get('newZoom') });
      }
      wp.data.dispatch( 'core/block-editor' ).selectBlock(clientId);
      // e.get('newCenter') !== e.get('oldCenter') ? setAttributes({ center: e.get('newCenter') }) : null;
    })
  };

  return (<div className={className}>
    <InspectorControls>
      <Fragment>
        <PanelBody>
          <RangeControl
            label='Масштаб'
            value={ zoom }
            onChange={ value => setAttributes( { zoom: Math.min( Math.max( value, minZoom ), maxZoom ) } ) }
            min={ minZoom }
            max={ maxZoom }
          />
        </PanelBody>
      </Fragment>
    </InspectorControls>
    <TextControl
      label="Адрес зала"
      value={ venueAddress }
      onChange={ venueAddress => onVenueAddressChange(venueAddress) }
    />
    <TextControl
      label="Адрес метки на карте"
      value={ address }
      onChange={ newAddress => onChangeAddress(newAddress) }
    />
    Текст всплывающего окна метки
    <RichText
      placeholder="Текст всплывающего окна метки"
      tagName="div"
      value={ baloonContent }
      onChange={ baloonContent => setAttributes({ baloonContent }) }
    />
    <YMaps>
      <Map 
        state={{ center, zoom }}
        width='100%'
        height={`${themeMods.mapHeight}px`}
        instanceRef={initMap}
      >
        { point && <Placemark
            geometry={ JSON.parse(point) }
            options={{
              iconLayout: 'default#image',
              iconImageHref: themeMods.pinImg,
              iconImageSize: [60, 60],
              iconImageOffset: [-30, -60],
            }}
        /> }
      </Map>
    </YMaps>
 </div>);
 
};
