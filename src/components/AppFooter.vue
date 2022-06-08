<template>
  <footer class="footer" style="bottom: 0">
    <div class="container">
      <div class="widget-wrapper">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="footer-widget">
              <div class="logo mb-30">
                <a href="index.html">
                  <img
                    src="../assets/images/logo3.png"
                    alt=""
                    style="width: 150px"
                  />
                </a>
              </div>
              <p class="desc mb-30 text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                dinonumy eirmod tempor invidunt.
              </p>
              <ul class="socials">
                <li>
                  <a
                    href="https://www.facebook.com/Julio.martinez.chunga79219/"
                    target="_blank"
                  >
                    <i class="lni lni-facebook-filled"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/jmartinezchu.03/"
                    target="_blank"
                  >
                    <i class="lni lni-instagram-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="tel:970860246">
                    <i class="lni lni-phone"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Jmartinezchu" target="_blank">
                    <i class="lni lni-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xl-2 col-lg-2 col-md-6">
            <div class="footer-widget">
              <h3>Home</h3>
              <ul class="links">
                <li><routerLink to="/">Sobre mi</routerLink></li>
                <li>
                  <a href="https://github.com/Jmartinezchu" target="_blank"
                    >Portafolio</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-6">
            <div class="footer-widget">
              <h3>Caracteristicas</h3>
              <ul class="links">
                <li>
                  <router-link to="/Que_hacemos"
                    >¿Que hay que hacer hoy?</router-link
                  >
                </li>
                <li><router-link to="/Skills">Skills</router-link></li>
                <li><router-link to="/Proyectos">Proyectos</router-link></li>
                <li><router-link to="/Contacto">Contacto</router-link></li>
              </ul>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-6">
            <div class="footer-widget">
              <h3>Info</h3>
              <ul class="links">
                <li>jmartinezchu.03@gmail.com</li>
                <li>970860246</li>
                <li>La Union - Piura -Perú</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>