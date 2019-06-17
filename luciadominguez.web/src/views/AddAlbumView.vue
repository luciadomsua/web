<template>
  <div class="add-album-view">
    <h1>Añadir album</h1>
    <form>
      <label class="label" for="albumTitle">Titulo del abum:</label>
      <input class="input" type="text" name="albumTitle" id="albumTitle" v-model="albumTitle">

      <label class="label" for="albumDescription">Descripción:</label>
      <input
        class="input"
        type="text"
        name="albumDescription"
        id="albumDescription"
        v-model="albumDescription"
      >

      <div class="file is-boxed is-fullwidth">
        <label class="file-label">
          <input
            class="file-input"
            type="file"
            name="files"
            id="files"
            multiple
            @change="fileChange($event.target.files)"
          >
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Elige las fotos…</span>
          </span>
        </label>
      </div>

      <button class="button is-info is-fullwidth" @click="startUpload()" type="button">Crear</button>
      <button class="button is-danger is-fullwidth" type="reset">Cancelar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AddAlbumView extends Vue {
  files: FormData = new FormData();
  albumTitle: string = "";
  albumDescription: string = "";

  created() {
    this.files = new FormData();
    this.albumTitle = "";
    this.albumDescription = "";
  }

  fileChange(fileList: any[]) {
    for (let i = 0; i < fileList.length; i++) {
      this.files.append("file", fileList[i], fileList[i].name);
    }
  }

  startUpload() {
    this.files.append("albumTitle", this.albumTitle);
    this.files.append("albumDescription", this.albumDescription);

    fetch("api/albums/add", {
      method: "POST",
      body: this.files
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.files = new FormData();
        this.albumTitle = "";
        this.albumDescription = "";
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/defines.scss";

.add-album-view {
  display: flex;
  flex-flow: column;
  background-color: white;
  padding: 15px;
  box-shadow: $polaroidBoxShadow;
  border-radius: 2px;

  form {
    display: flex;
    flex-flow: column;
    align-items: flex-start;

    div.file {
      margin-top: 10px;
      width: 100%;
    }

    button {
      margin-top: 10px;
    }
  }
}
</style>
