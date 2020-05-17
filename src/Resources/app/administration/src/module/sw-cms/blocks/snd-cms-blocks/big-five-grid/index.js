import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'snd-big-five-grid',
    label: 'Big five grid',
    category: 'snd-cms-blocks',
    component: 'sw-cms-block-snd-big-five-grid',
    previewComponent: 'sw-cms-block-preview-big-five-grid',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        big: 'image',
        one: 'image',
        two: 'image',
        three: 'image',
        four: 'image'
    }
});
