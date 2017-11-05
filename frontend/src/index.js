import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Index from './components/Index.vue';
import axios from 'axios';
import auth from './auth';

axios.interceptors.request.use(config => {
  const jwtToken = auth.getToken();
  if (jwtToken) {
    config.headers = {'Authorization': `JWT ${jwtToken}`};
  }
  return config;
});

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
