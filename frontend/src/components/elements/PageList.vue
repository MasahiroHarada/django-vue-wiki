<template>
  <aside class="list-group">
    <p class="list-group-item list-group-item-light text-dark">
      <i class="fa fa-folder-open-o"></i>
      <strong>{{ folder_name }}</strong>
    </p>
    <router-link v-for="page in pages"
                 :key="page.uuid"
                 :to="{name: 'pageShow', params: {page_id: page.uuid}}"
                 class="list-group-item list-group-item-action">{{ page.title }}</router-link>
    <router-link :to="{name: 'pageCreate', params: {folder_id}}"
                 class="list-group-item list-group-item-action list-group-item-light text-center">
      <span>+&nbsp;</span><i class="fa fa-file-text-o"></i>
    </router-link>
  </aside>
</template>

<script>
  export default {
    props: ['folder_id', 'folder_name', 'pages']
  }
</script>
