<template>
  <div class="hello">
    <div class="row">
      <div class="col-8">
        <h1 class="page-title">テンプレート内のハードコードされたURLを削除</h1>
        <p class="text-right">
          <button class="btn btn-light">
            <i class="fa fa-pencil"></i>
          </button>
        </p>
        <hr>
        <article class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut delectus deserunt dolore ducimus eos exercitationem fuga impedit in itaque iure iusto modi molestiae, quae quia rem sed, sequi ut.</p>
          <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</blockquote>
          <pre>
            <code>$php = "qwertyu";</code>
          </pre>
          <table class="table">
            <thead>
            <tr>
              <th>Abc</th>
              <th>Def</th>
              <th>Dhi</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>qwert</td>
              <td>asdfg</td>
              <td>zxcvb</td>
            </tr>
            <tr>
              <td>qwert</td>
              <td>asdfg</td>
              <td>zxcvb</td>
            </tr>
            <tr>
              <td>qwert</td>
              <td>asdfg</td>
              <td>zxcvb</td>
            </tr>
            </tbody>
          </table>
        </article>
      </div>
      <div class="col-4">
        <aside class="list-group mb-2">
          <p class="list-group-item list-group-item-light text-dark">
            <i class="fa fa-folder-open-o"></i>
            <strong>{{ message }}</strong>
          </p>
          <a class="list-group-item list-group-item-action">テンプレート内のハードコードされたURLを削除</a>
          <a class="list-group-item list-group-item-action">テンプレートシステムを使う</a>
          <button class="list-group-item list-group-item-action list-group-item-light text-center">
            <span>+&nbsp;</span><i class="fa fa-file-text-o"></i>
          </button>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'フォルダの名前'
      }
    }
  }
</script>
