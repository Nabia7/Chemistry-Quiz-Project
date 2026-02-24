function myfunction() {
  document.getElementById("nav").classList.toggle("show");
}

  // navbar

        function myfunction() {
            document.getElementById("nav").classList.toggle("show");
        }

        window.addEventListener("scroll", function () {
            const header = document.querySelector("header");
            header.classList.toggle("scrolled", window.scrollY > 10);
        });


        document.querySelector('.scroll-to-top')?.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
