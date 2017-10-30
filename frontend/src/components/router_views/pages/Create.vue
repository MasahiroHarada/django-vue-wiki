<template>
  <div class="page-create">
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
            <button class="btn btn-dark" @click="onCreate">
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
          <h1 class="page-title">{{ folder.name }} にページを追加</h1>
          <hr>
          <p class="d-flex justify-content-between">
            <router-link :to="{name: 'folderShow', params: {folder_id}}" class="btn btn-light text-dark">
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
  import { fetchFolderAPI, createPageAPI } from '../../../api';
  import { toHtml } from '../../../markdown';

  export default {
    props: ['folder_id'],
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
          const response = await fetchFolderAPI(this.folder_id);
          this.folder = response.data;
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
      onCreate: async function() {
        try {
          const response = await createPageAPI({
            title: this.title,
            body: this.content,
            folder_field: this.folder_id
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
