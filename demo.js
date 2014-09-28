var ac = new AudioContext();
var osc = ac.createOscillator();
var analyser = ac.createAnalyser();
var oscilloscope = document.querySelector('openmusic-oscilloscope');

osc.connect(analyser);
analyser.connect(ac.destination);

osc.start();

oscilloscope.attachTo(analyser);
