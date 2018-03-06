describe('iVvy Api Client', () => {

    test('request has correct headers and params', () => {
        const iVvyApi = require('./../src/iVvyApi.js')({
            key: 'somedummykey',
            secret: 'somedummysecret',
            url: 'https://www.test.com'
        });
        const moment = require('moment');

        let req = iVvyApi.request('test-namespace', 'test-action', {param1: 1, param2: 2});
        expect(req._data).toEqual(JSON.stringify({param1: 1, param2: 2}));
        expect(req.header['Content-Type']).toEqual('application/json');
        expect(req.header['IVVY-Date']).toContain(moment.utc().format('YYYY-MM-DD'));
        expect(req.header['X-Api-Version']).toEqual('1.0');
        expect(req.header['X-Api-Authorization']).toContain('IWS somedummykey:');
    });

    test('Url is being set correct for regions', () => {
        let keySecret = {
            key: 'somedummykey',
            secret: 'somedummysecret'
        };
        // AU
        const iVvyApiAU = require('./../src/iVvyApi.js')(Object.assign(keySecret, {region: 'AU'}));
        const reqAU =iVvyApiAU.request('namespace', 'action', {});

        // UK
        const iVvyApiUK = require('./../src/iVvyApi.js')(Object.assign(keySecret, {region: 'UK'}));
        const reqUK =iVvyApiUK.request('namespace', 'action', {});

        // US
        const iVvyApiUS = require('./../src/iVvyApi.js')(Object.assign(keySecret, {region: 'US'}));
        const reqUS =iVvyApiUS.request('namespace', 'action', {});

        expect(reqAU.url).toContain('api.ap-southeast-2.ivvy.com');
        expect(reqUK.url).toContain('api.eu-west-2.ivvy.com');
        expect(reqUS.url).toContain('api.us-west-2.ivvy.com');
    });
});