# URL Shortner Application / Server-Side Rendered


### Key Features

<ul>
<li>JSON Web Token Based Authentication</li>
<li>Login/Sign up Pages</li>
<li>Maintains User & Link Record</li>
<li>Link Analytics i.e. Total Link Click Counts</li>
</ul>

<br>

## Innitial Setups
<ul>
<li>You'll need mongoDB cluster which you can get for free on <code>mongodb.com</code> and create a free cluster</li>
<li>You have to setup <code>.env file</code> in the root directotry of folder</li>
<li>Add values of env variables <code>PORT,DB_CON_STRING </code> and <code> JWT_SIGNKEY</code></li>
<li>You can put any value for the <code> JWT_SIGNKEY (string) </code> </li>
</ul>

> generate JWT_SIGNKEY using this 

```javascript
 require("crypto").randomBytes(64).toString("hex")
 //This will generate a RANDOM string, you can cut paste this string in the .env file
```
<br>

### How to Check/Run the Application on your own Machine
---


<ol>
<li>first git clone the repo : <code>git clone link</code></li> 
<li>Open the directory where you cloned the replo and run the following command <code>npm install</code></li>
<li>Then run : <code>npm start</code></li>
<li>You are good to go!!</li>
</ol>


> make sure you have `nodeJS` installed in your machine
