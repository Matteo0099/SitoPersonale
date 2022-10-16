particlesJS("particles-js", {
    particles: {
      number: {
        value: 19,
        density: {
          enable: true,
          value_area: 481.0236182596568
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 12
        },
        image: {
          src:
            "https://www.sprinklr.com/wp-content/themes/sprinklr/assets/images/logo_sprinklr.svg",
          width: 250,
          height: 100
        }
      },
      opacity: {
        value: 0.3286994724774322,
        random: true,
        anim: {
          enable: false,
          speed: 1.25,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 47.34885849793636,
        random: true,
        anim: {
          enable: true,
          speed: 10.59040959040959,
          size_min: 5.594405594405594,
          sync: true
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 7.413648243462092,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 320.6824121731046,
          rotateY: 481.0236182596568
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });

  var count_particles;
  var stats;
  var update;
  /*stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);*/
  count_particles = document.querySelector(".js-count-particles");
  
  update = function () {
    //stats.begin();
    //stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      if (count_particles != null)
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };

requestAnimationFrame(update);
  