# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories


### Links

- Solution URL: [Job Listings with filtering](https://github.com/matiussi-2035/job-listings)
- Live Site URL: (https://matiussi-2035-job-listings.netlify.app/)

## My process

The development process that I used in this project, in short was:

  - Create the components Job, Filter, Button
  - Get the data from the JSON file 
  - Define the HTML elements
  - Define the style of variables, typography and create mixins
  - Define the style of the components
  - Create a customized hook using context to store the filters
  - Implement button functions, add, remove, clear
  - Adjust the layout for desktop
  - Create animations

My focus on this project was learning more about some React and JS features, so I will skip CSS and HTML details.
I decided to divide my project into three components:
  - Job, displays all the information about the jobs according the filter. 
  - Filter, display all filters being used.
  - Button, generate a button according to the paramaters and implement the operations to add/remove and clear the filters.

My main ideia was creating a filter list that can comunicate with other components without using parameters/props, I already knew about the React states but I didn't know how to create a global state, after some search I found the Context API that allows to share global data. It was needed to create a provider for the filter, that includes the context and the state.

The first attempt to create the addFilter() and removeFilter() was using the data without any manipulation, I tried to implement it
using Object.keys() but when a value has an array the filters didn't work as intended, I've lost too many time trying to figured out how to do this, in the end I just gave up and thought in another solution.

In the second attempt I took the easiest way, after loading the job object from file I used the method Object.assing() and create a new property(array) called "filters" containing the "role", "level", "languages" and "tools" on it, then I just needed to check if the 
job.filters has all the filters stored on the state.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- React Context API and Hooks
- [React](https://reactjs.org/) - JS library
- [SCSS](https://sass-lang.com/) - For styles


### What I learned

- The basics of Context API, Providers and Hooks
- Object.assign method
- Every and some methods

### Continued development

I need to study and use more modern Javascript, sometimes I get myself writing a lot of code using vanilla Javascript, when I could solve the same problem using fewer lines of code.
Learn more about Hooks and Context.
Organize my CSS with more variables and reusable code.

### Useful resources

- [Example resource 1](https://www.cluemediator.com/search-filter-for-multiple-object-in-reactjs) - This helped me on my first attempt, and thanks for this example a learned about some() and every().
- [Example resource 2](https://reactjs.org/docs/context.html) React documentation explaining about Context
- [Example resource 3](https://reactjs.org/docs/hooks-state.html) React documentation explaining about Hooks
- [Example resource 4](https://reactjs.org/docs/context.html#contextprovider) React documentation explaining about Provider
- [Example resource 5](https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/) - Article in PORTUGUESE explaining about the every(), some(), find() and includes() methods 

## Author

- Github - (https://github.com/matiussi-2035)

## Acknowledgments


