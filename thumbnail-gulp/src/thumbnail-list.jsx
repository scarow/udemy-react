var ThumbnailList = React.createClass({
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps, i){
      return (
        <Thumbnail {...thumbnailProps} key={i}/>
      );
    });
    return (
      <div>
        { list }
      </div>
    );
  }
});
