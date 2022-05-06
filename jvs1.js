var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    delay: 95,
});
      
  typewriter
    .pauseFor(650)
    .typeString("WELCOME! ")
    .pauseFor(170)
    .pauseFor(1250)
    .deleteChars(1)
    .deleteChars(9)
    .pauseFor(375)
    .typeString(" This is Zippo107's WebSite! ")
    .pauseFor(375)
    .pauseFor(75)
    .deleteChars(28)
    .pauseFor(75)
    .typeString(" Go on Github for my repo!\n ") 
    .pauseFor(250)
    .typeString("\t (link in top) ")
    .start();