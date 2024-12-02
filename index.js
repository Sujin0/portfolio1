document.addEventListener("DOMContentLoaded", () => {
    const htmlBar = document.querySelector(".html-bar");
    const cssBar = document.querySelector(".css-bar");
    const bootstrapBar = document.querySelector(".bootstrap-bar");
    const jsBar = document.querySelector(".js-bar");

    const htmlPercentage = 90;
    const cssPercentage = 85;
    const bootstrapPercentage = 75;
    const jsPercentage = 60;

    let htmlProgress = 0;
    let cssProgress = 0;
    let bootstrapProgress = 0;
    let jsProgress = 0;

    function updateProgressBar() {
        if (htmlProgress < htmlPercentage) {
            htmlProgress++;
            htmlBar.style.width = `${htmlProgress}%`;
            document.getElementById("html-percentage").innerText = `${htmlProgress}%`;
        }
        if (cssProgress < cssPercentage) {
            cssProgress++;
            cssBar.style.width = `${cssProgress}%`;
            document.getElementById("css-percentage").innerText = `${cssProgress}%`;
        }
        if (bootstrapProgress < bootstrapPercentage) {
            bootstrapProgress++;
            bootstrapBar.style.width = `${bootstrapProgress}%`;
            document.getElementById("bootstrap-percentage").innerText = `${bootstrapProgress}%`;
        }
        if (jsProgress < jsPercentage) {
            jsProgress++;
            jsBar.style.width = `${jsProgress}%`;
            document.getElementById("js-percentage").innerText = `${jsProgress}%`;
        }
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setInterval(updateProgressBar, 30);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 
    });
    const skillsSection = document.querySelector("#skills");
    observer.observe(skillsSection);
});

document.getElementById('current-year').textContent = new Date().getFullYear();

let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

