# Data

The data with-in this object will be used to power the Overview tab of your application. The goal is to give some "at-a-glance" statistics, such as how many users there are in the database or how many people joined in the last month.

`name` and `value` refer to what you will see on the sidebar. Mainly, its the name of the dataset and a badge. In the example,  one of the way its used is to display how many "Total Accounts" there are in the database.

`content` refers to what data will be displayed in the main area once that section is selected. See the sample below for an example of how it works. 

Meteor Candy UI will automatically sanitize the data and render it in the appropriate form. If you do not wish to sanitize it, you can set `sanitize: false` to the individual field.

Meteor Candy will run your functions on the server and then send it up to the client. Here is how Meteor Candy UI expects to see the data:

```javascript
    name: "Total Accounts",
    value: 14, 
    content: [
        {
            name: "Meteor Candy can serve data any way that you would like. It will automatically try to detect the best way to display it."
        }, {
            name: "Lists Collection",
            value: "14 documents"
        },{
            name: "Email",
            value: "derp@me.<b>com</b>",
            sanitize: false
        }, {
            name: "HTML Injection",
            value: "<strong>Everything is sanitized by default, but you can opt out of it whenever</strong>"
        }, {
            name: "Hyperlink",
            value: "http://www.google.com",
            sanitize: false
        }, {
            name: "Big Hyperlink",
            value: "https://www.footasylum.com/mens/mens-footwear/trainers/nike-air-max-95-essential-trainer-light-pumice-dark-stucco-119233/?src=froogle&utm_source=Criteo&utm_medium=display&campaign=retargeting",
            sanitize: false
        }, {
            name: "Kind-of Invalid Hyperlink",
            value: "www.footasylum.com/mens/mens-footwear/trainers/nike-air-max-95-essential-trainer-light-pumice-dark-stucco-119233/?src=froogle&utm_source=Criteo&utm_medium=display&utm_campaign=retargeting",
            sanitize: false
        }, {
            name: "Image URL",
            value: "https://sneakerbardetroit.com/wp-content/uploads/2018/03/Nike-Air-Max-97-Ultra-White-Black-Red-AH6806-005-Release-Date.jpg",
            sanitize: false
        }, {
            name: "Lots of Text",
            value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        }, {
            name: "The data for this view",
            value: function () {
                // when returning raw data, Meteor Candy will automatically pretty-print it as JSON
                return [{
                    name: "Meteor Candy can serve data any way that you would like. It will automatically try to detect the best way to display it."
                }, {
                    name: "Lists Collection",
                    value: "14 documents"
                },{
                    name: "Email",
                    value: "derp@me.<b>com</b>",
                    sanitize: false
                }, {
                    name: "HTML Injection",
                    value: "<strong>Everything is sanitized by default, but you can opt out of it whenever</strong>"
                }, {
                    name: "Hyperlink",
                    value: "http://www.google.com",
                    sanitize: false
                }, {
                    name: "Big Hyperlink",
                    value: "https://www.footasylum.com/mens/mens-footwear/trainers/nike-air-max-95-essential-trainer-light-pumice-dark-stucco-119233/?src=froogle&utm_source=Criteo&utm_medium=display&campaign=retargeting",
                    sanitize: false
                }, {
                    name: "Kind-of Invalid Hyperlink",
                    value: "www.footasylum.com/mens/mens-footwear/trainers/nike-air-max-95-essential-trainer-light-pumice-dark-stucco-119233/?src=froogle&utm_source=Criteo&utm_medium=display&utm_campaign=retargeting",
                    sanitize: false
                }, {
                    name: "Image URL",
                    value: "https://sneakerbardetroit.com/wp-content/uploads/2018/03/Nike-Air-Max-97-Ultra-White-Black-Red-AH6806-005-Release-Date.jpg",
                    sanitize: false
                }, {
                    name: "Lots of Text",
                    value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
                }]
            }()
        }
    ]
```