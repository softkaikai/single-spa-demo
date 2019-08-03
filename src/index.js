import { registerApplication, start } from 'single-spa'


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
start();