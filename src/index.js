import { registerApplication, start } from 'single-spa';
import eventConstructor from 'wolfy87-eventemitter';
import globalEventDispatch from './globalEventDispatch';


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
    {customProps: {eventConstructor, globalEventDispatch}}
)
registerApplication(
    'home',
    () => import('./apps/home.js'),
    () => location.hash === '#home',
    {customProps: {eventConstructor, globalEventDispatch}}
)
registerApplication(
    'content',
    () => import('./apps/content.js'),
    () => location.hash === '#content',
    {customProps: {eventConstructor, globalEventDispatch}}
)
registerApplication(
    'contact',
    () => import('./apps/contact.js'),
    () => location.hash === '#contact',
    {customProps: {eventConstructor, globalEventDispatch}}
)
registerApplication(
    'app1',
    () => importSource('./app1.js'),
    () => location.hash.includes('#/app1'),
    {customProps: {eventConstructor, globalEventDispatch}}
)
start();


