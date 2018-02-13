# Train schedule demo
Displays real-time MBTA train data. Refreshes the data every few seconds.

## Prerequisites
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)

## Setup
```shell
yarn install # install dependencies
yarn build # build the JS
yarn start # start the server
```
Browse to http://localhost:8080/

## Potential improvements
* Error handling: Currently the app will display a blank page if an error occurs while fetching the schedule data. Ideally it should catch the error and display a useful message.
* Responsiveness: The table will perform basic wrapping at smaller screen sizes, but this could be fine-tuned with explicit breakpoints.
* Accessibility: The table should have some ARIA attributes to connect the data with the associated labels.
