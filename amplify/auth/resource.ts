import { defineAuth, secret } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        scopes: ['email', 'profile', 'openid'],
      },
      callbackUrls: [
        'http://localhost:5173/',
        'https://88eeb65770286b34bb79.auth.ap-southeast-2.amazoncognito.com/oauth2/idpresponse',
        'https://main.d2u5i2xewpxqw0.amplifyapp.com/',
      ],
      logoutUrls: [
        'http://localhost:5173/',
        'https://88eeb65770286b34bb79.auth.ap-southeast-2.amazoncognito.com',
        'https://main.d2u5i2xewpxqw0.amplifyapp.com/',
      ],
      
    }
  }
});