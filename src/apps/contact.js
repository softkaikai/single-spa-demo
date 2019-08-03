export function bootstrap(props) {
    return Promise.resolve().then(() => {
        const {customProps} = props;
        customProps.component = Vue.extend({
            template: '<div>this is contact</div>'
        })
    })
}

export function mount(props) {
    return Promise.resolve().then(() => {
        const {customProps} = props;
        customProps.instance = new customProps.component().$mount('');
        let dom = document.getElementById('app');
        dom.innerHTML = '';
        dom.appendChild(customProps.instance.$el)
    })
}

export function unmount(props) {
    return Promise.resolve().then(() => {
        const {customProps} = props;
        customProps.instance.$destroy();
    })
}