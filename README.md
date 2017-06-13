# Introducing Meteor Candy Light

When I was a teenager, after coming down from a crazy trip, this voice entered my head and said "YOU CAN BE ANYTHING YOU WANT TO BE." With Meteor Candy, I am happy to spread that message in the form of a user impersonation package.

Meteor Candy Light is an evaluation version of Meteor Candy, the hackable admin dashboard package. It's been customized in a special way to focus on the key features and make the setup instant.

<img src="https://github.com/msavin/MeteorCandy-light/raw/master/DEMO.gif" width=1024>

## Get Started

**Meteor Candy *Light*** is a `debugOnly` package, meaning you can start using it right away without having to think about permissions or security. It causes less trouble than a diet soda!

To use it, just run the following command, then press Control + D to open.

```
meteor add meteorcandy:light
```

## Configuration

To demonstrate how easy it is to configure Meteor Candy, the Light edition allows you to set one task, field and avatar by configuring just one object. All you need to do is modify it and make it available on the client and server.

```javascript
MeteorCandyLight = {
    field: {
        field: "services.resume.loginTokens",
        content: function (data) {
            count = data.length || "0";

            if (count === 1) {
                return "1 Login Token";
            } else {
                return count + " Login Tokens";
            }
        }
    },
    task: {
        name: "Change Password",
        prompt: "To what would you like to change the password to?",
        // refresh: true,
        server: function (userId, param) {
            Accounts.setPassword(userId, param)
        },
        client: function (result) {
            if (result) {
                alert("The password has been changed.")
            }
        }
    },
    // Optional avatar field
    // Otherwise, Meteor Candy will try to autodetect
    // avatar: function (userDoc) {
    //  return "http://app.com/avatar/" + userDoc._id + ".png";
    // }
}
```

To see the more advanced customization capabilities of Meteor Candy, check out <a href="https://themeteorchef.com/blog/meteor-candy">the guide</a> on The Meteor Chef. There, you might find a special offer in case you decide to purchase the full version.

## For More Information and Discounts

For more information, news, and discount codes, sign up for the Free Meteor Candy newsletter on the <a href="http://www.meteorcandy.com/#documentation/current=Demo">official website</a>.

## License 

Meteor Candy is brought to you by <a href="http://meteor.toys">Meteor Toys</a>, and is distributed under the <a href="https://github.com/MeteorToys/allthings/blob/master/LICENSE.md">Meteor Toys License</a>.
