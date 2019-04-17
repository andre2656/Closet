# The Closet

Ever feel like you're keeping up with the Joneses? The Closet makes it easy to curate a style that's 100% you — effortlessly! Use our fun quizzes to discover your true style, get inspired by new trends, make easy in-app purchases on items you like, and get closer to owning your dream closet.

## About This App

This Node/Express/React app is deployed to Heroku here: https://the-closet.herokuapp.com/

The front-end React app auto-reloads as it's updated via webpack dev server, and the backend Express app auto-reloads independently with nodemon.

This app is comprised of 5 pages. Each is gated with user input validation for secure user access.

**Marketing Site**

URL: https://the-closet.herokuapp.com/

This page is our home page. It's where users would land when searching for our services. It explains them in detail and provides two buttons (one at the top and one at the bottom) to sign up. Additionally, it features a log in navigation bar for repeat users.

The ordering of elements was adjusted for mobile responsiveness with the use of flexbox.

**Sign Up**

URL: https://the-closet.herokuapp.com/sign-up

Upon clicking one of the two sign up buttons on the Marketing Site, the new user is sent to a Sign Up page. The page consists of one form that requests a first name, last name, email and password.

The user then has a choice: Start with a free account or upgrade to a premium account. A premium account offers all the same features as the free account (curated Pinterest pins, quizzes and shop from an uploaded image) with the addition of live chat support with a stylist to assist with in-app purchases and fashion advice.

Those who choose the free account are next sent to the Settings page. Those who sign up for Premium are then sent to a Payment page.

**Payment**

URL: https://the-closet.herokuapp.com/payment

The Payment page features a straightforward credit card submission form that's mobile responsive. 

Upon clicking Submit with all input fields filled out, the user is directed to the Settings page just as users who opted for a free account were on the last page.

**Settings**

URL: https://the-closet.herokuapp.com/settings

The Settings page asks the user 5 quick questions to help determine their curated Pinterest looks and think about their fashion tastes.

Once all 5 questions are answered via the dropdowns, the user is directed to the main app.

**App**

URL: https://the-closet.herokuapp.com/app

The main app features quizzes to help users identify their fashion style and icon they're most similar to. Their selected settings dictate their curated looks, which feature people who look like them modeling the style they said they admire in others. To the right, there is an upload field to input an image URL and see where to buy items from a picture. They can click on both the Pinterest pictures and the links in the Outfit Details sections to see the pin and buy the item, respectively. 

At the bottom right of the page, users can request Live Chat support from a stylist. Freemium users receive a modal letting them know this feature is a premium feature, with a button to return Sign Up form to upgrade to premium. Premium users can access this feature.

All pages are responsive and all data is stored in MySQL via Sequelize.
