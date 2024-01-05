# Vite config for Vue3 package development
This project is a ready to use solution for developers who are going to develop a vue3 library and publish on npm

### Develop using Storybook
You can use Storybook to develop your components and functionalities in an organazed way. You just need to run `npm run storybook` to run the Storybook dev server.

### Example project 
Test on real project before publish using a ready Vue3 project inside the 'src/example' folder. 
Build your library using build command and then directly import the developed package from the `dist` folder into the example vue project and run `npm run run-example` to start the development project. You can now see your package serving in a real Vue app. 

### Vitest testing
Vitest and @vue/test-utils are configured by default. All of the test files with `.test.ts` extension are automatically detected by Vitest. There is a `./src/tests` folder that contains test files but you may write your tests right next to your stories or component definition. To run vitest simpley run `npm run test`.


### Build 
You can build your library using `npm run build` command. A `dist` folder will be created in the root directory containing the `ESM` and `CJS` files. All of the declration file will be automatically generated inside that folder.

 