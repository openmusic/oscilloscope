(function() {
	var proto = Object.create(HTMLElement.prototype);

	var defaultWidth = 200;
	var defaultHeight = 100;

	function renderWaveData(canvas, buffer) {
		var ctx = canvas.getContext('2d');
		var canvasWidth = canvas.width;
		var canvasHeight = canvas.height;
		var canvasHalfHeight = canvasHeight * 0.5;
		var bufferLength = buffer.length;
		
		ctx.lineWidth = 1;
		ctx.strokeStyle = 'rgb(0, 255, 0)';
		ctx.beginPath();
		var sliceWidth = canvasWidth * 1.0 / bufferLength;
		var x = 0;
		for(var i = 0; i < bufferLength; i++) {
			var v = 1 - buffer[i];
			var y = v * canvasHalfHeight;
			if(i === 0) {
				ctx.moveTo(x, y);
			} else {
				ctx.lineTo(x, y);
			}
			x += sliceWidth;
		}
		ctx.lineTo(canvasWidth, canvasHalfHeight);
		ctx.stroke();
	}

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

		var bufferLength = analyser.frequencyBinCount;
		var resultsArray = new Float32Array(bufferLength);
		var self = this;

		animate();

		function animate() {

			requestAnimationFrame(animate);

			analyser.getFloatTimeDomainData(resultsArray);

			self.resetCanvas();
			renderWaveData(self.canvas, resultsArray);
			
		}

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

