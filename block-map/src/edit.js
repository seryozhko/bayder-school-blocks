const {	RichText,	AlignmentToolbar, BlockControls, InspectorControls } = wp.editor;
const {	CheckboxControl, ToggleControl, PanelBody, RangeControl, SelectControl, TextControl } = wp.components;
const {	Component, Fragment } = wp.element;

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
      
  return (
    <div>
      <TextControl
        label="Адрес"
        value={ address }
        onChange={ onChangeAddress }
      />
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
      <YMaps>
        <Map 
          state={{ center, zoom }}
          width='100%'
        >
          {point && <Placemark geometry={ JSON.parse(point) } />}
        </Map>
      </YMaps>
    </div>
  );
};
