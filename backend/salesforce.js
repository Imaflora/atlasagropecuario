var jsforce = require('jsforce');
var conn = new jsforce.Connection();
var password = require('./password').password;

var objName = 'Contact';
var accountId = '001A000001PK9BnIAL';

function createUser(email, name, institution, dept, phone) {
    conn.login('caiohamamura@imaflora.org', password + 'RFdxQ7DwwDSgYZJowrg2t0Pp', function (err, res) {
        if (err) { return console.error(err); }
        var obj = conn.sobject(objName);
        var newObj = {
            AccountId: '001A000001PK9BnIAL',
            Email: email,
            FirstName: name.split(' ')[0],
            LastName: name.split(' ').slice(1).join(' '),
            AreaPertencente__c: institution,
            Department: dept,
            Phone: phone,
        };
        obj.create([newObj], function (err, res) {
            if (err) { return console.error(err); }
            console.log(res);
        });
    });
    conn.logout(function (err, res) {
        if (err) { return console.error(err); }
        console.log(res);
    })
}

module.exports = {createUser: createUser};