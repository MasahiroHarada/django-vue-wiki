<template>
  <div class="page-show">
    <div class="row">
      <div class="col-lg-9">
        <h1 class="page-title">{{ page.title }}</h1>
        <hr>
        <p class="d-flex justify-content-between">
          <router-link :to="{name: 'folderShow', params: {folder_id: page.folder_field}}"
                       class="btn btn-light text-dark">
            <i class="fa fa-angle-left mr-2"></i>Back
          </router-link>
          <router-link :to="{name: 'pageUpdate', params: {page_id: page.uuid}}"
                       class="btn btn-light">
            <i class="fa fa-pencil"></i>
          </router-link>
        </p>
        <div class="card mb-5">
          <div class="card-body">
            <article class="content" v-html="page.html"></article>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <page-list :folder_name="page.folder_name"
                   :folder_id="page.folder_field"
                   :pages="page.folder_pages"></page-list>
      </div>
    </div>
  </div>
</template>

<script>
  import hljs from 'highlight.js';
  import PageList from '../../elements/PageList.vue';
  import { fetchPageAPI } from '../../../api';

  export default {
    props: ['page_id'],
    data() {
      return {
        page: {}
      }
    },
    components: {
      'page-list': PageList
    },
    methods: {
      fetchData: async function() {
        try {
          const response = await fetchPageAPI(this.page_id);
          this.page = response.data;
        } catch (e) {
          this.$emit('error', e);
        }
      }
    },
    created() {
      this.fetchData();
    },
    updated() {
      hljs.initHighlighting();
    },
    watch: {
      '$route': 'fetchData'
    }
  }
</script>
