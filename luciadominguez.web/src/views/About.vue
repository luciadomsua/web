<template>
  <div class="about">
    <div class="picture">
      <img src="@/assets/profile.jpg" alt="Lucía Domínguez">
    </div>
    <div class="content">
      <p>Me llamo Lucía, tengo 32 años y levo, literalmente, toda la vida intentando capturar momentos para convertirlos en eternos. No sé si es por mi mala memoria o porque he vivido siempre rodeada de cámaras y fotos.</p>
      <p>
        En cuanto pude me compré una cámara “buena” y, aunque todo va a épocas, hace tiempo que la fotografía se ha convertido en una parte relevante de mi vida.
        Conozco la técnica y sé que es importante, pero nunca me ha llamado la atención.
      </p>
      <p>No soy de las que entran a un concierto y analiza la luz para saber qué ISO utilizar. Lo que me gusta de la fotografía es lo que permite, captar momentos que son importantes o especiales por el motivo que sea. Prefiero una foto movida de un momento increíble, con diferencia. Y eso es lo que vais a encontrar aquí. Trocitos de mi vida en forma de imagen. Fotos que os pueden parecer bonitas, o no, pero que para mí encierran una historia.</p>
      <p>
        Podéis seguirme en Instagram:
        <a
          href="https://www.instagram.com/luciadominguez__/?hl=es"
          rel="nofollow"
          target="_blank"
        >luciadominguez__</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  mounted(): void {}
}
</script>

<style lang="scss" scoped>
@import "@/styles/defines.scss";

.about {
  margin-top: 50px;
  display: flex;
  background-color: white;
  box-shadow: $polaroidBoxShadow;

  .picture {
    width: 25%;
    display: flex;
    padding: 15px;
    justify-content: center;
    align-items: center;

    img {
      box-shadow: $polaroidBoxShadow;
    }
  }

  .content {
    width: 75%;
    padding: 15px;
    text-align: left;
    display: inherit;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column;
  }
}

@media screen and (max-width: 479px) {
  .about {
    margin-top: 0;
    flex-flow: column;

    .picture {
      width: 100%;
    }

    .content {
      width: 100%;
    }
  }
}
</style>
