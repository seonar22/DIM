import { module } from 'angular';

import { Destiny2Component } from './destiny2.component';
import { D2InventoryComponent } from './d2-inventory.component';
import { destinyAccountResolver } from '../shell/destiny-account.route';

export default module('destiny2Module', [])
  .component('destiny2', Destiny2Component)
  .component('inventory2', D2InventoryComponent)
  .config(($stateProvider) => {
    'ngInject';

    // Root state for Destiny 2 views
    $stateProvider.state({
      name: 'destiny2',
      parent: 'destiny-account',
      redirectTo: 'destiny2.inventory',
      url: '/d2',
      component: 'destiny2',
      resolve: {
        account: destinyAccountResolver(2)
      }
    });

    $stateProvider.state({
      name: 'destiny2.inventory',
      url: '/inventory',
      component: 'inventory2'
    });
  })
  .name;
