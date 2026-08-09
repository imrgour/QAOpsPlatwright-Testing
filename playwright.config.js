// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';


const config =({
  testDir: './tests',
  timeout: 40 *1000,
  expect: {
    timeout: 40 *1000,
  },
  reporter : 'html',
  
  use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace: 'retain-on-failure',
    video : 'retain-on-failure',
    //trace: 'on',

  }

  


});

module.exports = config