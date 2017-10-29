import marked from 'marked';
import hljs from 'highlight.js';

export function toHtml(mdText) {
  const renderer = new marked.Renderer();
  renderer.code = (code, language) => {
    return '<pre><code class="hljs">' + hljs.highlightAuto(code).value + '</code></pre>';
  };
  marked.setOptions({renderer});
  return marked(mdText);
}
