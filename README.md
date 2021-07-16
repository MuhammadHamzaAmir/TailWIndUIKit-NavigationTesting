# Navigation End-to-End Testing of https://tailwinduikit.com/
 ### Prerequisites
 - Node
 - Npm
 - JavaScript
 - Puppeteer https://pptr.dev/
 

------------



####  **There are three flows of the testing. WIth only minor changes.**

### Flow-1

------------

1.  Website https://tailwinduikit.com/ is reached.
2.  Then Login button is clicked on the main page.
3.  After reaching the Login page then Join TUK button is clicked.
4.  Join TUK button then takes us to SIGN UP page.
5.  Sign Up credentials are added which are (Name, Email, Password).
6. 	Then, after adding credentials, Sign Up button is clicked.
7.  After, Sign Up, we are reached  https://tailwinduikit.com/components 		page.
8. Then, we sign out from the TailWindUIKit.
9. After signing out, we reach the Login page.
10. At Login page, the credentials are added which are (Email, Password).
11.  Then, Login button is clicked.
12.  After, Login we reach https://app.tailwinduikit.com/ page.
13. Then, we click the components link in the header and reach 							https://tailwinduikit.com/components page.
14. After reaching components page then, boxed layout is clicked.
15. We reach the boxed layout page, then Get Access button is clicked.
16.  https://tailwinduikit.com/pricing is reached. On this page, Apply for student discount button is clicked. Which opens up a form.
17. Credentials are added in the form which are (Name, Email, Level of Study,  Institute,Country/Region).
18. Then Apply button is clicked on that same form.
19. The form closes itself automatically. Then, Login button on the pricing page is clicked. It takes us to https://app.tailwinduikit.com/ page.
20. Then, we click the components link in the header and reach 							https://tailwinduikit.com/components page.
21. Then, Signout happens.

### Flow-2

------------

1.  Steps mentioned in Flow-1 from 1-6 are same.
2. Then, if the account already exists. Then, Login link under the Sign Up 			button will be clicked. It will takes us to Login Page.
3. Steps mentioned in Flow-1 from 10-21 are same.

### Flow-3

------------

1.  Steps mentioned in Flow-1 from 1-6 are same.
2. Then, if there an issue exists such as weak internet connection. Then, the 		Sign Up process will happen again untill and unless sign up becomes 			succesful.
3. Steps mentioned in Flow-1 from 7-21 are same.



