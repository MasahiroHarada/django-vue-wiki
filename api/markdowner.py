import markdown
import bleach


def to_html(md_text):
    extensions = ["fenced_code", "tables", "smarty", "toc", "nl2br"]
    html = markdown.markdown(md_text, extensions=extensions)
    allowed_tags = bleach.ALLOWED_TAGS + [
        'h1', 'h2', 'h3',
        'p',
        'table', 'thead', 'tbody', 'tr', 'th', 'td',
        'pre', 'code',
        'br'
    ]

    def deny_javascript(tag, name, value):
        return not value.lower().startswith('javascript')

    return bleach.clean(html, tags=allowed_tags, attributes=deny_javascript)
