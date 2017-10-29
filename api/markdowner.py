import markdown
from django.utils.html import escape


def to_html(md_text):
    extensions = ["fenced_code", "tables"]
    return markdown.markdown(escape(md_text), extensions)
