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
let temp;

// Before(function () {
//     console.log('GET....BEFORE');
// });

Given('create a request', function (done) {
    temp = " ####"
    console.log('GET....GIVEN' + temp);
    setTimeout(() => {
        console.log('GET....GIVEN timeout' + temp);
        done();
    }, 5000);
});

When('I hit endpoint with request', function (done) {
    console.log('GET....WHEN' + temp);
    setTimeout(() => {
        console.log('GET....WHEN timeout' + temp);
        done();
    }, 4000);
});

Then('I should get 200 responseStatus', function (done) {
    console.log('GET....THEN' + temp);
    setTimeout(() => {
        console.log('GET....THEN timeout' + temp);
        done();
    }, 3000);
});

Then('I should get value/error in response', function (callback) {
    console.log('GET....AND THEN' + temp);
    setTimeout(() => {
        console.log('GET....AND THEN timeout' + temp);
        callback();
    }, 2000);
});

// After(function () {
//     console.log('GET....AFTER');
// })