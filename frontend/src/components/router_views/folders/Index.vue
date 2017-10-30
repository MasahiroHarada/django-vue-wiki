<template>
  <div class="folders">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h1 class="page-title">Folders</h1>
        <hr>
        <p class="alert alert-danger mb-4" v-if="errors">エラーが発生しました。</p>
        <p class="text-right">
          <button @click="onClickAddFolder"
                  class="btn btn-light text-dark">
            <span>+&nbsp;</span><i class="fa fa-folder-open-o"></i>
          </button>
        </p>
        <div v-if="createFolder">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" class="form-control mb-2" v-model="newFolder" title="フォルダ名">
          </div>
          <div class="form-group text-right">
            <button class="btn btn-light" @click="onClose">
              <i class="fa fa-close"></i>
            </button>
            <button class="btn btn-dark" :disabled="newFolder === ''" @click="onCreate">
              <i class="fa fa-check mr-2"></i>OK
            </button>
          </div>
        </div>
        <div class="list-group">
          <router-link v-for="folder in folders"
                       :key="folder.uuid"
                       class="list-group-item list-group-item-action"
                       :to="{name: 'folderShow', params: {folder_id: folder.uuid}}">
            {{ folder.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { fetchAllFoldersAPI, createFolderAPI } from '../../../api';
  import PageList from '../../elements/PageList.vue';

  export default {
    data() {
      return {
        folders: [],
        newFolder: '',
        createFolder: false,
        errors: false
      }
    },
    components: {
      'page-list': PageList
    },
    methods: {
      fetchData: async function() {
        try {
          const response = await fetchAllFoldersAPI();
          this.folders = response.data;
        } catch (e) {
          this.errors = true;
          this.$emit('error', e);
        }
      },
      onClickAddFolder() {
        this.createFolder = true;
      },
      onClose() {
        this.clearNewFolder();
      },
      onCreate: async function() {
        try {
          const response = await createFolderAPI(this.newFolder);
          this.folders.unshift(response.data);
          this.clearNewFolder();
        } catch (e) {
          this.errors = true;
          this.$emit('error', e);
        }
      },
      clearNewFolder() {
        this.newFolder = '';
        this.createFolder = false;
      }
    },
    created() {
      this.fetchData();
    }
  }
</script>
