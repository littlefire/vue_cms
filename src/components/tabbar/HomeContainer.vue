<template>
  <div>

    <!-- 轮播图区域 -->
    <!-- <mt-swipe :auto="4000"> -->
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <!-- 将来，谁使用此 轮播图组件，谁为我们传递 lunbotuList -->
      <!-- 此时，lunbotuList 应该是 父组件向子组件传值来设置 -->
      <!-- <mt-swipe-item><img src="../../images/kb1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/kb2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/kb3.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/kb4.jpg" alt=""></mt-swipe-item>
    </mt-swipe> -->
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <!-- 将来，谁使用此 轮播图组件，谁为我们传递 lunbotuList -->
      <!-- 此时，lunbotuList 应该是 父组件向子组件传值来设置 -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt="" :class="{'full': isfull}">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 到 6宫格 的改造工程 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
              <img src="../../images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
              <img src="../../images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
              <img src="../../images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
  </ul>
  </div>
</template>

<script>
// import { Toast } from "mint-ui"
import kb1 from '../../images/kb1.jpg'
import kb2 from '../../images/kb2.jpg'
import kb3 from '../../images/kb3.jpg'
import kb4 from '../../images/kb4.jpg'
export default {
  data () {
    return {
      isfull: true,
      lunbotuList: [
        {
          url: '/images/kb1.jpg',
          img: kb1
        },
        {
          url: '/images/kb2.jpg',
          img: kb2
        },
        {
          url: '/images/kb3.jpg',
          img: kb3
        },
        {
          url: 'images/kb4.jpg',
          img: kb4
        }] // 保存轮播图的数组
    }
  },
  created () {
    this.getLunbotu()
  },
  methods: {
    getLunbotu () {
      // 获取轮播图数据的方法
    },
    isFull () {
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    text-align: center;

    img {
      // width: 100%;
      height: 100%;
    }
  }
}

.full {
  width: 100%;
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body {
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
