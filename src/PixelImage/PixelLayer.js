var PixelLayer = (function() {
    
    var Pixel = require("./Pixel.js");
    
    class PixelLayer {
        constructor(cfg = {}) {
            let {width = 1, height = 1, name} = cfg;
            
            this.layerName = name;
            this.width = width;
            this.height = height;
            
            this.pixelMap = [];
            
            for (let x = 0; x < width; x++) {
                this.pixelMap.push([]);
                for (let y = 0; y < height; y++) {
                    this.pixelMap[x].push(new Pixel());
                }
            }
        }
        isInBounds(x, y) {
            return x >= 0 && y >= 0 &&
                x < this.pixelMap.length && y < this.pixelMap[x].length;
        }
        getPixel(x, y) {
            if (this.isInBounds(x, y)) {
                return this.pixelMap[x][y];
            } else {
                // Throw an error if a pixel is out of bounds. It's a bit harsh,
                // but it will teach whoever made that mistake their lesson.
                throw new RangeError(`Coordinates (${x}, ${y}) are out of range`);
            }
        }
        setPixelRGB(cfg = {}) {
            let {x, y, color} = cfg;
            if (this.isInBounds(x, y)) {
                this.pixelMap[x][y].setRGB(color);
            } else {
                throw new RangeError(`Coordinates (${x}, ${y}) are out of range`);
            }
        }
    }
    
    module.exports = PixelLayer;
    return PixelLayer;
    
})();
