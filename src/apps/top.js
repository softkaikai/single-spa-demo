export function bootstrap(props) {
    return Promise.resolve().then(() => {
        const {customProps} = props;
        customProps.instance = Vue.extend({
            template: '<div>this is top</div>'
        })
    })
}

export function mount(props) {
    return Promise.resolve().then(() => {
        const {customProps} = props;

        customProps.event = new customProps.eventConstructor();
        customProps.globalEventDispatch.add('top', customProps.event);
        customProps.event.on('mount', () => {
            console.log('this is top');
        });
        customProps.event.trigger('mount');
        customProps.globalEventDispatch.trigger('mount');

        customProps.instance = new customProps.instance().$mount('#top')
    })
}

export function unmount(props) {
    return Promise.resolve().then(() => {
        const {customProps} = props;
        customProps.globalEventDispatch.remove('top');
        customProps.instance.$destroy();
    })
}