let globalID,
    startAnimation = document.querySelector('.btn');
    stopAnimation = document.querySelector('#stop.btn');

function repeatOften() {
  let div = document.createElement('div');
  document.body.appendChild(div);
  globalID = requestAnimationFrame(repeatOften);
}

startAnimation.addEventListener('click', function(e) {
  globalID = requestAnimationFrame(repeatOften);
});

stopAnimation.addEventListener('click', function(e) {
  cancelAnimationFrame(globalID);
});
