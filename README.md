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

---
### Technical Test Just Eat

https://github.com/justeat/JustEat.Recruitment.UI

##Questions

####What approaches did you use when completing the test? Do you use any CSS methodologies or techniques to help this approach?

I used BEM styling approach to organise and efficiently select elements. It helped me to structure my code.

Functional react component composition. Common abstraction.

####If you had more time to spend on the test, what would you like to add to your solution?

- Testing

- Fallback UI (Error, loading, skeleton)

- I would go with mobile first design in the beginning

- Responsive Styling

- Consider using styled components/sass built through webpack to have scoped styling

- Precisely follow the design

- API client to handle requests - Serialize data within client – Perform retries from the FE if it’s not done from the BE

- Data logging

- Client-side caching if not available from backend services

####What browsers should your test work in? What will happen if we test it in older browsers like IE10?

Should work on Firefox, Safari and Edge. It might also work for IE10. I have polyfills in place. Might need to re-check the styling. Some attributes might require –ms- prefix.

####What's your favourite programming language? Why?

Huge fan of TypeScript right now. IDE provides you with what kind of data structure you’re looking. Makes it much easier to spot bugs. Also JS is so much powerful and predictable with it.

####Please describe yourself using JSON.

````{
  "customer": {
    "lastName": "Khan",
    "phoneNumber": "+447111111111",
    "firstName": "Umar",
    "profile": "Traveller, foodie, avid reader and onion connoisseur."
  },
  "issues": [
    {
      "code": "FE_DEVELOPER_READY_FOR_TESTING"
    },
    {
      "minimumOrderValue": 1,
      "currency": "GBP",
      "code": "MINIMUM_ORDER_VALUE_NOT_MET",
      "additionalSpendRequired": 100
    }
  ],
  "serviceType": "frontend developer",
  "isFulfillable": true,
  "fulfilment": {
    "time": {
      "scheduled": {
        "from": "2021-09-28T00:30:00.000",
        "to": "2021-09-29T00:30:00.000"
      },
      "asap": true
    },
    "location": {
      "geolocation": {
        "longitude": 52.444597189517125,
        "latitude": -1.8340921489779307
      },
      "address": {
        "locality": "Birmingham",
        "lines": [
          "XX XXXXXXX Road"
        ],
        "postalCode": "XXX XXX",
        "administrativeArea": "England"
      }
    },
    "table": {
      "identifier": "Table 1"
    }
  },
  "restaurant": {
    "id": "NANDOS",
    "availabilityId": "ALWAYS"
  }
}