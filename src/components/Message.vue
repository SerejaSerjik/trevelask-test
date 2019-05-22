<template>
  <div class="message-container" :class="{ user: from === 'admin'}">
    <img src="../assets/logo.png" alt="" class="logo" v-if="from === 'user'"/>
    <img src="../assets/logo2.png" alt="" class="logo" v-else/>
    <div class="data">
      <p class="text">{{text}}</p>
      <span class="time">{{time}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-message',
  props: ['from', 'text', 'time']
}
</script>

<style lang="scss" scoped>
  .message-container {
    display: flex;
    flex-direction: row;
    padding: 12px;
    &.user {
      background: #F9F7F2;
    }
    .logo {
      width: 44px;
      height: 44px;
      display: flex;
      margin-right: 19px;
    }
    .data {
      padding: 2px;
      .text {
        font-size: 15px;
        font-family: 'Kievit Pro';
        line-height: 24px;
      }
      .time {
        font-size: 11px;
        font-family: 'Roboto';
        line-height: 25px;
        color: #9D9D9D;
      }
    }
  }
</style>

