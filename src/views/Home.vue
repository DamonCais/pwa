<template>
  <div class="home">
    <p>{{data}}</p>
    <p>{{href}}</p>
    <p>{{appid}}</p>
    <p>{{code}}</p>
    <a :href="link">{{link}}</a>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      code: "",
      href: "",
      appid: "wx6115bb7f7f3d9bb9",
      appsecret: "be1b4402144cf1a2b203c14cc657d38f",
      redirect_uri: "http://damon.s1.natapp.cc",
      link: "",
      data: "---"
    };
  },
  components: {},
  mounted() {
    this.$route.query;
    this.code = _.get(this.$route.query, "code");
    this.href = window.location.href;

    if (!this.code) {
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
        this.appid
      }&redirect_uri=${encodeURIComponent(
        decodeURIComponent(this.redirect_uri)
      )}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
    } else {
      axios
        .get(`/getinfo?code=${this.code}`)
        .then(res => {
          this.data = res.data;
        })
        .catch(err => {
          this.data = err;
        });
    }
  }
};
</script>
