var loader = document.getElementsByClassName("lottie-icon3");
      function loadBMAnimation(loader) {
      var animation = bodymovin.loadAnimation({
        container: loader,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "https://assets10.lottiefiles.com/packages/lf20_CvR2Jk.json"
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