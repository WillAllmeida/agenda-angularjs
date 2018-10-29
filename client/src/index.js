import * as angular from 'angular';

import './polyfills';
import './vendor';

import './index.scss';

import { appModule } from './app/app.module';

// Application bootstrap
angular.module('schedule', [
  appModule
]);
