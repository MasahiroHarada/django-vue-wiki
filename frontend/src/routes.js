import FolderIndex from './components/router_views/folders/Index.vue';
import PageShow from './components/router_views/pages/Show.vue';
import PageCreate from './components/router_views/pages/Create.vue';
import PageUpdate from './components/router_views/pages/Update.vue';

export default [
  {
    path: '/',
    component: FolderIndex,
    name: 'folderIndex'
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
  }
];
