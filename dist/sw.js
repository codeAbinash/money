const cacheData = {
    static: {
        name: 'static-image-money',
        urls: ['fonts/Rubik-VariableFont_wght.ttf']
    }
}


self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheData.static.name).then(cache => {
            cache.addAll(cacheData.static.urls)
        })
    )
})