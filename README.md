# Location Picker

A simple app to display a list of locations based on user entry.
The app has been hosted at [Location Picker](https://saumgarg0402.github.io/location-picker/)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Functionalities available
- Enter alpha numeric characters to start searching for location

### Tests
- Styling is same as rentalcars.com homepage, along with placeholder of the search-box
- default browser focus state is used
- Accessibility tested on Edge with Narrator. 
- No results displayed if only sigle character entered
- Max 6 results displayed at any point
- If api returns 0 results (or fails), 'No results found' text displayed

### UX Components
- [Microsoft Fluent UI](https://developer.microsoft.com/en-us/fluentui#/get-started) library is used. The library provides responsive, accessible components out of the box
- `Fluent NormalPeoplePickerBase` is used for picking locations.
    - `onResolveSuggestions` callback used to return results from api
    - `onRenderSuggestionsItem` callback used to style items in the list

### Implementation details
- `fetch` is used to pull api data
- App schema contains basic item schema to display results in callout
```typescript
    interface LocationPickerSchema {
    placeType?: string;
    region?: string;
    city?: string;
    country?: string;
}
```

### Hosting details
- Hosted using github library `gh-pages`
- Package management done using `yarn`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

