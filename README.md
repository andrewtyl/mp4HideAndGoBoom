# Mario Party 4, Hide and Go Boom Simulator
## Created by Andrew Jessen-Tyler
## Original Minigame by Nintendo and Hudson Soft

## Background Information
* [Mario Party 4 Wikipedia Page](https://en.wikipedia.org/wiki/Mario_Party_4)
* [Hide and Go Boom Minigame on Mario Wiki](https://www.mariowiki.com/Hide_and_Go_BOOM!)
* [Hide and Go Boom Minigame In Action](https://www.youtube.com/watch?v=LO2ovXtoDmI)

### Backstory
So, I was playing Mario Party 4 (my favorite one, and the one I grew up on) and as I kept playing the minigame "Hide and Go Boom", I realized it's entirely chance based. But what are the odds? Does the 1 have the advantage, or do the 3, or is it actually 50/50? Well, rather than simply write down and calculate the statistics myself, I decided to program a simulation based off of the minigame mechanics, run it a thousandish times, and see how many times each team wins.

### How To Use
* Use the 'npm start' script to run the program. You may adjust the amount of simulations for more or less precision. For reference, on my system, 4 million simulations takes about 1 second.

### Conclusion
It turns out that the three player team has a slight advantage and will win just under 58% of the time.

##### Notes
While a good chunk of this code could be hard written, I decided to make several parts of it easier to reuse in a sense. Though this does make the code look a bit sloppy. Perhaps I can come back to this code at a later date and make all of minigame.js reusable, so it would be possible to set the amount of cannons, players, and fuses.

##### License
MIT License

Copyright (c) [2020] [Andrew Jessen-Tyler]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.