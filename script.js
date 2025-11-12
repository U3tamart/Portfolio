 window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.nav-bar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        src="https://cdn.emailjs.com/sdk/3.2.0/email.min.js"
 (function(){
    emailjs.init("Z41Erc963FEk4d_yw"); // seu user ID aqui
  })();

  const modal = document.getElementById("emailModal");
  const openBtn = document.getElementById("openEmailModal");
  const closeBtn = modal.querySelector(".close");
  const form = document.getElementById("contactForm");
 openBtn.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm('service_nuezfgp', 'template_8qndnqo', this)
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        modal.style.display = "none";
        form.reset();
      }, (error) => {
        alert('Erro ao enviar a mensagem: ' + JSON.stringify(error));
      });
  });

