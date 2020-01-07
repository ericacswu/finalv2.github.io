var loader = document.getElementsByClassName("lottie-icon2");
      function loadBMAnimation(loader) {
      var animation = bodymovin.loadAnimation({
        container: loader,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "https://assets9.lottiefiles.com/packages/lf20_4xxEXr.json"
      });
       loader.addEventListener("mouseenter", function() {
         animation.play();
       });
       loader.addEventListener("mouseleave", function() {
         animation.stop();
       });
      }
      for (var i = 0; i < loader.length; i++) {
      loadBMAnimation(loader[i]);
      }