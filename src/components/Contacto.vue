<template>
  <div>
    <section id="contact" class="subscribe-section pt-120">
      <div class="container">
        <div class="subscribe-wrapper img-bg">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-7">
              <div class="section-title mb-15">
                <h2 class="text-white mb-25">
                  Las 24 horas Disponible para ti
                </h2>
                <p class="text-white pr-5">¡Cada paso cuenta! 👌</p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-5">
              <form action="#" id="formulario" class="subscribe-form">
                <input
                  type="text"
                  name="nombres"
                  id="nombres"
                  placeholder="Nombres Completos"
                  v-model="form.nombres"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  v-model="form.email"
                />
                <input
                  type="tel"
                  name="telefono"
                  id="telefono"
                  placeholder="Celular"
                  v-model="form.telefono"
                />
                <textarea
                  type="text"
                  name="mensaje"
                  id="mensaje"
                  placeholder="Mensaje"
                  v-model="form.mensaje"
                />
                <button
                  type="submit"
                  id="btn-enviar"
                  @click.prevent="SendEmail()"
                  class="main-btn btn-hover"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      timer: 5000,
      form: {
        nombres: "",
        email: "",
        telefono: "",
        mensaje: "",
      },
    };
  },
  methods: {
    SendEmail() {
      let me = this.form;
      console.log("click me");
      if (
        me.nombres == "" ||
        me.email == "" ||
        me.telefono == "" ||
        me.mensaje == ""
      ) {
        // todos los campos completos
        swal("¡Alerta!", "Debes completar todos los campos", "warning");
      } else if (me.nombres.length < 10 || me.nombres.length > 40) {
        // nombre valido
        swal("¡Alerta!", "Tu nombre no es valido", "warning");
      } else if (isNaN(me.telefono) || me.telefono.length !== 9) {
        // celular valido
        swal("¡Alerta!", "El número ingresado no es valido", "warning");
      } else if (me.email.length < 9 && me.email.length > 30) {
        // validar asunto
        swal("¡Alerta!", "El asunto no es valido", "warning");
      } else if (me.mensaje.length < 5) {
        // validar mensaje
        swal("¡Alerta!", "El mensaje no es objetivo", "warning");
      } else {
        emailjs
          .send(
            "service_bg6eg17",
            "template_j11vfyo",
            me,
            "user_QMFPARiasfp4iCN0qQ4y3"
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);

              swal(
                `¡${me.nombres} sus Datos han sido Enviados!`,
                "Muy pronto nos contactaremos con usted",
                "success",
                {
                  timer: 4000,
                }
              );
              location.href = "/";
            },
            (err) => {
              console.log("FAILED...", err);
            }
          );
      }
    },
  },
};
</script>