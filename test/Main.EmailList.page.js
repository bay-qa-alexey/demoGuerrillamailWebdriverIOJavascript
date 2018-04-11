class EmailList {
	constructor(index, emailExpected) {
		this.resultElement = $$('//tbody[@id=\'email_list\']/tr[./td[contains(text(), \'' + emailExpected + '\')]]')[index];
	}

	select()	{return this.resultElement.$('td.td1').click();}
	getEmail()	{return this.resultElement.$('td.td2').getText();}
	getBody()	{return this.resultElement.$('td.td3').getText();}
}

module.exports = EmailList;