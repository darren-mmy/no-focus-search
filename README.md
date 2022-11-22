# noFocusSearch

## Project setup
```
npm install noFocusSearch
```

### How to use
```
<template>
  <div>
    <noFocusSearch
      @getInput="getInput"
      @checkItem="checkItem"
      :dataList="dataList"
      :noData="'无匹配结果'"
    />
</template>
<script>
import noFocusSearch from 'noFocusSearch';
export default {
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
  methods: {
    checkItem(item) {
      console.log(item)
    },
    getInput(val) {
      console.log(val)
    }
  }
}
</script>

```