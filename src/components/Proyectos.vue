<template>
  <div>
    <!-- ======== about-section start ======== -->
    <section id="about" class="about-section pt-150">
      <h2 style="text-align: center">Mis Proyectos</h2>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-6">
            <div class="about-img">
              <img
                src="../assets/images/about/about-1.png"
                alt=""
                class="w-100"
              />
              <img
                src="../assets/images/about/about-left-shape.svg"
                alt=""
                class="shape shape-1"
              />
              <img
                src="../assets/images/about/left-dots.svg"
                alt=""
                class="shape shape-2"
              />
            </div>
          </div>

          <div class="col-xl-6 col-lg-6">
            <div class="about-content">
              <div class="section-title mb-30">
                <h2 class="mb-25 wow fadeInUp" data-wow-delay=".2s">
                  Landing Pages
                </h2>
                <p class="wow fadeInUp" data-wow-delay=".4s">
                  Desarrolladas con
                  <code>Html, CSS, Sass, Vanilla Js </code> ,contienen
                  formulario contacto, visión, misión, compromiso, son amigables
                  al interactuar con el usuario
                </p>
              </div>
              <a
                href="javascript:void(0)"
                class="main-btn btn-hover border-btn wow fadeInUp"
                data-wow-delay=".6s"
                >Repositorio</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ======== about-section end ======== -->

    <!-- ======== about2-section start ======== -->
    <section id="about" class="about-section pt-150">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-6">
            <div class="about-content">
              <div class="section-title mb-30">
                <h2 class="mb-25 wow fadeInUp" data-wow-delay=".2s">
                  Clon de Xceed <span>Pagina de eventos</span>
                </h2>
                <p class="wow fadeInUp" data-wow-delay=".4s">
                  Clon de la pagina de Xceed para crear eventos de todo tipo,
                  amigable con el usuario y desarrollado utilizando las
                  siguientes tecnologías
                </p>
              </div>
              <ul>
                <li><code>Vue.js</code></li>
                <li><code>Bootstrap</code></li>
                <li><code>Vuetify</code></li>
                <li><code>Font Awesome</code></li>
                <li><code>Sweet Alert</code></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 order-first order-lg-last">
            <div class="about-img-2">
              <img
                src="../assets/images/about/about-2.png"
                alt=""
                class="w-100"
              />
              <img
                src="../assets/images/about/about-right-shape.svg"
                alt=""
                class="shape shape-1 desaparecer"
              />
              <img
                src="../assets/images/about/right-dots.svg"
                alt=""
                class="shape shape-2 desaparecer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ======== about2-section end ======== -->
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@media (max-width: 700px) {
  .desaparecer {
    display: none;
  }
}
</style>