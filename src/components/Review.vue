<template>
  <div class="container">
    <h2>Отзывы о Барселоне</h2>
    <swiper :options="swiperOption">
        <swiper-slide  v-for="review in reviews" 
            :key="review.id">
          <review-slide 
            :username="review.username"
            :city="review.city"
            :text="review.text"
            :date="review.date"
            :likes="review.likes"
            @openBox="openBox"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <a href="#" class="button">Все отзывы</a>
      <lightbox @closeBox="closeBox" :imgsource="currentImage" v-if="lightBoxToggle"/>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ReviewSlide from './ReviewSlide.vue'
import LightBox from './LightBox.vue'

export default {
  name: 'app-review',
  components: {
    swiper,
    swiperSlide,
    ReviewSlide,
    'lightbox': LightBox,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      reviews: [
        { id: 1, 
          username: 'Наталия Полянская',
          city: 'Барселона',
          text: 'Барселона — моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз побывать и осмотреть...',
          date: 'около 1 года назад',
          likes: '9'
        },
        {
          id: 2, 
          username: 'Elena Bulgakova',
          city: 'Барселона',
          text: 'Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне...',
          date: '5 месяцев назад',
          likes: '7'
        },
        {
          id: 3, 
          username: 'Наталия Полянская',
          city: 'Барселона',
          text: 'Барселона — моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз побывать и осмотреть...',
          date: 'около 1 года назад',
          likes: '9'
        },
        {
          id: 4, 
          username: 'Elena Bulgakova',
          city: 'Барселона',
          text: 'Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне...',
          date: '5 месяцев назад',
          likes: '7'
        },
        {
          id: 5, 
          username: 'Наталия Полянская',
          city: 'Барселона',
          text: 'Барселона — моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз побывать и осмотреть...',
          date: 'около 1 года назад',
          likes: '9'
        },
        {
          id: 6, 
          username: 'Elena Bulgakova',
          city: 'Барселона',
          text: 'Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне...',
          date: '5 месяцев назад',
          likes: '7'
        }
      ],
      currentImage: {},
      lightBoxToggle: false
    }
  },
  methods: {
    closeBox() {
      this.lightBoxToggle = false;
    },
    openBox(data) {
      this.currentImage = data.image
      this.lightBoxToggle = !this.lightBoxToggle;
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 20px;
    padding: 35px 30px;
    position: relative;
  }

  .swiper-container{
    margin-top: 21px;
  }

  .swiper-slide {
    width: 300px;
    height: 410px;
    background: #F9F7F2;
  }

  .button {
    font-size: 15px;
    font-weight: bold;
    line-height: 17px;
    color: #212121;
    border: 2px solid #FF4641;
    border-radius: 2px;
    padding: 9px 24px;
    position: absolute;
    left: 30px;
    bottom: 30px;
    cursor: pointer;
    z-index: 2;
    &:hover {
      background: #FF4641;
      color: #fff;
      transition: background .3s ease
    }
  }
</style>

<style lang="scss">
  .swiper-wrapper {
    padding-bottom: 105px;
  }
  .swiper-pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    bottom: 10px;
    right: 0;
    width: 50%;
  }
  .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    background: #000;
    opacity: 1;
    &.swiper-pagination-bullet-active {
      background: #FF4641;
      width: 8px;
      height: 8px;
    }
  }
</style>

