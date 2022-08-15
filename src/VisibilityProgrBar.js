window.addEventListener('scroll', function() {
    var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 100) {
        document.getElementById('progress-bar').style.position = "sticky";
        document.getElementById('progress-bar').style.display = "block";
        document.getElementById('progress-line').style.display = "block";
    } 
    else if (currScrollPos2 < 100) {
        document.getElementById('progress-bar').style.display = "none";
        document.getElementById('progress-line').style.display = "none";
    }
});


/* 
var test = document.getElementById('progress-bar');
window.addEventListener('scroll', function(e) {
  var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  test.style.opacity = Math.max(0, Math.min(1, -scroll / 400 + 2));
});
*/