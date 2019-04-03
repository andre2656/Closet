# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

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