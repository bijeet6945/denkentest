'use strict'

const DEV = 'DEV';
const TEST = 'TEST';
const ENV = TEST;

const dev = {
  clientId: 'maintenance',
  url: 'https://localhost:8080',
  adfsLogin: 'http://adfs.servicemaster.com/adfs/oauth2/authorize?response_type=code&client_id=maintenance&redirect_uri=http://localhost:8080&resource=http://localhost:8080',
  adfsToken: 'https://dev.servsmartapi.com/v3/Security/api/Token/GetToken',
  adfsLogout: 'https://adfs.servicemaster.com/adfs/ls/?wa=wsignout1.0&amp;wreply=https://localhost:8080',
  productUrl: 'https://dev.servsmartapi.com/v3/products',
  discountsUrl: 'https://dev.servsmartapi.com/V2/Discounts/',
  pricingUrl: 'https://dev.servsmartapi.com/V3/PricingMaintenance/',
  pricingTemplateUrl: 'https://dev.servsmartapi.com/V3/PricingMaintenance/Templates',
  ENV: ENV
}

const test = {
  clientId: 'maintenance1',
  url: 'https://10.250.192.186:60',
  adfsLogin: 'https://adfs.servicemaster.com/adfs/oauth2/authorize?response_type=code&client_id=maintenance1&redirect_uri=http://10.250.192.186:60&resource=http://10.250.192.186:60',
  adfsToken: 'https://dev.servsmartapi.com:9000/v3/Security/api/Token/GetToken',
  adfsLogout: 'https://adfs.servicemaster.com/adfs/ls/?wa=wsignout1.0&amp;wreply=https://10.250.192.186:60',
  productUrl: 'https://dev.servsmartapi.com/v3/products',
  discountsUrl: 'https://dev.servsmartapi.com/V2/Discounts/',
  pricingUrl: 'https://dev.servsmartapi.com/V3/PricingMaintenance/',
  pricingTemplateUrl: 'https://dev.servsmartapi.com/V3/PricingMaintenance/Templates',
  ENV: ENV
}

let config = '';

switch(ENV) {
  case DEV:
    config = dev;
    break;
  case TEST:
    config = test;
    break;
  default:
    console.log('invalid config');
}

export default config;
