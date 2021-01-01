# Code for Chico

This is Code for Chico - we are a brand new not for profit organization in Chico, CA.
Our goal is to help make the comunity we live in a better place for all who live here.

If you would like to contact us reach out to paul.davis@codeforchico.org

**_yeet_**

## Notes Hey its New Years Day 2021
So because I kind of got this working a little bit, I think I should take some notes about how its working.
Take this with a grain of salt because I don't really know what I am doing.

I build this with npx crete-react-app. Then I installed npm gh-pages and set up the package.json file per the instructions to add a predeploy and deploy scripts.

There is a wierd and confising thing going on in the branch structure of the repo so LOOKOUT!
    Basically, Im developing on MAIN branch, but when I run npm run deploy from cmd console of /Website1.0 on MAIM branch it published a producution copy of the app to the MASTER branch of the repo on git. This MASTER brach is the source for the gh-pages Code For America website at codeforamerica.org

    **BOOM**

    The thing thats most confusing is the instruction had me init a repo at Website1.0/codeforchico which is inside of my CodeForChico/Website1.0 repo. I think it just needs to be git init + the remote is set on this sub repo, i think it allows the deploy to the build dir to MASTER branch? yeesh
    ex:
    [git]  /CodeForChico/Website1.0/codeforchico$ git remote -v
    origin  https://github.com/CodeForChico/Website1.0 (fetch)
    origin  https://github.com/CodeForChico/Website1.0 (push) 

## Spin up a new Dev Sesh from Scratch
*Again this won't be perfect:*
    1. clone the CodeForChico/Website1.0 repo - you will need MAIN and MASTER branches
    2. you need like node.js and stuff. I think you run npm install on your locol repo? to make sure you have all the pakage dependencies you need locally? I am new at this. You also need to have git installed. I use WSL for my git on windows, but i had to install git for windows, and set my globals in order for npm run deploy in step 5 to work right.
    3. if you get it right, you should be able to then run npm start and you'll have a dev session running with a local server and a browser session with the app at local host. 
    4. dev should only be done in the src directory. Once you have your stuff working locally, commit the changes to MAIN repo remote (github)
    5. stop your dev session and run npm run deploy, this will publish the production copy to CodeForChico. If you get errors here, which I did, a lot, i needed to install git. reach out to paul.davis@codeforchico.org if you get stuck.


## Getting Started with Create React App
*From here down is the create-react-app boilerplade README - im not ready to part with it yet*
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
