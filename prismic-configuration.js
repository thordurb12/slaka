
hrefResolver: function(doc) {
    if (doc.type === 'post') {
        return '/post/[uid]'
    }
    return '/'
}
