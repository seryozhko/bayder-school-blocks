const {	RichText,	AlignmentToolbar, BlockControls, MediaUpload } = wp.blockEditor;
const {	CheckboxControl, ToggleControl, PanelBody, RangeControl, SelectControl, TextControl, Button, TextareaControl } = wp.components;
const {	Component, Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;

export default ( props ) => {
  const { attributes: { content, imgUrl, linkUrl, email, phone, alignment }, setAttributes, className } = props;
  const onSelectImage = image => setAttributes( { imgUrl: image.sizes.profileThumb.url } );
  const onChangeLinkURL = linkUrl => setAttributes( { linkUrl } ); 
  const onChangeEmail = email => setAttributes( { email: [ email ]  } ); 
  const onChangePhone = phone => setAttributes( { phone } ); 
  
  const myComponent = (<div className={className}>
    <h3>Профиль инструктора</h3>
    <InspectorControls>
      <Fragment>
        <PanelBody title="Фото">
          <MediaUpload 
            onSelect={ onSelectImage }
            render={ ({ open }) => ( <Button onClick={ open }><img src={ imgUrl } className="align-self-start mx-auto mx-sm-0"/></Button> ) }
          />
          {/* <RangeControl
            label='Масштаб'
            value={ zoom }
            onChange={ value => setAttributes( { zoom: Math.min( Math.max( value, minZoom ), maxZoom ) } ) }
            min={ minZoom }
            max={ maxZoom }
          /> */}
        </PanelBody>
        <PanelBody title="Контакты">
          <TextareaControl
            label="Сайты (через запятую):"
            onChange={ onChangeLinkURL }
            value={ linkUrl }
          />
          <TextControl
            label="Email:"
            onChange={ onChangeEmail }
            value={ email }
          />
          <TextControl
            label="Телефон:"
            onChange={ onChangePhone }
            value={ phone }
          />
        </PanelBody>
      </Fragment>
    </InspectorControls>
    <div>
      <RichText
        placeholder="Описание"
        className="font-weight-bold text-nowrap bg-light border"
        tagName="div"
        multiline="p"
        value={ content }
        onChange={ content => setAttributes({ content }) }
      />
      <div>
        { phone.length ? <p class="phone"><span class="font-weight-bold">Телефон: </span> <a href={ `tel:${phone}` }>{ phone }</a></p> : '' }
        { email.length ? <p class="email"><span class="font-weight-bold">E-mail: </span> <a href={ `mailto:${email}` }>{ email }</a></p> : '' }
        { linkUrl ? <p class="sites"><span class="font-weight-bold">Сайт: </span> { linkUrl.split(',').map( (url, i, all) => [<a href={ `//${url.trim()}` } >{ url.trim() }</a>].concat(i + 1 === all.length ? [''] : [' | ']) ) }</p> : '' }
      </div>

    </div>
  </div>);

  return myComponent;    
};
