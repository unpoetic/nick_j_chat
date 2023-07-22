# Nick Johnson's Electron/React Chat App

## How to Install and Run the App:

In the root directory type:
### `npm install`

Then to launch the application:
### `npm run launch`

The launch script builds the application with Craco and then runs the application in a new Electron App window

Notes:

This app was worked on for about 1.5 business days, or 12 hours. 4 hours for researching, 4 hours of actual coding and about another 4 hours for code cleanup. I tested a number of approaches to do this including the "lazy" way of using Boilerplate code for Electron and React. I ultimately didn't go in that direction and just started from scratch.

The app is comprised of App.js which is the entry point to our app. It's where I handle both authentication and conditional rendering. Authentication and data persistence in general is handled using the electron-store npm package. There were other options but know my knowledge this is the most used and supported package for this purpose.

The app has 3 main components: 

Message.jsx - The individual message component for the hypothetical users. When a new message is sent, the chat bubbles do a smooth animation transition.

ChatSideBarx - Our list of conversations. For the purpose of this PoC I pre-populated a conversation and an initial message. There's a preview of the last message sent from the previous chat session, which can be tested by doing command/ctrl + r to refresh the page in the Electron App.

ChatDisplay.jsx - The viewport for the chats themselves. Included is an input tag where the user can send messages by typing something and pressing "Enter".

For the CSS, several different strategies could be used. For the next iteration of this PoC, I would take the raw CSS written and either use Bootstrap, Styled Components and/or SCSS. I went with a raw CSS option because I was going on mainly speed and I didn't want to add to the bloat of the application if I didn't have to. Also it's been a while since I've written raw CSS so it was nice to do that for once. The CSS is generally responsive, with some tweaks needed for specific resolutions. That can be fixed easily enough with either making more media queries or just using a Bootstrap theme for layout. Lastly, all of the CSS is in App.css - generally we want to avoid this but for this project I knew other people would be reading it so I kept it all in one place. Generally we would want to break it down by Components listed above: App, Message, ChatSideBar and ChatDisplay.

The App keeps the user logged in upon going through the login flow. Since there's no logout button on this iteration, we can simulate that by simply setting loggedIn to false using electron-store. There are two commented out lines for this purpose but that can easily be made into a button that calls the function.

I tried to emulate the colors the best that I could not having the specific values or any of the assets that the UI/UX designer would usually provide but I was able to screencap all the graphics needed.

TODO:
Since this is about a day and half's worth of work, I would probably switch out the hard-coded CSS with Bootstrap or Material or Styled Components. This is highly dependent on what is used in the organization. I would also make the chat history a bit more robust using the already-implemented electron-store. Right now it's just being used for saving the last message in the conversation but we could easily put those into one JSON object for a full history. I didn't implement this in this iteration for testing purposes and was not sure if that was within the scope of this test. We can also hook this up to a GraphQL or RestAPI pretty easily for the backend, we have everything we need for that. 