# Getting Started with Create React App
# ToDo TDD (React)
git clone https://github.com/Vandana444/TDD-TODO.git
1. Clone the repo
```bash
git clone <repo-url>
cd todo-tdd
```
2. Install
```bash
npm install
```
3. Run the dev server
```bash
npm start
```
4. Run tests (watch mode)
```bash
npm test
```


5. Run tests once (CI mode)
```bash
npm run test:ci
```


## TDD approach used here


1. Start by writing tests for the smallest component (e.g. `TaskInput`): verify input updates and submit behaviour (red).
2. Implement the component until tests pass (green).
3. Repeat for `TaskItem`, `TaskList` and the integration behaviour in `App`.
4. Refactor while keeping tests green.


## Deployment (Netlify / Vercel)


### Netlify


1. Push repo to GitHub.
2. Login to Netlify -> "New site from Git" -> connect GitHub -> select repo.
3. Build command: `npm run build`
4. Publish directory: `build`
5. Deploy.


### Vercel


1. Login to Vercel and import project from GitHub.
2. Vercel auto-detects Create React App; build command `npm run build` and output directory `build`.
3. Deploy.


## Submission checklist


- Git repo with the code
- README (this file)
- Screenshots (take screenshots of the running app and include them in the repo)
- All tests should pass


```


---


End of canvas document.

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
