import * as components from './barrel';

const install = function install(app) {
    Object.entries(components).forEach(([componentName, component]) => {
        app.component(componentName, component);
    });
};

export default install;

export * from './barrel';
