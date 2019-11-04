// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  navBarBackgroundColor: 'green',
  firebase: {
    apiKey: 'AIzaSyCf42kVTdFUrL-mMohTtIie1RbOQbfcG74',
    authDomain: 'mtdonline-cae72.firebaseapp.com',
    databaseURL: 'https://mtdonline-cae72.firebaseio.com',
    projectId: 'mtdonline-cae72',
    storageBucket: 'mtdonline-cae72.appspot.com',
    messagingSenderId: '1056957070906'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
