# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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


# Git Commands 
 git init : create a new git repo 
 git status : view changes to your project code 
 git add : add files to staging area 
 git commit : create new commit from the files in a staging area 
 git log : view recent commits 
 -a  : flag to show files that are also hidden 
 -t  : flag to tell what type of key want to create 
 -b  : (bits)flag to tell the size of the key we want to create . in below key generate example 4096  is the size of the key we want to create 
 rsa : type of key for securily commuicate with git hub 
        two files are generate one for our mechine (private file ) and other  for third party services like git hub (private)
 -C  : (comments) for providing the email address inside the comments that gona be associated  with key value pair      
  
  command for generate key $ssh-keygen -t rsa -b 4096  -C "akashsingh43457@gmail.com"  
  then after running the command it ask for the file in which we want to save the key : it is better to stick with the default file 
   then it ask for passphrase it is not compulsory so we can leave it then hit enter 
    then it generate the key    
    then write command to check that ssh key present or not  :
    $ ls -a  ~/.ssh
    ./  ../  id_rsa    id_rsa.pub          ( shown )

in which "id_rsa" (treate as a password!) is private file that is present in our mechine and "id_rsa.pub" is public file that we give to the third party services like git hub

 $ eval "$(ssh-agent -s)"  command to check ssh -agent is running or not if not then it start it 

 after that it give "Agent pid some number "
  eg.  Agent pid 386
  not we have to add our private ssh key 
  $ "ssh-add path of the private key"

  eg . 
  $ ssh-add ~/.ssh/id_rsa
  Identity added: /c/Users/Akash Singh/.ssh/id_rsa (akashsingh43457@gmail.com)

  then it will ask for passphrase  ,you may leave empty by typing enter


$ clip < ~/.ssh/id_rsa.pub 
using this command we copy the public rsa_key 
then open your git hub account > settings > SSH and GPG keys >New SSH key >then paste your key value that you copy 

now we are ready to communicate with git hub securily 

$