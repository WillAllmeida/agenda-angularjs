import * as angular from 'angular';

import { App } from './components/app/app.component';
import { Root } from './components/root/root.component';

import { configuration } from './not-found.configuration';
import { routing } from './not-found.routes';

export const moduleName =
  angular.module('not-found', [
      'ui.router'
  ])

  .component(App.selector, App)
  .component(Root.selector, Root)


  .config(configuration)
  .config(routing)
  .name;
