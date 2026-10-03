const themeToggle =
            document.getElementById("theme-toggle");

        const body =
            document.body;


        themeToggle.addEventListener("click", () => {

            body.classList.toggle("light-mode");


            if (body.classList.contains("light-mode")) {

                themeToggle.innerHTML =
                    '<i class="fa-solid fa-moon"></i>';

            } else {

                themeToggle.innerHTML =
                    '<i class="fa-solid fa-sun"></i>';

            }

        });



        const revealElements =
            document.querySelectorAll(
                ".about-header, .about-image, .about-box, .personal-details, .skills-header, .skill-card, .project-header, .project-card"
            );


        const revealObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach((element) => {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });