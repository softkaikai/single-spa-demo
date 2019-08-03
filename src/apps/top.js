export function bootstrap(props) {
    return Promise.resolve().then(() => {
        const {customProps} = props;
        console.log(props);
        customProps.instance = Vue.extend({
            template: '<div>this is top</div>'
        })
    })
}

export function mount(props) {
    return Promise.resolve().then(() => {
        const {customProps} = props;
        customProps.instance = new customProps.instance().$mount('#top')
    })
}

export function unmount(props) {
    return Promise.resolve().then(() => {
        const {customProps} = props;
        customProps.instance.$destroy();
    })
}