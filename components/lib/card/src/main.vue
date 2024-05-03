<template>
  <div id="m-card" class="m-card" :style="width? {width: width +'px'} : {}">
    <div class="m-card-img" :style="imgHeight? {height: imgHeight +'px'} : {}">
      <img :src="imgSrc" alt="img"/>
    </div>
    <div v-if="summary" class="m-card-summary">
      {{ summary }}
    </div>
    <div v-else class="m-card-summary">
      <slot/>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "m-card",
  props:{
    width:{//卡片宽度
      type: Number,
      default: 0,
    },
    imgSrc:{//卡片图片资源
      type: String,
      default: '',
    },
    imgHeight:{//图片宽度
      type: Number,
      default: 0,
    },
    summary:{//卡片概要
      type: String,
      default: '',
    }
    //还有一个footer属性属于slot插槽类型，不需要定义，只需要定义一个slot插槽标识为即可
  }
}
</script>