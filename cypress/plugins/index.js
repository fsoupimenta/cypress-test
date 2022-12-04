///<reference types="cypress" />
/**
 * 
 * @type {Cypress.PluginConfig}
 */
 module.exports = (on, config) => {
    // https://docs.cypress.io/api/plugins/after-run-api
    
    require('@cypress/code-coverage/task')(on, config);

    return config;
};