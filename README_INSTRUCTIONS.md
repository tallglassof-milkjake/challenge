### Instructions:

- run `npm install`
- run `npm run dev`
- head to localhost:5173
- Pages that are operational
    - Initial landing page (log in or sign up)
    - Log in page (must enter any name and password), only the Login button will work and if the username and password aren't read it will fail (not handled)
    - Explore page (note, this page is only available after getting a token from the mock log in functions and can only be removed by manually emptying localStorage)

#### _Note:_ 
The app was developed in a web interface prioritising mobile screens. I recommend using browser devtools and selecting a mobile screen size.

### Summary:

My approach to this challenge was heavily focused on the logging in concept by mocking up a fake token retrieval mechanism, keeping some pages "protected" and only accessible to successfully logged in users, but is by no means complete. This is also where validation will be handled and the user will be provided with feedback.

Another focus was attempting to maintain smaller, scaleable components to be re-used as often as possible, making the application as a whole simpler and more flexible. This was the reason I descided to go with TypeScript instead of JavaScript, so as to avoid any potential issues when reusing the components.

I found it challenging in the time prescribed to properly implement a TailwindCSS "theme" to better contribute to the overall maintainability of the code. Unfotunately as a result the CSS variables are not all neatly in one place, showing tailwind classes applied to components instead of being packaged in App.css. This has created a significant detriment to the cleanliness of the code. 

In response to this hurdle I began to write in some tailwind @layer styling that would be an attempt to improve maintainability and scaleability. I have also taken away from this that in the future I need to remember to prioritise the overall theme layout at the beginning of the process, instead of doing more work later on.