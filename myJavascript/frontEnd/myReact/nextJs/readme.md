# Learning  Next.js essentials

Took below course and summarized essentials. 

- [NetNinja Next.js for beginners](https://youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw)

- [NetNinja Next.js and Netlify](https://youtube.com/playlist?list=PL4cUxeGkcC9ig-veuRaLI4QB0Ws8xMzjv)

## What is Next.js? 
Next.js is a React framework.

> Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

> Next.js has all the tools you need to make the Web. Faster.

It is developed to solve problems like, 

> Code has to be **bundled** using a bundler like webpack and transformed using a compiler like Babel.
> You need to do **production optimizations** such as code splitting.
> You might want to statically pre-render some pages for **performance and SEO**. You might also want to use server-side rendering or client-side rendering.
> You might have to write some server-side code to connect your React app to your data store.

Create Next.js app with below command

```shell
$npx create-next-app (app-name) 
```

## Project directories 
1. Next js automatically creates routes based on React components in pages directory.

- pages : React components
- public 
- styles

2. Next js automatically loads a corresponding js bundle for each page(React component), meaning faster performance.


## Reference
- [Next.js](https://nextjs.org/)