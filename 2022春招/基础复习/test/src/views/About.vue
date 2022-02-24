<template>
  <div>About</div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    console.log("123");
    console.log(to);
    console.log(from);
    next();
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  },
};
</script>

<style>
</style>