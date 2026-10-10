```javascript
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    const isLightMode = document.body.classList.contains("light-mode");

    themeIcon.className = isLightMode ? "fas fa-moon" : "fas fa-sun";

    themeToggle.setAttribute(
        "aria-label",
        isLightMode ? "Switch to dark mode" : "Switch to light mode"
    );
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});
```