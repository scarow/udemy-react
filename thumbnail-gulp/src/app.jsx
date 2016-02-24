var options = {
  thumbnailData: [{
    title: "See tutorials",
    number: 32,
    header: 'Learn React',
    description: 'This is a description',
    imageUrl: 'http://formatjs.io/img/react.svg'
  },
  {
    title: "See tutorials",
    number: 1,
    header: 'Learn Gulp',
    description: 'This is a description of Gulp!',
    imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
  }]
};
var element = React.createElement(ThumbnailList, options);
ReactDOM.render(element, document.querySelector('.target'));
