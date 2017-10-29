<template>
  <div class="folders">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <p class="alert alert-danger mb-4" v-if="errors">エラーが発生しました。</p>
        <h1 class="page-title">フォルダ一覧</h1>
        <hr>
        <div class="list-group">
          <router-link v-for="folder in folders"
                       :key="folder.uuid"
                       class="list-group-item list-group-item-action"
                       :to="{name: 'folderIndex'}">{{ folder.name }}</router-link>
          <div class="list-group-item" v-if="createFolder">
            <div class="form-row">
              <div class="col-10">
                <input class="form-control mb-2" v-model="newFolder" title="フォルダ名">
              </div>
              <div class="col">
                <button class="btn btn-secondary btn-block" @click="onClose">
                  <i class="fa fa-close"></i>
                </button>
              </div>
              <div class="col">
                <button class="btn btn-dark btn-block" :disabled="newFolder === ''" @click="onCreate">
                  <i class="fa fa-check"></i>
                </button>
              </div>
            </div>
          </div>
          <button @click="onClickAddFolder"
                  class="list-group-item list-group-item-action list-group-item-light text-center">
            <span>+&nbsp;</span><i class="fa fa-folder-open-o"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { fetchAllFoldersAPI, createFolderAPI } from '../../../api';

  export default {
    data() {
      return {
        folders: [],
        newFolder: '',
        createFolder: false,
        errors: false
      }
    },
    methods: {
      fetchData: async function() {
        try {
          const response = await fetchAllFoldersAPI();
          this.folders = response.data;
        } catch (e) {
          this.errors = true;
          console.error(e);
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
          this.folders.push(response.data);
          this.clearNewFolder();
        } catch (e) {
          this.errors = true;
          console.error(e);
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
