# Self Care Center

## Overview

“Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.”
 ― Ferris Bueller

We could all take a page from Mr. Bueller's rule book. Self-care is an important aspect of everyone's lives. In this busy world we live in, finding the time to take care of ourselves is a precious commodity.

The Self Care Center's mission is to provide motivational mantras and daily affirmations that are quick and fit into your busy life.

Are you looking for an affirmation to start your day? Simply select the `affirmation` button and then click `Receive Message` to see your affirmation. Are you busy and working through lunch? Just select the `mantra` button and then click `Receive Message` to see your motivational mantra.

### Project Motivation

The Self Care Center project aims to teach developers how the DOM works with JavaScript, CSS, and HTML to create functional and interactive websites. This project was completed independently to gauge the level of progress students have made in the program.


## Project Information
#### Code Style & Framework
* JavaScript
* HTML
* CSS

#### Features
* Login Page
* Display Affirmation
* Display Mantra

#### Code Sample

```javascript

function insertName() {
  var name = document.getElementById('welcome-login').value;
  if (name === '') {
    document.querySelector('.greeting').innerText = "Hello, Friend!"
  } else {
  document.querySelector('.greeting').innerText = "Hello, " + name + "!"
  }
}
```

### Installation

1. To edit this repository:
  * navigate to repo on `github.com` or use [this link](https://github.com/turingschool-examples/self-care-center)
  * choose `fork`
  * `clone` to local machine
2. `cd` into repository
3. Open in your text editor
4. To view webpage, run the command `open index.html` in your terminal

### Credits

This repository was provided by Turing School of Software and Design, a Colorado Non-Profit Organization.

For original repo [click here](https://github.com/turingschool-examples/self-care-center)

Interested in learning more about Turing? [click here](https://turing.edu/)
