# HuuMyProject



**1.	Directory structure**

_Include the following notable files and folders:_

•	Contains folder: Contains shared data for the app (colors, ...)

•	Assets folder: Contains assets used in the app, currently has an images folder containing image files.

•	App.js file: Program executable file

•	Components folder: 
    Contains all the components that build the app:    
    
     * Profile folder 
      Contains the components that make up the profile page, include
      + header: includes cover image, avatar, use name
      + body: includes post, status buttons,
      + post: post contents

     * Global folder
      Contains shared components for the app

     * Navigator: 
      Navigation files:
      + Profile stack: navigate the profile page to subscreens
      + Tabs: for Bottom Tabs Navigator

     * Other demo screens


**2.	 Libraries and techniques used**

   "react-navigation": "^4.4.4,",
   "react-native-screens": "^3.13.1",
    => Use navigation functions

   "@react-navigation/bottom-tabs": "^6.2.0",
   "@react-navigation/native": "^6.0.8",
    => Build Bottom Tabs Navigator


   "@react-navigation/native-stack": "^6.5.2",
   "@react-navigation/stack": "^6.1.1",
   "react-native-gesture-handler": "^2.3.2",
   
 => Build navigation from profile page to subpages



  "react-native-paper": "^4.11.2"
    => Build buttons

  "react-native-svg": "^12.3.0",
    => Use svg files

  "react-native-vector-icons": "^9.1.
    => Use the icon library

  "react-native-webview": "^11.17.2",
  "react-native-youtube-iframe": "^2.2.2",
    => Embed video

  "react-timer-mixin": "^0.13.4" 
    => Set timer: not used in the app

    **Other techniques:**

    - Use Modal component, setState function, and React.createRef() to create floating bottom menu when clicking on avatar, cover picture or post information icon
    
        (details in file floating_menu/index.js and class PostThreeDots in file post_header/index.js.

    - Use Map function to create a list of stories in the body

    - Use useState function to change the state of post-reaction icons
    
    - Used "props" parameters to provide properties for components 



**3.	When building the app**


After cloning, run "npm install" command before building the app.

Note: The app has only been tested on android phone.
