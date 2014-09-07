var cool = require('cool-ascii-faces');

function spin () {
  var face = cool();
  p.textContent = face;
  document.title = face;
  if (spinning) requestAnimationFrame(spin);
}

var spinning = false;
var p = document.createElement('p');
spin();

p.addEventListener('mouseenter', function () {
  spinning = true;
  spin();
}, false);

p.addEventListener('mouseleave', function () { spinning = false; }, false);

document.body.appendChild(p);
