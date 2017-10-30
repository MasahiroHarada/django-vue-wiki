import FolderIndex from './components/router_views/folders/Index.vue';
import FolderShow from './components/router_views/folders/Show.vue';
import PageShow from './components/router_views/pages/Show.vue';
import PageCreate from './components/router_views/pages/Create.vue';
import PageUpdate from './components/router_views/pages/Update.vue';
import Login from './components/router_views/Login.vue';

export default [
  {
    path: '/',
    component: FolderIndex,
    name: 'folderIndex'
  },
  {
    path: '/folders/:folder_id',
    component: FolderShow,
    name: 'folderShow',
    props: true
  },
  {
    path: '/folders/:folder_id/pages/create',
    component: PageCreate,
    name: 'pageCreate',
    props: true
  },
  {
    path: '/pages/:page_id',
    component: PageShow,
    name: 'pageShow',
    props: true
  },
  {
    path: '/pages/:page_id/update',
    component: PageUpdate,
    name: 'pageUpdate',
    props: true
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    props: true
  }
];
