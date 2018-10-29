import * as angular from 'angular';

import { moduleName as coreModule } from './core/core.module';
import { moduleName as contactsModule } from './contacts/contacts.module';

export const appModule =
  angular.module('application', [
    coreModule,
    contactsModule
  ]).name;
