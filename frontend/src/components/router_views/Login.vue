<template>
  <div class="login">
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <p class="alert alert-danger mb-4" v-if="errors">ログインできません。</p>
        <div class="form-group">
          <label for="username">Username</label>
          <input id="username" class="form-control" v-model="username">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" class="form-control" v-model="password" type="password">
        </div>
        <p class="text-right">
          <button class="btn btn-dark" @click="login">
            <i class="fa fa-unlock-alt mr-2"></i>Login
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { loginAPI } from '../../api';
  import token from '../../token';

  export default {
    data() {
      return {
        username: '',
        password: '',
        errors: false
      }
    },
    methods: {
      login: async function() {
        try {
          const response = await loginAPI({
            username: this.username,
            password: this.password
          });
          const jwtToken = response.data.token;
          token.store(jwtToken);
          this.$router.push({name: 'folderIndex'});
        } catch (e) {
          console.error(e);
          this.errors = true;
        }
      }
    }
  }
</script>
