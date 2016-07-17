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

block('button').match(function () {
    return [].concat(this.ctx.mix)
        .some(function (item) {
            return item.block === 'start-screen' && item.elem === 'button';
        });
}).wrap()(function () {
    return {
        block: 'start-screen',
        elem: 'button-wrapper',
        content: applyNext()
    };
});
