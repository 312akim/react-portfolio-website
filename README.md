# Welcome to my Portfolio Website

The site is focused on providing a smooth user experience to visitors by utilizing functional ES6 arrow functions, React Hooks, and React Spring animations. Images are sourced from Unsplashed and icons are sourced from FontAwesome.

The entire project was also converted to TypeScript.

## Highlights

Reaches out to Github Octokit API to display latest commits from a repository branch.

EmailJS integration to take Form inputs and receive a direct email from form values.

# Section Breakdown

Section by section breakdown below.

## Nav Component

The Nav background is set to transparent once the viewports pageYOffset passes 0. Page logo and burger are fixed to always allow easy navigation. Each section navigation component is linked to an associated id through react-scroll which allows smooth scrolling navigation. Hover animations transition component underlines from width 'none' to '90px' and the same with container margins for a clear and intuitive experience. The actual Nav appears from the right with a react-spring animation.

## Home Component

The Hero animation utilizes react-intersection-observer and reveals the Hero Components after 75% of the wrapping component is within the visitors viewport. CSS Perspectives and animations were key to keeping a 3D, visually appealing entrance.

## Skill Ring Component

Maps icons and Titles from an array of objects into equally spaced angles. Utilizes CSS transform properties combined with an infinite animation loop.

## Project Component

The Project Component is split into 2 full sections that map and display project cards. A toggle swaps the displayed section. Each card opens an associated modal with more specific data mapped. Modal buttons toggle which object properties to display.

## About Component

About image cards are passed a function, onMouseEnter, that updates the mainContent and activeIndices state. The updated states change the content shown and adjust the navigation arrow to the last hovered card. Additional cards are dynamically mapped from images and data passed in the lower half of the section.

## Activity Component

A useEffect hook passes a user Git Token with project identifiers and asynchronously awaits a response from the Github Octokit API. The repo branch data received is saved and the 5 most recent commits with date, comment, and Github link to the hash are mapped.

I intend to add a pagination feature to the commits in the future to allow the loading/viewing of older commits.

## Contact Component

The form is built and validated by Formik. Once valid inputs are submitted, the values are POSTED to EmailJS with account identifiers. EmailJS then generates and sends an email based on account settings. The form values are cleared upon submission.

# Other Mentions

Theme colors are passed by Styled Components - Theme Provider to allow all child components access with destructuring.

StyledImageCropContainer was created to help size and position passed images for responsive design.

Random id's were generated using the uuid library specifically for mapped components id properties.

SASS/SCSS was utilized for styling Formik elements.

# Getting Started with Create React App

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

### Break Points

Screen breakpoints are at 480px, 768px, 1025px & 1200px