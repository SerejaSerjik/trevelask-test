<template>
  <div id="overlay" @click="closeBox">
    <img :src="imgsource.src" alt="" />
    <span>{{ imgsource.caption }}</span>
  </div>
</template>

<script>
export default {
  name: 'lightbox',
  props: {
    imgsource: Object,
  },
  methods: {
    closeBox() {
      this.$emit('closeBox', {
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #overlay {
    position: fixed;
    width: 100%;
    height: 100vh;
    /* height: 100vh; */
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 999;
  }

  #overlay img {
    height: 80%;
    width: auto;
  }

  #overlay span {
    color: white;
    margin-top: 1rem;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  @media only screen and (max-width: 500px) {
    .image {
      width: 80%;
    }
    #overlay img {
      height: auto;
      width: 90%;
    }
  }

  @media only screen and (max-width: 800px) and (min-width: 500px) {
    .image {
      width: 30%;
    }
    #overlay img {
      height: auto;
      width: 90%;
    }
  }
</style>
