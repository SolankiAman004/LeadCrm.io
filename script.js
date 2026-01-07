const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

 
  const slider = document.getElementById("slider");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let slides = Array.from(slider.children);
  let index = 1;
  let slideWidth = slides[0].offsetWidth + 24; // card width + gap

  // Clone first & last slides
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slides[0]);

  slides = Array.from(slider.children);

  // Initial position
  slider.style.transform = `translateX(-${slideWidth * index}px)`;

  function moveSlide() {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index >= slides.length - 1) return;
    index++;
    moveSlide();
  });

  prevBtn.addEventListener("click", () => {
    if (index <= 0) return;
    index--;
    moveSlide();
  });

  slider.addEventListener("transitionend", () => {
    if (slides[index] === firstClone) {
      slider.style.transition = "none";
      index = 1;
      slider.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    if (slides[index] === lastClone) {
      slider.style.transition = "none";
      index = slides.length - 2;
      slider.style.transform = `translateX(-${slideWidth * index}px)`;
    }
  });

  // Auto slide (optional)
  setInterval(() => {
    index++;
    moveSlide();
  }, 5000);


  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active-tab"));
      contents.forEach(c => c.classList.add("hidden"));

      tab.classList.add("active-tab");
      document.getElementById(tab.dataset.tab).classList.remove("hidden");
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const stickyCTA = document.getElementById("stickyCTA");
    const triggerSection = document.getElementById("secondSection"); // update with your actual target section
    const footer = document.querySelector("footer");

    function handleScroll() {
      const triggerRect = triggerSection.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();

      // Show CTA when scrolled past trigger section
      if (triggerRect.bottom < 0) {
        stickyCTA.classList.add("opacity-100", "pointer-events-auto");
      } else {
        stickyCTA.classList.remove("opacity-100", "pointer-events-auto");
      }

      // If footer is visible, hide CTA (so it doesn't cover footer)
      if (footerRect.top < window.innerHeight) {
        stickyCTA.classList.remove("opacity-100", "pointer-events-auto");
      }
    }

    window.addEventListener("scroll", handleScroll);
  });

  function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle("hidden");
  }
