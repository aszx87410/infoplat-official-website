
var NavBar = React.createClass({displayName: "NavBar",
  getInitialState: function(){
        return({data: []})
  },
  componentDidMount: function(){
    $.ajax({
        url: this.props.url,
        dataType: 'json',
        success: function(data){
            this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    })
  },
  render: function () {
    var linkNode = this.state.data.map(function () {
      return (
        React.createElement("li", {key: i}, 
            React.createElement("a", {href: link.url, onClick: this.handleHrefOnClick.bind(null, link.url)}, link.title)
        )
      )
    });
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "header-wrapper"}, 
          React.createElement("img", {src: "./imgs/icon/logo.svg"})
        ), 
        React.createElement("div", {className: "content-wrapper"}
        )
      )
    );
  }
});

React.render(React.createElement(NavBar, null), document.getElementById('navbar'));
