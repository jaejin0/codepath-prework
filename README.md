# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Jaejin Cha

Time spent: **12** hours spent in total

Link to project: https://glitch.com/edit/#!/tinted-amazing-headstand?path=README.md%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Displaying player's current health status using game logic
- [x] Buttons keeping 4x2 form when the webpage expands
- [x] Computer picks a different number of stages each time the game is played
- [x] Differentiation of texts by changing the background color

## Video Walkthrough (GIF)

<img src="http://g.recordit.co/hNl6NcnV2k.gif"/><br/>

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    - https://htmlcolorcodes.com/color-names/
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    - http://help.recordit.co/recordit-not-working/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

	When I was working on the program to randomly generate the number of stages of the game and apply the number to the function which displays the status, I could not find an error that made the start button not working. Because the error broke down the start function, I could not simply test my program to identify the error. After about 5 minutes, I could find out what the error was, and it was one of the braces that were missing its closing braces.
    
	I struggled to try to display the change in current health status and the number of stages on the webpage. I wanted to implement my program to display different texts on HTML, changing based on the values of data generated on JavaScript, but I was not sure how to. Then, I came up with the idea to implement the code based on the way of switching the status of the start/end buttons to display on the webpage. I set different texts for every case, which was 4, each. Then, I put them on HTML with a unique id for each status. I put class=”hidden” inside of the tag of the texts which are supposed to be initialized as the webpage starts. Then, I used add(“hidden”) and remove(“hidden”) methods to control the display based on the status as the game progressed.
    
	Implementing the sound effects of game buttons was harder than I expected. Since I have a total number of 8 buttons, I thought it will be awesome to put every note of a certain key, so that it can also be played as a virtual instrument. I picked every note to be in F major key and made the buttons to be played as a chord. I could change the function to have 3 different sounds at the same time. But the problem was it sounded horrible. I rechecked the frequencies of notes in the F major key, but there was no problem. Then I think the problem is just the quality of the synthesizer, which I am not familiar with. So, I changed the plan from generating the chord with 1st, 3rd and 5th notes, to generating the chord with 1st, 3rd and 8th to cause less amount of conflicts of frequencies. As the result, the disturbance of the sound decreased significantly, and the sound of the game button had a unique chord.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

	I want to know how to set the size of paragraph manually. I was trying changing the size of the contents inside of the p tag to not have background to not cover the area on the right side of the webpage. I think having a background color on the space, where there are no texts, is not tidy and I think it will distract the user from focusing on the game and contents of the webpage, by having an unnecessary feature. Even after researching to change the way the paragraph looked, I could not find the answer for it. I want to know how to code for styling paragraph. Since there are many texts in webpage, I believe it is important to know changing the shape of paragraph for web development.
	
	Also, I want to know how to measure and use time. I tried to implement the program for the time limit for entering the player’s guess. I tried to make a function to get the time value of guessing the game button and a function to get the time when the clue finishes, using performance.now(). Then I tried to subtract the difference of the times, multiply the time by 1000 to change the unit from milliseconds to seconds, and check if it exceeds the time limit. I failed to use the method I tried, but I want to know how I can code to achieve the optional feature.



4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

	Even though I spent lots of time implementing the program the way I want and figuring out how, I still have 2 things I want to work on.

	First, I want to change the functionality of the program for displaying different texts on html based on the status of the game play. When I was using the idea from the way the start/end button works in the project, I was wondering if there is a better way to change the texts based on the status on JavaScript. I only needed about 4 cases for health status and number of stages each, but if I needed hundreds of cases to show to the user, my method would not be working efficiently. So, I tried to research to find the way it can work more efficient, but I could not figure it out. Even I could not find a better way than my current code, I think there should be a way. So If I spend more time to work on the project, I would like to research more and implement my program, so it can be easier, more efficient, and more useful.
	
	Second, I would like to spend them working on the limit on entering player’s guess. As I previously explained about how I implemented for the optional feature and failed, I could not figure out how to make the program to measure and use the time value. If I get to spend more time on this program, I would like to research more on this feature and see the best way to implement the functionality of time measurement and see the problems I was having. Also I want to see how much I was off from the best way.




## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Jaejin Cha]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
