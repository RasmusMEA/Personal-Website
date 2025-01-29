## Setup Steps
Follow the tutorial https://github.com/gitname/react-gh-pages, with the steps below for fixing problems.

### Prerequisites

1. Download Node.js: https://nodejs.org/en/download/ 

2. Download Git: `winget install --id Git.Git -e --source winget`.

### Fixes

1. Set dependency flag: `npm config set legacy-peer-deps true`.

2. Create React app through: `npm create-react-app <my-app>`.

3. Fix dependency vulnerabilities by adding the following to `package.json` and running `npm install`:
```
"overrides": {
    "react-scripts": {
    "@svgr/webpack": "8.1.0",
    "typescript": "4.9.5",
    "postcss": "8.4.38"
    }
}
```
Source: https://github.com/facebook/create-react-app/issues/13607.

4. Fix build missing module with: `npm install --save-dev ajv@^7` (Source: https://www.youtube.com/watch?v=5IVXSP3rNpQ).

5. (Optional) Remove deprecated dependency warning by doing `npm install --save-dev @babel/plugin-proposal-private-property-in-object`