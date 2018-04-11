class EmailPage {

	get to()			{return $('input[name=\'to\']');}
	
	setTo(arg)			{this.to.setValue(arg);}
	setSubject(arg)		{$('input[name=\'subject\']').setValue(arg);}
	setBody(arg)		{$('textarea[name=\'body\']').setValue(arg);}
	send()				{$('input#send-button').click();}
	delete()			{$('input#del_button').click();}

	getEmailAddress()				{return $('span#email-widget').getText();}
	getEmailAddressExpected(arg)	{return arg.split('@')[0] + '@guerrillamail.com';}
	emailsTotal(arg)				{return $$('//tbody[@id=\'email_list\']/tr[./td[contains(text(), \'' + arg + '\')]]').length;}
	compose()						{$('a[title=\'Compose\']').click();}
	waitToLoadElements(arg)			{$('input[name=\'to\']').waitForVisible(arg);}

}

module.exports = EmailPage;