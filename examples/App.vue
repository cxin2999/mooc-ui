<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MoocUiDemo></MoocUiDemo>
    <m-card
    imgSrc="mooc01.jpg"
    summary="游戏引擎原理及应用"
    />
    <m-card
    imgSrc="mooc02.jpg"
    summary="深度学习及其应用"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 528人报名</div>
          <div class="price">¥299.00</div>
        </div>
      </template>

    </m-card>
    <m-button buttonName="普通登录" />
    <m-button buttonName="双重认证登录" width="200"/>
  </div>
</template>

<script>

import MoocUiDemo from "../components/lib/demo/src/main.vue";
import MCard from "../components/lib/card/src/main.vue";
import MButton from "../components/lib/button/src/main.vue";

export default {
  name: 'App',
  components: {
    MButton,
    MCard,
    MoocUiDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer{
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level{
  color: #9199A1;
  margin-bottom: 8px;
}
.price{
  color: #F01414;
}

</style>
