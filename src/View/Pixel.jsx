var React = require("react");
var ReactDOM = require("react-dom");

var CanvasStore = require("../Stores/CanvasStore.js");
var CanvasDispatcher = require("../Dispatcher/CanvasDispatcher.js");
var constants = require("../Constants.js");

var Pixel = React.createClass({
    getInitialState() {
        return {
            width: 1,
            height: 1,
            color: "rgba(0, 0, 0, 1)"
        }
    },
    setDimensions(dim = {}) {
        let {width, height} = dim;
        this.setState({
            width: width,
            height: height
        });
    },
    render() {
        return <div style={{
            display: "inline-block",
            position: "absolute",
            top: this.props.x * this.state.width,
            left: this.props.y * this.state.height,
            width: this.state.width,
            height: this.state.height,
            background: this.state.color
        }}></div>
    }
});

module.exports = Pixel;
