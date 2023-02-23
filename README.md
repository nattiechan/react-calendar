# React-calendar

An exploration of topics and technologies presented in the Codesmith software engineering immersive program through a program calendar website with a to-do list and weather forecast functionalities. Contents of the program calendar are taken from the [Our Community Bikes website](https://ourcommunitybikes.org/) which the author is a current volunteer with the organization.

Technologies explored:
- React (bootstrapped with [Create React App](https://github.com/facebook/create-react-app))
- React hooks
- Express

Topics explored:
- Semantic HTML
- State management


----------------------------------------

### Demo:

https://user-images.githubusercontent.com/47332368/220829050-5f5678e5-88de-48fe-8b70-94aa41523799.mp4




-----------------------------------------

### To view the website:

Step 1: Clone the repo to your desired folder in your local environment

```
git clone https://github.com/nattiechan/react-calendar.git
```

Step 2: Start the backend server. In terminal run:

```
npm run server
```

Step 3: React-router is not installed yet, so the front end needs to be initialized in a separate terminal window/tab:

```
npm start
```


Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

-----------------------------

### Credits:

- WMO Code mapping reference: https://open-meteo.com/en/docs

-----------------------------

### TODOs:

- Additional styling: background, custom border, potentially custom scroll bar for to-do list, make forecast easier to read
- Backend for fetching schedule as a JSON file
- Add links to program schedule
- [Stretch goal] Add weather icon to forecast (Potential resource [here](https://developer.weathersourceapis.com/apis/appwx-weather-icons/))

