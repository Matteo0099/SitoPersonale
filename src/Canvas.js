HTMLCanvasElement(document.body, {
  onrendered: function(canvas) {
    var imageData = canvas.toDataURL(),
      request = new XMLHTTPRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    request.open("POST","saveImage.php",true);
    request.setRequestHeader("Content-type","image/png");
    request.send("imageData=" + imageData);
  },
  width:1440,
  height:4000
});

