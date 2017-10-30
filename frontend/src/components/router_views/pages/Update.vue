<template>
  <div class="page-update">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <p class="alert alert-danger mb-4" v-if="errors">エラーが発生しました。</p>
        <div v-if="preview">
          <h1 class="page-title">{{ title }}</h1>
          <hr>
          <p class="text-right">
            <button class="btn btn-secondary" @click="onClosePreview">
              <i class="fa fa-close"></i>
            </button>
            <button class="btn btn-dark" @click="onUpdate">
              <i class="fa fa-check mr-2"></i>OK
            </button>
          </p>
          <div class="card">
            <div class="card-body">
              <article class="content" v-html="previewHtml"></article>
            </div>
          </div>
        </div>
        <div v-else>
          <h1 class="page-title">ページの編集</h1>
          <hr>
          <p class="d-flex justify-content-between">
            <router-link :to="{name: 'pageShow', params: {page_id}}" class="btn btn-light text-dark">
              <i class="fa fa-angle-left mr-2"></i>Back
            </router-link>
            <a href="http://kojika17.com/2013/01/starting-markdown.html" target="_blank"
               class="btn btn-light text-dark">
              <i class="fa fa-question-circle-o mr-2"></i>Markdown
            </a>
          </p>
          <div class="form-group">
            <label for="title">Title</label>
            <input id="title" class="form-control" v-model="title">
          </div>
          <div class="form-group">
            <label for="content">Content</label>
            <textarea id="content" class="form-control" v-model="content"></textarea>
          </div>
          <p class="text-right">
            <button class="btn btn-dark" :disabled="cannotSend" @click="onPreview">Preview</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { fetchPageAPI, updatePageAPI } from '../../../api';
  import { toHtml } from '../../../markdown';

  export default {
    props: ['page_id'],
    data() {
      return {
        folder: {},
        title: '',
        content: '',
        preview: false,
        previewHtml: '',
        errors: false
      }
    },
    methods: {
      fetchData: async function() {
        try {
          const response = await fetchPageAPI(this.page_id);
          this.title = response.data.title;
          this.content = response.data.body;
        } catch (e) {
          this.errors = true;
          this.$emit('error', e);
        }
      },
      onPreview() {
        this.previewHtml = toHtml(this.content);
        this.preview = true;
      },
      onClosePreview() {
        this.preview = false;
      },
      onUpdate: async function() {
        try {
          const response = await updatePageAPI(this.page_id, {
            title: this.title,
            body: this.content
          });
          this.$router.push({name: 'pageShow', params: {page_id: response.data.uuid}})
        } catch (e) {
          this.errors = true;
          this.$emit('error', e);
        }
      }
    },
    computed: {
      cannotSend() {
        return this.title === '' || this.content === '';
      }
    },
    created() {
      this.fetchData();
    }
  }
</script>
