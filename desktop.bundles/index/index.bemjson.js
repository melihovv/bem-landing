module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta',
            attrs: {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        },
        {elem: 'css', url: 'index.min.css'}
    ],
    scripts: [{elem: 'js', url: 'index.min.js'}],
    content: [
        {
            block: 'start-screen',
            content: [
                {
                    block: 'logo',
                    mix: {block: 'start-screen', elem: 'logo'}
                },
                {
                    elem: 'text',
                    content: 'Welcome to the yellow side of moon'
                },
                {
                    elem: 'header',
                    content: 'We do some creative stuff'
                },
                {
                    block: 'button',
                    text: 'Explore',
                    mods: {type: 'link'},
                    url: '#',
                    mix: {block: 'start-screen', elem: 'button'}
                },
                {
                    block: 'link',
                    url: '#',
                    mix: {block: 'start-screen', elem: 'link'}
                }
            ]
        }
    ]
};
