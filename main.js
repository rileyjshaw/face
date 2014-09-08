var cool = require('cool-ascii-faces');

function spin () {
  var face = cool();
  p.textContent = face;
  document.title = face;
  if (spinning) requestAnimationFrame(spin);
}

function start () {
  spinning = true;
  spin();
}

function stop () { spinning = false; }

var spinning = false;
var p = document.createElement('p');
spin();

p.addEventListener('mouseenter', start, false);
p.addEventListener('touchstart', start, false);
p.addEventListener('mouseleave', stop, false);
p.addEventListener('touchend', stop, false);

document.body.appendChild(p);
