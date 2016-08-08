import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import ngCsv from 'ng-csv';
import routing from './app.config';
import dashboard from './dashboard'
import product from './product';
import discounts from './discounts';
import pricing from './pricing';
import auth from './services/auth.service.js';

angular.module('app', [uirouter, dashboard, pricing, product, discounts, auth, ngSanitize, ngCsv])
  .config(routing)
  .run(['AuthService', runBlock]);

function runBlock(AuthService) {
  AuthService.initialize();
};
