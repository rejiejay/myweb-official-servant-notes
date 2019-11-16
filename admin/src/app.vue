<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.flex-start,
.flex-start-top,
.flex-start-center,
.flex-start-bottom,
.flex-column-center,
.flex-center {
  display: -webkit-box; /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box; /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox; /* 混合版本语法: IE 10 */
  display: -webkit-flex; /* 新版本语法: Chrome 21+ */
  display: flex; /* 新版本语法: Opera 12.1, Firefox 22+ */
}

.flex-start {
  justify-content: flex-start;
  align-items: flex-start;
}

.flex-start-top {
  justify-content: flex-start;
  align-items: flex-start;
}

.flex-start-center {
  justify-content: flex-start;
  align-items: center;
}

.flex-start-bottom {
  justify-content: flex-start;
  align-items: flex-end;
}

.flex-column-center {
  flex-direction: column;
  align-items: center;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.flex-rest {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
</style>
