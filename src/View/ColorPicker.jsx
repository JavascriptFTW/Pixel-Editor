var ColorPicker = (function() {
    
    var React = require("react");
    var CanvasStore = require("../Stores/CanvasStore.js");
    var CanvasDispatcher = require("../Dispatcher/CanvasDispatcher.js");
    var constants = require("../Constants.js")
    
    function toBrushVal(c) {
        let r = c.slice(1, 3),
            g = c.slice(3, 5),
            b = c.slice(5, 7);
        return [r, g, b].map(val => parseInt(val, 16));
    }
    
    ColorPicker = React.createClass({
        render() {
            return <input style={{
                position: "absolute",
                bottom: 0,
                right: 0
            }} type="color" onChange={this.testHandler}/>
        },
        testHandler(evt) {
            CanvasDispatcher.dispatch({
                actionType: constants.SET_BRUSH,
                color: toBrushVal(evt.target.value)
            });
        }
    });
    
    module.exports = ColorPicker;
    return ColorPicker;
    
})();