const {	RichText } = wp.blockEditor;

export default ( props ) => {
  const { attributes: { content, imgUrl, linkUrl, email, phone, alignment }, className } = props;
  
  return (<div className={ `media flex-wrap` }>
  <img src={ imgUrl } class="align-self-start mx-auto mx-sm-0" />
  <div class="media-body flex-wrap ml-2">
    <RichText.Content 
      className="font-weight-bold text-nowrap" 
      tagName="div" 
      value={ content } 
    />
    <div>
      { phone.length ? <p class="phone"><span class="font-weight-bold">Телефон: </span> <a href={ `tel:${phone}` }>{ phone }</a></p> : '' }
      { email.length ? <p class="email"><span class="font-weight-bold">E-mail: </span> <a href={ `mailto:${email}` }>{ email }</a></p> : '' }
      { linkUrl ? <p class="sites"><span class="font-weight-bold">Сайт: </span> { linkUrl.split(',').map( (url, i, all) => [<a href={ `//${url.trim()}` } >{ url.trim() }</a>].concat(i + 1 === all.length ? [''] : [' | ']) ) }</p> : '' }
    </div>
  </div>
</div>);
};
