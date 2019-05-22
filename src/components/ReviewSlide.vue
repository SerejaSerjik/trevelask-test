<template>
  <div class="slide-container">
    <div class="user">
      <img src="../assets/logo.png" alt="" class="user-logo">
      <span class="user-name">{{username}}</span>
    </div>
    <div class="review-title">
      <span class="city">{{city}}</span> — о городе
    </div>
    <p class="review-text line-clamp">{{text}}</p>
    <ul class="images">
      <li class="image-wrapper" v-for="image in images" :key="image.id" @click="openBox(image)">
        <img :src="image.src" :alt="image.caption" class="image">
      </li>
    </ul>
    <div class="review-footer">
      <span class="date">{{date}}</span>
      <span class="bullet"></span>
      <span class="comments-number">{{comments}} комментариев</span>
      <span class="likes">
        <img src="../assets/like.svg" alt="" class="like-icon">
        <span class="likes-number">{{likes}}</span>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'review-slide',
  props: ['username', 'city', 'text', 'date', 'comments', 'likes'],
  data() {
    return {
      images: [
        {
          id: 1,
          src: './image1.png',
          caption: 'Image 1',
        },
        {
          id: 2,
          src: './image2.png',
          caption: 'Image 2',
        },
        {
          id: 3,
          src: './image3.png',
          caption: 'Image 3',
        },
        {
          id: 4,
          src: './image3.png',
          caption: 'Image 3',
        },
      ],
    }
  },
  methods: {
    openBox(image){
      this.$emit('openBox', {
         /* eslint-disable */
         image: image
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  .slide-container {
    width: 100%;
    height: 100%;
    background: #F9F7F2;
    padding: 26px 19px 0 19px
  }

  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    &-logo {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
    &-name {
      font-size: 15px; 
      line-height: 17px;
    }
  }

  .review-title {
    font-size: 13px;
    line-height: 17px;
    margin-top: 28px;
    text-transform: uppercase;
    letter-spacing: 0.464286px;
    color: #212121;
    & .city {
      color: #FC4F1E;
      font-weight: 600;
      
    }
  }

  .review-text {
    font-size: 15px;
    line-height: 25px;
    margin-top: 12px;
    font-family: 'Roboto', sans-serif;
    max-width: 272px;
    max-height: 177px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 20px;
    word-wrap: break-word;
    .line-clamp {
      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
    }
  }

  .images {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    .image {
      position: relative;
      z-index: 0;
      display: block;
      width: 100%;
      height: 100%;
    }
    .image-wrapper {
      position: relative;
      width: 50px;
      height: 50px;
      margin-right: 5px;
      cursor: pointer;
      list-style-type: none;
      &:last-child::after {
        content: '+7';
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        display: flex;
        font-size: 17px;
        line-height: 25px;
        justify-content: center;
        align-items: center;
        color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(16, 16, 16, 0.4);
        z-index: 1;
      }
    }
  }

  .review-footer {
    color: #9D9D9D;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 11px;
    font-family: 'Roboto', sans-serif;
    margin-top: 26px;
    span:not(.bullet) {
      cursor: pointer;
    }
    .bullet {
      width: 4px;
      height: 4px;
      background: #9D9D9D;
      border-radius: 100%;
    }
    .likes {
      display: flex;
      align-items: center;
      .like-icon {
        margin-right: 5px;
      }
    }
  }
</style>

