window.onload = function() {
  var deg360 = 2*Math.PI;
  var $box = document.getElementById("react-logo");
  var interval = 1000/60; // 60fps

  var start = null;
  function draw(time) {
    // current time in millisecond
    if(!start) {
      start = time;
    }

    var second = (time - start) / 1000;

    // One sine cycle every second.
    var y = Math.sin(second * deg360) * 20;
    $box.style.top = y + "px";
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);

  function animateRobot() {
    var t = new TimelineMax({yoyo: true, repeat: -1});
    t.to("#android-robot",0.5,{rotation:"+=8"}).to("#android-robot",1,{rotation:"-=8"});
  }
  animateRobot();
};
