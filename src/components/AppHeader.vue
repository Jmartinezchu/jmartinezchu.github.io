<template >
  <header class="header">
    <div class="navbar-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <routerLink class="navbar-brand" to="/">
                <img src="../assets/images/logo2.png" alt="Logo" />
              </routerLink>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div
                class="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <router-link class="page-scroll" to="/"
                      >Sobre mi</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="page-scroll" to="/Skills"
                      >Skills</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="page-scroll" to="/Proyectos"
                      >Portafolio</router-link
                    >
                  </li>

                  <li class="nav-item">
                    <router-link class="page-scroll" to="Contacto"
                      >Contacto</router-link
                    >
                  </li>
                </ul>
              </div>
              <!-- navbar collapse -->
            </nav>
            <!-- navbar -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- navbar area -->
  </header>
</template>
<script>
export default {};
</script>
