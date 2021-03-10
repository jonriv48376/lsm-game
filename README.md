# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Jonathan Rivero**

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/sparkling-elfin-axolotl

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Required - 1, 3-5, 7, Optional - 1-3, 6, 7


![](https://recordit.co/2LujXFs0Dx.gif)


Required - 2, Optional - 5 

![](https://recordit.co/2F59Q8kT8j.gif)



Required - 6

![](https://recordit.co/Y1Vc4b48tF.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   For Randomizing Pattern - https://medium.com/@oldwestaction/randomness-is-hard-e085decbcbb2
   
   In general - https://www.w3schools.com/
   
   In general - https://css-tricks.com/
   
   In general - https://stackoverflow.com/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   I had a few challenges in completing the submission. Firstly, I had difficulty in attempting to add pictures to the buttons and make them formatted so that they are smaller than the button and centered. I determined that I could use two solutions, one of which required HTML code and JavaScript methods, and the other which required CSS. I elected for the former because it made the image a part attached to a specific button. In the process of that, various errors occurred like the image formatting incorrectly and a button press making other buttons disappear. Another challenge for me was in understanding the JavaScript AudioContext library which was used to implement sound into each button. Reading the tutorial itself and the linked webpage with further information on the topic helped with dissecting each line of code for it. For me, this was a brand-new concept as I have never worked with audio elements in my limited time with JavaScript. A final difficulty was with the guess() function, which I attempted to implement myself. The flow chart itself was simple enough to understand, but witht he amount of cases to account for, I continued to make minor errors which were fatal to the if else statement. Eventually, I had a look at the answer version and corrected my errors accordingly.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
  
   One question I’d have is regarding how to implement back end, as I’ve never experienced that side of web development. I’ve done some  work involving front end but never back end. Perhaps for this project back end can be utilized to log a person’s amount of wins in    the game, then at the end of the game display a leaderboard of the most wins (this would also require that people login to associate  the scores with the people, something which I’m not knowledgeable on how to do yet).  Another question I’d have is regarding which    elements can be updated to look better. The pop-up window for winning/losing, for instance, doesn’t look the most elegant and I  wonder if we can change the look of it or have another screen which tells the same messages. A final question I’d have is if using a tool like Bootstrap would significantly improve the look of the project, because it is a simple layout which won’t have much room for drastic look changes. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   I would firstly attempt at completing the other optional challenges which I did not complete, which were playback speeding up after each turn, adding different audio files entirely to buttons, and implementing a time limit for each turn. I did change button sounds, but those were within the frequency levels of the audio which I already had access to. Another thing I would do is keep the buttons in the same position even when it is being clicked. Although the buttons moving adds another indicator that it is being clicked, I simply feel that it’d look better without it. I would also add more buttons to the game to make it more difficult and find a way to add more pictures through having them grouped by color, then randomly selecting one of each color per turn. A final change I’d make is the look of the project by changing formatting, text size/font, and change the shape and size of the buttons. 

## License

    Copyright Jonathan Rivero

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
