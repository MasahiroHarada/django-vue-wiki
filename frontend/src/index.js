import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Index from './components/Index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  components: {
    index: Index
  },
  router,
  render() {
    return <index />;
  }
});
