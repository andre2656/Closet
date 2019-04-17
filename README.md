# The Closet

Ever feel like you're keeping up with the Joneses? The Closet makes it easy to curate a style that's 100% you — effortlessly! Use our fun quizzes to discover your true style, get inspired by new trends, make easy in-app purchases on items you like, and get closer to owning your dream closet.

## About This App

This Node/Express/React app is deployed to Heroku here: https://the-closet.herokuapp.com/

The front-end React app auto-reloads as it's updated via webpack dev server, and the backend Express app auto-reloads independently with nodemon.

This app is comprised of X pages. Each is gated with user input validation for secure user access.

**Marketing Site**

URL: https://the-closet.herokuapp.com/

![Marketing Site](/images/marketing-site.png?raw=true)

This page is our home page. It's where users would land when searching for our services. It explains them in detail and provides two buttons (one at the top and one at the bottom) to sign up. Additionally, it features a log in navigation bar for repeat users.

The ordering of elements was adjusted for mobile responsiveness with the use of flexbox.

**Sign Up**

URL: https://the-closet.herokuapp.com/sign-up

Upon clicking one of the two sign up buttons on the Marketing Site, the new user is sent to a Sign Up page. The page consists of one form that requests a first name, last name, email and password.

The user then has a choice: Start with a free account or upgrade to a premium account. A premium account offers all the same features as the free account (curated Pinterest pins, quizzes and shop from an uploaded image) with the addition of live chat support with a stylist to assist with in-app purchases and fashion advice.

Those who choose the free account are next sent to the Settings page. Those who sign up for Premium are then sent to a Payment page.

**Payment**



## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

While waiting for the dependencies to install, create the MySQL database by running the `motivational_quotes_schema.sql` file inside the `seeds` folder.

To see this example boilerplate in action, create a `.env` file in the root of this project with the following inside:
DB_USERNAME=root
DB_PASSWORD=whateveryourpasswordis
DB_NAME=motivation_development
DB_HOST=127.0.0.1

After both installations complete, run the following command in your terminal:

```
npm run seed
```

Then:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Your assignment

1. One team memeber should create a new Github repo (or use a blank existing one if you have issues already) and push this app into it.
Copy this folder to somewhere outside of the GitLab repo
Rename the new folder to your project name. Then initialize it as your repo.
Then inside that new folder:

git init
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/YOUR_REPO.git
git push -u origin master

Make sure you are doing your git commands in the root of this app. You don't want this app to be a sub-folder in your repo.
(When you go to your repo page on github.com, you should see this readme and the list of files, not a single sub-folder.)

2. Each team member should verify that they can clone and edit the repo
Make sure every member is added as a contributor in Github and has accepted the invite.
Clone the repo.
Then make a small change to some file, and push your changes to verify that you have access.

3. Each team member needs to make their own `.env` file in the root of this project with the following inside:
DB_USERNAME=root
DB_PASSWORD=whateveryourpasswordis
DB_NAME=our_group_project_database_name
DB_HOST=127.0.0.1

Note that the database name is different than the name used by the example boilerplate, as it is whatever you chose to name your group project's database.  Also be sure to supply your own password!

4. Verify that every team member can run the app and see the quotes displayed.
`npm start`

5. As a group, add React Router to App.js.  Be sure to cd into the `client` folder before installing React router (remember, we use `npm` to install libraries).
Then create a `pages` folder in your `client/src` folder.
Then create a couple stubs of your primary pages. Add routes to these in your App.js
Then add navigation Links to these pages.

6. Go HAM and create your app.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
