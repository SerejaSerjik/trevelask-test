<template>
  <div class="container">
    <img src="../assets/Барселона_Испания.png" alt="" class="header-image">
    <div class="header-title">
      <h2>Барселона — обзор города</h2>
      <p class="line-clamp">Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями и гастрономическим разнообразием понравилась мне в первый же день пребывания и стала местом, в котором...</p>
      <a href="#" class="learn-more">Читать дальше</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 110px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .header-image {
    width: 100%;
    height: auto;
  }

  .header-title {
    padding: 104px 37px 0 29px;
    display: flex;
    flex-direction: column;
    p {
      max-width: 363px;
      max-height: 120px;
      margin-top: 19px;
      overflow: hidden;
      text-overflow: ellipsis;
    }   
    .line-clamp {
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
    }
  }

  .header-title a.learn-more {
    font-family: 'Kievit Pro';
    border-bottom: 1px solid #FF4641;
    margin-top: 6px;
    max-width: 111px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      position: relative;
      margin-top: 0;
      img {
        display: none;
      }
    }
    .header-title {
      position: relative;
      padding-bottom: 52px;
      z-index: 0;
      a.learn-more {
        margin-top: 15px;
      }
      &::after {
        content: '';
        background: url('../assets/Барселона_Испания.png');
        background-size: cover;
        background-position-y: 50%;
        opacity: 0.5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
      }
    }
  }
</style>


