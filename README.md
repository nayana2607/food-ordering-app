**React Basics**💻

# Starting with basics of React👩‍💻


....

# Parcel
- Dev Build
- Image Optimization
- Minification of files
- Bundling
- Compress
- Local Server
- Auto-reloading feature(HMR=Hot Module Replacement)
    -  Uses File Watching Algo for HMR
- Faster builds using **Caching**(stored in /.parcel-cache folder)
- Conent Hashing
- Code Spliting
- Differential Bundling -  is a technique used in web development to serve different versions of JavaScript code to users based on their browser's capabilities
- Diagnostics behind the scenes
- Better Error Handling
- Support to serve on HTTPs
- Tree Shaking- to eliminate dead or unused code from the final bundle
- diff build for dev and prod( run npx parcel build entrypoint)


## GoodFood
/**
 * Header
 *    -Logo
 *    - NAvItems
 * Body
 *    -Search
 *    -Container
 *       -Card
 *          -Img
 *          -Name of Res, Start Rating, Delivery, Cuisine
 * Footer
 *    -Copright
 *    -Links
 *    -Address
 */

# React Hooks
Utility functions
- useState() = 
- useEffect() = 

# Routing in web apps
- Type 1: Client Side Routing: Internal handling of a route inside of your JS
- Type 2: Server side Routing: Reuesting new page from server and poviding to user evry time a link is clicked

## Life Cycle method diagram 
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# Redux Toolkit
 - Install @redux/toolkit and react-redux
 - Build store
 - Connect store our app
 - Create Slice
 - Dispatch action
 - Selector


 # Testing

 - Install React testing Library
 - Installed Jest
 - Installed Babel depenedemncies
 - Configure Babel
 - configure parcel config file to disable default bable transpilation.
 - jest configuration using npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babelconfig
 - Install @testing-library/jest-dom