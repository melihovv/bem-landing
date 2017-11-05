block('nav-links')(
    tag()('ul'),

    block('link').match(function () {
        return this.ctx.mix.block === 'nav-links' && this.ctx.mix.elem === 'link';
    }).wrap()(function () {
        return {
            tag: 'li',
            block: 'nav-links',
            elem: 'link-wrapper',
            content: applyNext(),
        };
    })
);
