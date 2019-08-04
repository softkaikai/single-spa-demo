import { registerApplication, start } from 'single-spa';


function addScript(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
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
    () => {
        return new Promise((resolve) => {
            addScript('./app1.js');

            setTimeout(() => {
                console.log(window.app1Module);
                resolve(window.app1Module)
            }, 100);
        })
    },
    () => location.hash.includes('#/app1'),
    {customProps: {}}
)
start();

