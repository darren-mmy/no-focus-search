<template>
  <div class="about">
    <noFocusSearch
      @getInput="getInput"
      :dataList="dataList"
      @checkItem="checkItem"
      :noData="'无匹配结果'"
    />
    <div class="daytime">
      <button class="btn" @click="changeLight">Light</button>
      <button class="btn" @click="changeDark">Dark</button>
      <div class="poetry">
        <h1>沁园春·雪</h1>
        <p>北国风光，千里冰封，万里雪飘。</p>
        <p>望长城内外，惟余莽莽；大河上下，顿失滔滔。</p>
        <p>山舞银蛇，原驰蜡象，欲与天公试比高。</p>
        <p>须晴日，看红装素裹，分外妖娆。</p>
        <p>江山如此多娇，引无数英雄竞折腰。</p>
        <p>惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。</p>
        <p>一代天骄，成吉思汗，只识弯弓射大雕。</p>
        <p>俱往矣，数风流人物，还看今朝。</p>
      </div>
    </div>
  </div>
</template>
<script>
import noFocusSearch from '@/components/noFocusSearch.vue';
export default {
  name: 'aboutPage',
  components: {
    noFocusSearch
  },
  data() {
    return {
      dataList: [
        { id: 1, name: 'array', age: 24 },
        { id: 2, name: 'array1', age: 24 },
        { id: 3, name: 'array12', age: 24 },
        { id: 4, name: 'array123', age: 24 },
        { id: 5, name: 'object', age: 24 },
        { id: 6, name: 'object1', age: 24 },
        { id: 7, name: 'object12', age: 24 },
        { id: 8, name: 'object123', age: 24 },
        { id: 9, name: 'string', age: 24 },
        { id: 10, name: 'string111', age: 24 },
        { id: 11, name: 'boolean', age: 24 },
        { id: 12, name: 'boolean1', age: 24 },
        { id: 13, name: 'boolean12', age: 24 },
        { id: 14, name: 'number', age: 24 },
        { id: 15, name: 'number1', age: 24 },
        { id: 16, name: 'number12', age: 24 },
        { id: 17, name: 'undefined', age: 24 },
        { id: 18, name: 'undefined1', age: 24 },
        { id: 19, name: 'undefined12', age: 24 }
      ]
    }
  },
  created() {
    let theme = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : 'light'
    document.documentElement.setAttribute('theme', theme)
  },
  methods: {
    checkItem(item) {
      console.log(item)
    },
    getInput(val) {
      console.log(val)
    },
    changeLight() {
      document.documentElement.setAttribute('theme', 'light')
      localStorage.setItem('theme', JSON.stringify('light'))
    },
    changeDark() {
      document.documentElement.setAttribute('theme', 'dark')
      localStorage.setItem('theme', JSON.stringify('dark'))
    }
  },
}
</script>


<style lang="scss" scoped>
.daytime {
  width: 100%;
  height: 100vh;
  background-color: var(--bgColor);

  .btn {
    text-align: center;
    cursor: pointer;
    background-color: var(--bgColor);
    color: var(--textColor);
  }

  .poetry {
    text-align: center;

    h1 {
      color: var(--titleColor);
    }

    p {
      color: var(--textColor);
    }
  }
}
</style>
