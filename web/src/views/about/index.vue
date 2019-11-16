<template>
  <section class="author">
    <article class="item">
      <h1 class="logo">
        <img src="../../assets/images/logo.svg" alt="LOGO">
      </h1>
    </article>
    <article class="text">
      <p>
        非常感谢 liangfengbo <a href="https://github.com/liangfengbo/nodejs-koa-blog" target="_blank">
        Github </a>开源的此项目代码
      </p>
      <p class="content">此项目的作用为：笔记体系的最后一个环节</p>
      <p>收集——完善——整理——归档。</p>
    </article>
    <article class="end">
      <p>收集：任何时刻，收集 公务员觉得有价值的资讯</p>
      <p>完善：整理出要点，得到有用的笔记</p>
      <p>整理：整理到博客系统即可</p>
    </article>
  </section>
</template>

<script>
  export default {
    created() {
      document.title = `rejiejay.cn Note system`
    }
  }
</script>

<style scoped lang="scss">
  .author {
    box-sizing: border-box;
    width: 70%;
    min-height: 80vh;
    margin: 24px auto;
    padding-bottom: 24px;
    background-color: white;
  }

  .item {
    width: 100%;
    padding: 48px 0;
    text-align: center;
    background: white;
  }

  .logo {
    width: 360px;
    margin: 0 auto;

    & img {
      width: 100%;
    }
  }

  a {
    color: #409EFF;
  }

  .text {
    padding: 0 24px 24px;
    line-height: 42px;
    font-size: 20px;
    color: #666;
    text-indent: 2em;
  }

  .content {
    padding-top: 24px;
  }

  .end {
    line-height: 42px;
    font-size: 20px;
    color: #666;
    text-indent: 2em;
  }

  @media screen and (min-width: 200px) and (max-width: 750px) {
    .author {
      width: 100%;
    }
  }
</style>
