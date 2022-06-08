<template >
  <div>
    <section id="home" class="hero-section">
      <div class="container">
        <div class="row align-items-center position-relative">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1 class="wow fadeInUp" data-wow-delay=".4s">¡Hola Mundo!</h1>
              <p class="wow fadeInUp" data-wow-delay=".6s">
                Las tecnologías cada vez van actualizándose más y más, y estoy
                dispuesto a empaparme de ellas para mejorar y aportar en mi area
                de trabajo.
              </p>
              <router-link
                to="/Contacto"
                class="main-btn border-btn btn-hover wow fadeInUp"
                data-wow-delay=".6s"
              >
                Contactame
              </router-link>
              <a href="#features" class="scroll-bottom">
                <i class="lni lni-arrow-down"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-6 flex__center">
            <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
              <img
                src="../../assets/images/logo3.png"
                alt=""
                style="
                  object-fit: cover;
                  width: 100%;
                  max-width: 400px;
                  min-width: 200px;
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <lopuedo></lopuedo>
    <Skills></Skills>
    <Proyectos></Proyectos>
    <Contacto></Contacto>
    <a href="#" class="scroll-top btn-hover">
      <i class="lni lni-chevron-up"></i>
    </a>
  </div>
</template>
<script>
import Contacto from "../Contacto.vue";
import Proyectos from "../Proyectos.vue";
import Skills from "../Skills.vue";
import Lopuedo from "../Lopuedo.vue";

export default {
  components: {
    Proyectos,
    Skills,
    Lopuedo,
    Contacto,
  },
};
</script>
