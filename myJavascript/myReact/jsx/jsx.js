// JSX : JS syntax extension. An object(react element)
// JSX == JS + XML/HTML. Format is : (html or xml) (JS codes) (html or xml)
// for example : const element = <h1>Hello, World!</h1>
// JSX is not a must in React but has its own merits : 1) simper, 2) readability 3) finding bugs
// for example 
// JSX used : <div> Hello, {name} </div> 
// JSX not used : React.createElement('div', null, 'Hello, {name}');
// To use JSX, install Node JS first to set development environment.
// - environment setting : 1) install Node JS 2) install serve
// app creation : npx create-react-app (app name)
// see it in localhost : npm start (dev build) or npm run build (production build)

// production build - with minified JS codes, which makes rendering fast
// NOTE: Remember that only React files ending with .production.min.js are suitable for production.
// The production and development build come into the picture just because of performance impact in real life deployed the application. 

// References
// see here for more details of what is serve : https://www.npmjs.com/package/serve
// see here for more details of difference between npm(install manager) and npx(execute manager) : https://www.geeksforgeeks.org/what-are-the-differences-between-npm-and-npx/#:~:text=Npm%20is%20a%20tool%20that,pollution%20for%20the%20long%20term.
// see here for more details of difference between dev-build and production-build : https://stackoverflow.com/questions/48151128/difference-between-production-and-development-build-in-reactjs
