import { registerApplication, start } from 'single-spa';

function importSource(url) {
    return new Promise((resolve) => {
        System.import(url).then(m => {
            resolve(m.default)
        }).catch(err => {
            console.log('system err:' + err);
        })
    })
}

registerApplication(
    'top',
    () => import('./apps/top.js'),
    () => true,
    {customProps: {}}
)
registerApplication(
    'home',
    () => import('./apps/home.js'),
    () => location.hash === '#home',
    {customProps: {}}
)
registerApplication(
    'content',
    () => import('./apps/content.js'),
    () => location.hash === '#content',
    {customProps: {}}
)
registerApplication(
    'contact',
    () => import('./apps/contact.js'),
    () => location.hash === '#contact',
    {customProps: {}}
)
registerApplication(
    'app1',
    () => importSource('./app1.js'),
    () => location.hash.includes('#/app1'),
    {customProps: {}}
)
start();


