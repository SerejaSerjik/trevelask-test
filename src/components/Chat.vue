<template>
  <div class="chat-container">
    <div class="chat-title">
      <div class="user">
        <img src="../assets/logo.png" alt="" class="logo">
        <div class="info">
          <h3 class="name">{{name}}</h3>
          <span class="position"><img src="../assets/flag.svg" alt="" class="flag"> {{position}}</span>
        </div>
        <div class="rating" v-if="rating">
          <img src="../assets/star-fill.svg" alt="" class="star">
          <img src="../assets/star-fill.svg" alt="" class="star">
          <img src="../assets/star-fill.svg" alt="" class="star">
          <img src="../assets/star-fill.svg" alt="" class="star">
          <img src="../assets/star-empty.svg" alt="" class="star">
        </div>
      </div>
    </div>
    <div class="chat-window">
      <app-message 
        v-for="message in messages"
        :key="message.id"
        :from="message.from"
        :text="message.text"
        :time="message.time"
      />
    </div>
    <div class="chat-footer">
      <img src="../assets/logo2.png" alt="" class="logo" v-if="isAdmin">
      <img src="../assets/logo.png" alt="" class="logo" v-else>
      <input type="text" class="chat-input" placeholder="Напишите сообщение..." v-model="inputText" @keyup.13="sendMessage">
      <img src="../assets/send.svg" alt="" class="send-icon" @click="sendMessage">
    </div>
  </div>
</template>

<script>
import Message from './Message.vue'

export default {
  name: 'app-chat',
  props: ['name', 'position', 'rating', 'isAdmin'],
  components: { 
    'app-message': Message, 
  },
  computed: {
    messages() {
      return this.$store.getters.getMessages;
    }
  },
  data() {
    return {
      inputText: '',
    }
  },
  methods: {
    sendMessage() {
       if (this.inputText.trim() !== '') {
        this.$store.dispatch('sendMessage', {
          from: this.isAdmin,
          text: this.inputText
        })
        .then(() => {
          this.inputText = ''
          document.querySelectorAll('.chat-window').forEach(function(item) {
            item.scrollTop = item.scrollHeight
          })                                                      
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .chat-container {
    margin-top: 25px;
    width: 415px;
    background: #fff;
  }
  .chat-title {
    padding: 27px 19px 27px 26px;
    width: 100%;
    border-bottom: 1px solid #ECECEC;
    .user {
      display: flex;
      flex-direction: row;
      align-items: center;
      .logo {
        width: 44px;
        height: 44px;
      }
      .info {
        display: flex;
        flex-direction: column;
        margin-left: 19px;
        .name {
          line-height: 17px;
        }
        .position {
          font-size: 13px;
          color: #FF4641;
          line-height: 17px;
        }
      }
      .rating {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 59px;
        .star {
          cursor: pointer;
          margin-right: 3px;
        }
      }
    }
  }
  .chat-window {
    height: 495px;
    overflow-y: scroll;
    padding: 0 13px 0 14px;
    &::-webkit-scrollbar {
      width: 3px; 
    }
    &::-webkit-scrollbar-thumb {
      background: #FF4641;
    }
  }
  .chat-footer {
    padding: 26px 26px 20px 26px;
    border-top: solid 1px #ECECEC;
    display: flex;
    align-items: center;
    .logo {
      margin-right: 19px;
    }
    .chat-input {
      width: 270px;
      height: 49px;
      border: 1px solid #ECECEC;
      margin-right: 14px;
      padding-left: 24px;
    }
    .send {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 900px) {
    .chat-container {
      width: 100%;
    }
    .chat-title, .chat-footer {
      justify-content: space-between;
    }
    .chat-footer .chat-input {
      width: 100%;
    }
  }
</style>


