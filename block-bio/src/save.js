const {	RichText } = wp.blockEditor;

export default ( props ) => {
  const { attributes: { content, imgUrl, linkUrl, email, phone, alignment }, className } = props;
  const linksList = (links, makeUrl) => links.split(',').map((item, i, arr) => [<a href={ makeUrl(item) }>{item.trim()}</a>, `${i<arr.length-1 ? ', ' : '' }` ] );

  return (<div className={ `media flex-wrap` }>
  <img src={ imgUrl } class="align-self-center mx-auto mx-sm-0" />
  <div class="media-body flex-wrap ml-4">
    <RichText.Content 
      className="font-weight-bold text-nowrap" 
      tagName="div" 
      value={ content } 
    />
    <div>
      { phone ? <p class="phone"><span class="font-weight-bold">Телефон: </span> { linksList( phone, (item) => `tel:${item.trim().replace(/[^0-9\+]/g, '')}` ) } </p> : '' }
      { email.length ? <p class="email"><span class="font-weight-bold">E-mail: </span> <a href={ `mailto:${email}` }>{ email }</a></p> : '' }
      { linkUrl ? <p class="sites"><span class="font-weight-bold">Сайт: </span> { linksList( linkUrl, (item) => `//${item.trim()}` ) }</p> : '' }
    </div>
  </div>
</div>);
};
