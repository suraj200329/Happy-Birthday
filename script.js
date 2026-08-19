/* =====================================================
       LOADER
    ===================================================== */

    window.addEventListener("load", () => {

      setTimeout(() => {
        document
          .getElementById("loader")
          .classList.add("hide");
      }, 700);

    });


    /* =====================================================
       START BUTTON
    ===================================================== */

    document
      .getElementById("startBtn")
      .addEventListener("click", () => {

        createConfetti();

        document
          .querySelector(".intro-section")
          .scrollIntoView({
            behavior: "smooth"
          });

      });


    /* =====================================================
       FLIP CARDS
    ===================================================== */

    document
      .querySelectorAll(".flip-card")
      .forEach(card => {

        card.addEventListener("click", () => {

          card.classList.toggle("flipped");

        });

      });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
      document.querySelectorAll(".reveal");

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add("visible");

              observer.unobserve(entry.target);

            }

          });

        },
        {
          threshold: .12
        }
      );

    revealElements.forEach(element => {
      observer.observe(element);
    });


    /* =====================================================
       CANDLE
    ===================================================== */

    const candle =
      document.getElementById("candle");

    const blowBtn =
      document.getElementById("blowBtn");

    const wishMessage =
      document.getElementById("wishMessage");

    let candleOut = false;

    blowBtn.addEventListener("click", () => {

      if (candleOut) return;

      candleOut = true;

      candle.classList.add("out");

      wishMessage.textContent =
        "✨ Your wish has been sent to the universe. ✨";

      createConfetti();

    });


    /* =====================================================
       CONFETTI
    ===================================================== */

    function createConfetti(amount = 100) {

      const colors = [
        "#ef6f92",
        "#ffb3c6",
        "#ffd166",
        "#9be7c4",
        "#8ecae6",
        "#cdb4db"
      ];

      for (let i = 0; i < amount; i++) {

        const piece =
          document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
          Math.random() * 100 + "vw";

        piece.style.background =
          colors[
            Math.floor(
              Math.random() * colors.length
            )
          ];

        piece.style.animationDuration =
          (2 + Math.random() * 3) + "s";

        piece.style.animationDelay =
          Math.random() * .5 + "s";

        piece.style.transform =
          `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(piece);

        setTimeout(() => {
          piece.remove();
        }, 5500);

      }

    }


    /* =====================================================
       FLOATING HEARTS
    ===================================================== */

    function createHeart() {

      const heart =
        document.createElement("div");

      heart.className = "floating-heart";

      const hearts = [
        "♡",
        "♥",
        "❤",
        "💕",
        "✨"
      ];

      heart.textContent =
        hearts[
          Math.floor(
            Math.random() * hearts.length
          )
        ];

      heart.style.left =
        Math.random() * 100 + "vw";

      heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

      heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 11000);

    }

    setInterval(createHeart, 900);


    /* =====================================================
       MUSIC
    ===================================================== */

    const music =
      document.getElementById("music");

    const musicBtn =
      document.getElementById("musicBtn");

    let playing = false;

    musicBtn.addEventListener("click", async () => {

      /*
       * Add your music:
       *
       * <source src="music.mp3" type="audio/mpeg">
       *
       * inside the audio element above.
       */

      if (!music.src && music.children.length === 0) {

        alert(
          "Add your music.mp3 file to enable background music."
        );

        return;

      }

      try {

        if (playing) {

          music.pause();

          musicBtn.textContent = "♫";

        } else {

          await music.play();

          musicBtn.textContent = "❚❚";

        }

        playing = !playing;

      } catch (error) {

        console.log(error);

      }

    });


    /* =====================================================
       INITIAL CONFETTI
    ===================================================== */

    setTimeout(() => {
      createConfetti(35);
    }, 1000);
