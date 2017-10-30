<template>
  <div class="folder-show">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h1 class="page-title">{{ folder.name }}</h1>
        <hr>
        <p class="alert alert-danger mb-4" v-if="errors">エラーが発生しました。</p>
        <div class="d-flex justify-content-between mb-3">
          <router-link :to="{name: 'folderIndex'}" class="btn btn-light text-dark">
            <i class="fa fa-angle-left mr-2"></i>Back
          </router-link>
          <div>
            <router-link :to="{name: 'pageCreate', params: {folder_id}}"
                         class="btn btn-light text-dark mr-2">
              <span>+&nbsp;</span><i class="fa fa-file-text-o"></i>
            </router-link>
            <button class="btn btn-light text-dark" @click="onClickUpdate">
              <i class="fa fa-pencil"></i>
            </button>
          </div>
        </div>
        <div v-if="updateFolder">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" class="form-control mb-2" v-model="name" title="フォルダ名">
          </div>
          <div class="form-group text-right">
            <button class="btn btn-light" @click="onClose">
              <i class="fa fa-close"></i>
            </button>
            <button class="btn btn-dark" :disabled="name === ''" @click="onUpdate">
              <i class="fa fa-check mr-2"></i>OK
            </button>
          </div>
        </div>
        <div class="list-group">
          <p class="list-group-item list-group-item-light text-dark">
            <i class="fa fa-file-text-o mr-1"></i>
            <strong>Pages</strong>
          </p>
          <router-link v-for="page in folder.pages"
                       :key="page.uuid"
                       class="list-group-item list-group-item-action"
                       :to="{name: 'pageShow', params: {page_id: page.uuid}}">
            {{ page.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { fetchFolderAPI, updateFolderAPI } from '../../../api';

  export default {
    props: ['folder_id'],
    data() {
      return {
        folder: {},
        name: '',
        updateFolder: false,
        errors: false
      }
    },
    methods: {
      fetchData: async function() {
        try {
          const response = await fetchFolderAPI(this.folder_id);
          this.folder = response.data;
          this.name = this.folder.name;
        } catch (e) {
          this.errors = true;
          this.$emit('error', e);
        }
      },
      onClickUpdate() {
        this.updateFolder = true;
      },
      onClose() {
        this.updateFolder = false;
        this.name = this.folder.name;
      },
      onUpdate: async function() {
        try {
          const response = await updateFolderAPI(this.folder.uuid, this.name);
          this.folder = response.data;
          this.onClose();
        } catch (e) {
          this.errors = true;
          this.$emit('error', e);
        }
      }
    },
    created() {
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData'
    }
  }
</script>
