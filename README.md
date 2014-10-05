# openmusic-oscilloscope

> A component for plotting wave data on a canvas

[![Install with NPM](https://nodei.co/npm/openmusic-oscilloscope.png?downloads=true&stars=true)](https://nodei.co/npm/openmusic-oscilloscope/)

** YOU NEED SUPPORT FOR WEB COMPONENTS IN YOUR BROWSER BECAUSE WE'RE NOT SHIMMING ANYTHING IN **

Firefox: go to `about:config`, find `dom.webcomponents.enabled` and set it to true.

Chrome: maybe nothing to do?

## Installation

Just grab `Oscilloscope.js` from the repo or do `npm install openmusic-oscilloscope`.

## Usage

### If not using any package manager

Just include `Oscilloscope.js` before you use the component. It will be registered automatically as `openmusic-oscilloscope` so you can `document.createElement('openmusic-oscilloscope')` or just have `<openmusic-oscilloscope>` elements in your HTML source.

### If using npm

You need to load the module and then register it--it is not automatically registered!

```javascript
require('openmusic-oscilloscope').register('openmusic-oscilloscope');
```

But you could even register it with other name. Up to you.


