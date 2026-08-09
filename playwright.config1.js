// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';


const config = ({
  testDir: './tests',
  retries : 1,
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  },
  reporter: 'html',
  projects:
    [
      {
        name: 'Safari',

        use: {
          browserName: 'webkit',
          headless: false,
          screenshot : 'off',
          trace: 'on',
          ...devices['iPhone 11']
          

        }
      },
    {
        name: 'Chrome',

        use: {
          browserName: 'chromium',
          headless: false,
          screenshot : 'on',
          trace: 'retain-on-failure',
          video : 'retain-on-failure',
          //viewport : {width: 720,height: 1080},

        }

      }
    ]
});

module.exports = config