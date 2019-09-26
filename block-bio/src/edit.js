const {	RichText,	AlignmentToolbar, BlockControls, MediaUpload } = wp.blockEditor;
const {	CheckboxControl, ToggleControl, PanelBody, RangeControl, SelectControl, TextControl, Button, TextareaControl } = wp.components;
const {	Component, Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;

export default ( props ) => {
  const { attributes: { content, imgUrl, linkUrl, email, phone, alignment }, setAttributes, className } = props;
  const onSelectImage = (image) => {
    const imgUrl = image.sizes.profileThumb ? image.sizes.profileThumb.url : image.sizes.full.url;
    setAttributes( { imgUrl } );
  };
  const onChangeLinkURL = linkUrl => setAttributes( { linkUrl } ); 
  const onChangeEmail = email => setAttributes( { email: [ email ]  } ); 
  const onChangePhone = phone => setAttributes( { phone } ); 
  const linksList = (links, makeUrl) => links.split(',').map((item, i, arr) => [<a href={ makeUrl(item) }>{item.trim()}</a>, `${i<arr.length-1 ? ', ' : '' }` ] );
  
  const myComponent = (<div className={className}>
    <h3>Профиль инструктора</h3>
    <InspectorControls>
      <Fragment>
        <PanelBody title="Фото">
          <MediaUpload 
            onSelect={ onSelectImage }
            render={ ({ open }) => ( <Button onClick={ open }><img src={ imgUrl } className="align-self-start mx-auto mx-sm-0"/></Button> ) }
          />
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
        { phone ? <p class="phone"><span class="font-weight-bold">Телефон: </span> { linksList( phone, (item) => `tel:${item.trim().replace(/[^0-9\+]/g, '')}` ) } </p> : '' }
        { email.length ? <p class="email"><span class="font-weight-bold">E-mail: </span> <a href={ `mailto:${email}` }>{ email }</a></p> : '' }
        { linkUrl ? <p class="sites"><span class="font-weight-bold">Сайт: </span> { linksList( linkUrl, (item) => `//${item.trim()}` ) }</p> : '' }
      </div>

    </div>
  </div>);

  return myComponent;    
};
