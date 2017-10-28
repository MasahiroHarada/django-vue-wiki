import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Container from './components/Container.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  components: {
    container: Container
  },
  router,
  render() {
    return <container />;
  }
});
