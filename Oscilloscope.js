(function() {
	var proto = Object.create(HTMLElement.prototype);

	var defaultWidth = 200;
	var defaultHeight = 100;



	proto.createdCallback = function() {
		var canvas = document.createElement('canvas');
		canvas.width = defaultWidth;
		canvas.height = defaultHeight;
		this.canvas = canvas;
		this.context = canvas.getContext('2d');
		this.appendChild(canvas);

		this.resetCanvas(this.context);
	};

	proto.attachTo = function(analyser) {
		console.log('attached to analyser node', analyser);
		console.log(this.canvas);
	};

	proto.resetCanvas = function() {
		var ctx = this.context;
		var canvas = this.canvas;

		ctx.fillStyle = 'rgba(0, 50, 0, 1)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};

	//

	var component = {};
	component.prototype = proto;
	component.register = function(name) {
		document.registerElement(name, {
			prototype: proto
		});
	};

	if(typeof define === 'function' && define.amd) {
		define(function() { return component; });
	} else if(typeof module !== 'undefined' && module.exports) {
		module.exports = component;
	} else {
		component.register('openmusic-oscilloscope'); // automatic registration
	}

}).call(this);

