var loader = document.getElementsByClassName("lottie-icon1");
      function loadBMAnimation(loader) {
      var animation = bodymovin.loadAnimation({
        container: loader,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "https://assets9.lottiefiles.com/packages/lf20_xTdmDK.json"
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
