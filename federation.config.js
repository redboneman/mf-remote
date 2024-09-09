const {withNativeFederation, shareAll} = require('@angular-architects/native-federation/config');
// const deps = require('./package.json').dependencies;

module.exports = withNativeFederation({

  name: 'remote-second',

  exposes: {
    './Component': './src/app/app.component.ts',
  },

  shared: {
    ...shareAll(
      {singleton: true, strictVersion: true, requiredVersion: 'auto'}
    ),
  },

  skip: ['rxjs/ajax', 'rxjs/fetch', 'rxjs/testing', 'rxjs/webSocket', 'zone.js']

  // shared: {
  //   "@angular/core": {requiredVersion: deps["@angular/core"], singleton: true},
  //   "@angular/common": {requiredVersion: deps["@angular/common"], singleton: true},
  //   "@angular/common/http": {requiredVersion: deps["@angular/common/http"], singleton: true},
  //   "@angular/router": {requiredVersion: deps["@angular/router"], singleton: true},
  //   "rxjs": {requiredVersion: deps["rxjs"], singleton: true},
  // },

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});
