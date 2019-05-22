<template>
  <div id="app">
    <app-header />
    <app-review />
    <div class="chat-wrapper">
      <div class="user-chat chat-inner">
        <h2>Чат с пользователем</h2>
        <app-chat 
          :name="'Наталья Полянская'"
          :position="'Гид по Баварии, фото'"
          :rating="true"
          :isAdmin="false"
        />
      </div>
      <div class="admin-chat chat-inner">
        <h2>Час с администратором</h2>
        <app-chat 
          :name="'Администратор'"
          :position="'TravelAsk'"
          :isAdmin="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Review from './components/Review.vue'
import Chat from './components/Chat.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-review': Review,
    'app-chat': Chat
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: 'Kievit Pro';
    src: url('assets/fonts/KievitPro-Regular.eot');
    src: url('assets/fonts/KievitPro-Regular.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/KievitPro-Regular.woff') format('woff'),
    url('assets/fonts/KievitPro-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Kievit Pro Light';
    src: url('assets/fonts/KievitPro-Light.eot');
    src: url('assets/fonts/KievitPro-Light.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/KievitPro-Light.woff') format('woff'),
    url('assets/fonts/KievitPro-Light.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Kievit Pro Bold';
    src: url('assets/fonts/KievitPro-Bold.eot');
    src: url('assets/fonts/KievitPro-Bold.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/KievitPro-Bold.woff') format('woff'),
    url('assets/fonts/KievitPro-Bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Kievit Pro';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    font-size: 17px;
    background-color: #f9f7f2;
  }

  h2 {
    font-size: 29px;
    letter-spacing: 0.03em;
    font-family: 'Kievit Pro Bold';
  }

  h3 {
    font-size: 18px;
    font-family: 'Kievit Pro Bold';
  }

  p, a {
    color: #000;
    font-family: 'Kievit Pro Light';
    text-decoration: none;
  }

  .container {
    max-width: 879px;
    margin: 0 auto;
    background-color: #fff;
  }

  .chat-wrapper {
    max-width: 879px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: center;
    &>div {
      display: flex;
      flex-basis: calc(50% - 47px);
    }
    .user-chat {
      border-right: 2px solid #EBE9E4;
      padding-right: 24px;
    }
    .admin-chat {
      padding-left: 23px;
    }
    .chat-inner {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 900px) {
    .chat-wrapper {
      flex-direction: column;
      margin-top: 20px;
      .user-chat {
        border: none;
        padding: 0;
      }
      .admin-chat {
        padding: 0;
        margin-top: 20px;
      }
      .chat-inner {
        align-items: center;
      }
    }
  }

</style>
