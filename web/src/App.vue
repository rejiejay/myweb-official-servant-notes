<template>
  <div id="app">
    <v-loading :text="loadingText" v-if="isLoading" />
    <v-headers />
    <router-view class="router-views" />
    <main-footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VLoading from "./components/Loading";
import VHeaders from "./components/Headers";
import MainFooter from "./components/MainFooter";

export default {
  components: {
    VLoading,
    VHeaders,
    MainFooter
  },
  data() {
    return {
      centerDialogVisible: true,
      showClose: true
    };
  },
  computed: {
    ...mapGetters("loading", ["isLoading", "loadingText"])
  },
  methods: {}
};
</script>

<style>

html,
body {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: #f8f8f8;
}

#app * {
  font-family: "Alibaba-PuHuiTi-Regular" !important;
}

#app [class*=" el-icon-"],
#app [class^="el-icon-"] {
  font-family: element-icons !important;
}
section,
article,
header,
nav,
ul,
li,
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
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
