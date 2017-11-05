block('start-screen')(
    content()(function () {
        return {
            elem: 'inner',
            content: applyNext()
        };
    }),
    elem('text').tag()('p'),
    elem('header').tag()('h1')
);
