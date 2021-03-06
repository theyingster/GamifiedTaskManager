# Gamified Task Manager

The goal is to create a gamified task manager app (read: fancy to-do list with built-in motivators) that surpasses performance of other task manangement apps with its aesthetic design and element of incentive. 

The core of this app is a to-do list, and when users finish daily/weekly/monthly tasks, they can earn coins which they can then use to the purchase different outfits/furniture for their character and their living space (with different aesthetics so we can cater to different tastes of users). There can also be different levels to grow towards that open up more stores and options for products to buy with game coins. There could even be a community aspect built in where users can add other users and and gift items. 

In terms of display, there will be two main screens: the to-do list and the character game space.


## Developers
### Getting Started
To work on this project, you'll want to have a local working copy of the repository on your machine. Here are the steps you want to follow:

1. Clone the repository to your local machine.

2. Open VS Code and open the repository folder.
    + Using the menu bar, go to _File > Open Folder_ and navigate to the repository.
    + Alternatively, you can use the shortcut _Cmd-K O_ on Mac or _Ctrl-K Ctrl-O_ on Windows.

3. Switch to the develop branch.
    + Using GUI interface:
      + Go to VS Code's _Source Control_ tab (under the file explorer). Click on the meatballs menu and select "Checkout to...". Alternatively, at the bottom left corner of the VS Code window, there should be a "master" button that you can click on.
      + Select _origin/develop_. This will create a local copy of the develop branch.
    + Using command line interface:
      + Alternatively, using the menu bar open an integrated terminal using _Terminal > New Terminal_. Then you want to input `checkout origin/develop`.

4. Next, we want to open the app folder in terminal. Open an integrated terminal by using the menu bar and navigating to _Terminal > New Terminal_. You should currently be in the _GamifiedTaskManager_ folder. Change to the TaskApp directory using `cd TaskApp`.

5. Since the filepath to _GamifiedTaskManager_ will be different on individual machines, each developer will need their own copy of the React libraries. Note: this step requires NodeJS 12.0.0 or higher. If you have not yet downloaded Expo-CLI, then run the command `npm i -g expo-cli`. While in the _TaskApp_ directory, run the command in terminal `npm install`. This will download the React and React Native libraries.

6. Now there should be a folder named _node_modules_ and a file called _package-lock.json_ inside the _TaskApp_ directory. In the file explorer, make sure that both of these are greyed out. If so, then Git will ignore them. Otherwise, add these files' relative paths (found by right clicking on the folder/file) to the .gitignore in _GamifiedTaskManager_.

7. Now to double check that everything works as expected. In terminal (still in the _TaskApp_ directory), run the command `npm start` OR `expo start`. If `npm start` does not work, try `expo start`. This should open Metro Bundler in a browser window at localhost:19002. There should be several options to run your code on the left side of the screen.
    + If you select "Run in web browser," a small popup in the bottom right corner will appear to let you know that Bundler is attempting to open in a web page.
      + Note that Bundler will automatically open the app in a new tab.
      + Do not be surprised if this process takes a while. This is because Expo will be using the develop version of the code, so nothing is optimised yet. The production code will be faster. 
    + You can also run the app on your own phone. This will require you to download Expo Client from the Apple App Store or from the Google Play Store. Using your camera, scan the QR code in the bottom left corner. There should be a popup that redirects you to the Expo app, and you'll see the JS build progress bar at the bottom of your screen. Once it finishes loading, you can interact with the app in a physical device.

Once you reach this point, congrats! You have everything set up to start development.

### Working on the Project
Until the team otherwise discusses, all changes to the project files should happen in the develop branch. This is because only working prototypes should live on the master branch. If you would like to make changes that will result in breaking the develop branch, please instead fork the repo and make your changes to the fork.

Once you have a local develop branch, you always want to push to _"origin/develop"_. As long as Git displays your branch as "develop" instead of "master", it should do this automatically.

Most changes to the source code should happen in the _screens_ and _navigation_ subfolders. However, the insertion point for the app is _App.js_. In order to view changes to the app, you'll want to comment out the existing code inside `return` only and place your component in its place.
