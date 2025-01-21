const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let page;

// Before hook: Se ejecuta antes de cada escenario
Before(async function () {
  browser = await chromium.launch({ headless: false }); // Abre un navegador Chromium
  page = await browser.newPage(); // Abre una nueva página en el navegador
});

// After hook: Se ejecuta después de cada escenario
After(async function () {
  await browser.close(); // Cierra el navegador después de que la prueba termine
});
