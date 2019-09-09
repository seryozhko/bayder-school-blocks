const {	RichText,	AlignmentToolbar, BlockControls } = wp.editor;
const {	CheckboxControl, ToggleControl, PanelBody, RangeControl, SelectControl, TextControl } = wp.components;
const {	Component, Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;

const minZoom = 0;
const maxZoom = 19;

import { YMaps, Map, Placemark } from 'react-yandex-maps';

export default ( props ) => {
  const {
    attributes: {
      address,
      zoom,
      center,
      point,
    }, 
    setAttributes,
    isSelected,
  } = props;

  const onChangeAddress = address => {
    ymaps.geocode(address)
    .then(result => {
      const point = result.geoObjects.get(0).geometry.getCoordinates(); 
      setAttributes({ center: point });
      setAttributes({ point: JSON.stringify(point) });
    })
    setAttributes( { address } );
  };

  const initMap = map => {
    if(!map) return;
    map.events.add('boundschange', e => {
      e.get('newZoom') !== e.get('oldZoom') ? setAttributes({ zoom: e.get('newZoom') }) : null;
      // e.get('newCenter') !== e.get('oldCenter') ? setAttributes({ center: e.get('newCenter') }) : null;
      
    })
  };

  const myComponent = (<div>
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
      label="Адрес"
      value={ address }
      onChange={ onChangeAddress }
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

  const placeholder = (<div class="placeholder">not</div>);

  return isSelected ? (myComponent) : (placeholder);

    
};
