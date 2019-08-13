const {
    Before,
    Given,
    When,
    Then,
    After,
    Status,
    setDefaultTimeout
} = require('cucumber');

var should = require('chai').should(),
    expect = require('chai').expect;

setDefaultTimeout(120000);

var temp;

// Before(function () {
//     console.log('Create....BEFORE');
// });

Given('create a request {string} {string}', function (username, password, done) {
    temp = username;
    console.log('Create....GIVEN ' + username);
    setTimeout(() => {
        console.log('Create....GIVEN timeout' + temp);
        done();
    }, 2000);
});

When('I hit endpoint with request2', function (done) {
    console.log('Create....WHEN ' + temp);
    setTimeout(() => {
        console.log('Create....WHEN timeout' + temp);
        done();
    }, 4000);
});

Then('I should get 200 responseStatus2', function (done) {
    console.log('Create....THEN' + temp);
    setTimeout(() => {
        console.log('Create....THEN timeout' + temp);
        done();
    }, 5000);
});

Then('I should get value in response2', function (callback) {
    console.log('Create....AND THEN' + temp);
    setTimeout(() => {
        console.log('Create....AND THEN timeout' + temp);
        callback();
    }, 6000);
});

// After(function () {
//     console.log('Create....AFTER');
// })