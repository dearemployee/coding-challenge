# "Cat as a service" browser
Yes, you read it correctly. Cat as a service is a thing. It's a public REST api accessible [here](https://cataas.com/#/)

The aim of the assignment is to write a simple application for finding pictures of cats and filtering them by tags.
Application should be written in TypeScript and React. It can use npm or yarn, it's up to you.

# Requirements
There should be two main "views":
1. The starting page. It should display dropdown with list of tags and a "Search" button.
Dropdown should be a multiselect one. It should allow filtering tags by entered text. Search button should be placed next to it.
Whole thing should be centered vertically and horizontally.
2. Search result page. It should be a list of images displayed together with their metadata: owner, created_at and tags.
Tags should be displayed as coloured "pills". List should support pagination. If there are no results it should display info message.

To solve this task you should fork this repo and create a pull request.

# API endpoints you will need

List of tags can be fetched from https://cataas.com/api/tags

List of cats is here https://cataas.com/api/cats?tags=cute

A single cat image can be fetched using its *_id* field from https://cataas.com/cat/{_id}

# Extra points for:
- making clickable tag pills. Clicking should trigger a new search by clicked tag.
- writing unit tests
- using SCSS
- adding "I feel lucky" button