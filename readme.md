# Common Module

This module is for common fuctionality within other Node projects.

## Installation

It can be installed using npm using:
```npm install @davetheitguy/common-module```
Or with yarn
```yarn install @davetheitguy/common-module```

## Functionality

The module has the following functions:

`stopPropagation(e: Event | JQuery<Event>)` - Stops propagation, and prevents default on an event
`hideElement(e: HTMLElement | JQuery<HTMLElement>)` - hides the given HTML element
`showElement(e: HTMLElement | JQuery<HTMLElement>)` - shows the given HTML element
`hasClass(e:HTMLElement|JQuery<HTMLElement>)` - returns true if the HTML element has the specified class
