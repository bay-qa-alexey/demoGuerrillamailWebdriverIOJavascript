// Create a fully running automated test to test the following website: https://www.guerrillamail.com/
// 1) Copy your temporary e-mail
// 2) Compose a new e-mail
// 3) Send an e-mail to yourself with a title and body
// 4) Wait for your self sent e-mail to appear
// 5) Verify the e-mail was sent from yourself with the same title and body
// 6) Delete the e-mail


var EmailList = require('./Main.EmailList.page.js');
var Main = require('./Main.page.js');
var page = new Main();

var title = "yourTitle";
var body = "yourBody";

describe('Mail Service GUERRILLAMAIL', function(){

	it('should work correctly', function(){

		browser.url('./');

		// 1) Copy your temporary e-mail; @sharklasers.com -> @guerrillamail.com
		var email = page.getEmailAddress(); 							// String name@sharklasers.com
		var emailExpected = page.getEmailAddressExpected(email);		// String name@guerrillamail.com
		var emailsTotal = page.emailsTotal(emailExpected);				// Integer

		// 2) Compose a new e-mail
		page.compose();

		// waiting for input element to be visible <=10 seconds
		page.waitToLoadElements(10000);

		// 3) Send an e-mail to yourself with a title and body
		page.setTo(email);
		page.setSubject(title);
		page.setBody(body);
    	page.send();

    	// 4) Wait for new self sent e-mail to appear <= 60 seconds
		browser.waitUntil(function () {
    	  return page.emailsTotal(emailExpected) > emailsTotal;
    	}, 60000, 'Error: We have been waiting too long ...');

    	// 5) Verify the e-mail was sent from yourself with the same title and body
    	var newmailElement = new EmailList(0, emailExpected);

    	expect(newmailElement.getEmail()).to.equal(emailExpected);
    	expect(newmailElement.getBody()).to.contains(title);
    	expect(newmailElement.getBody()).to.contains(body);

    	// 6) Delete the e-mail
    	newmailElement.select();
    	page.delete();
	})


})