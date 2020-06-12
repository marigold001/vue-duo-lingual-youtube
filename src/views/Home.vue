<template>
  <div class="home">
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      cookieObject: null,
      cookieLang: null
    }
  },
  mounted() {
    console.log(this.$cookie);
    this.cookieObject= new this.$cookie;
    this.cookieLang = this.cookieObject.read('language');
    console.log()
    if(this.cookieLang) {
      console.log('check');
      console.log(this.cookieLang);
      this.$router.push( '/' + this.cookieLang + '/videos')
    }
  }
}
</script>
