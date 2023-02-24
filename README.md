### `The Game Shop back-end part`
MERN app for purchasing video games.

### `See the` [Github repo](https://github.com/UpekkaChakma/the-game-shop-client) `for it's front-end part`.

### `ExpressJs` `Mongoose` `MongoDB` `JsonWebToken` `Dotenv` `CryptoJs` `NodeMailer`

### `User Routes`
1. User can purchase any available games.
2. Once purchased, the same game can't be purchased again.
3. All the data are stored to mongodb database.
4. Can see his purchased games list.
5. Has Authentication with Firebase.
6. Authentication methods are email-password, google and facebook. 

### `Admin Part has three Routes`
1. Admin routes can be used for CRUD operation.
2. create, update and delete any game data.

### `Authentication Part has two Routes`
1. when a user log in or sign up, the first auth route will generate a token using JsonWebToken and send it back to the client. The token will be used later for verification and accessing other routes. It will expire after 3 days so the client has to log in again after the token expiration.
2. The second route is a `middleware` that will verify the token from the client (both User and Admin). Then will redirect them according to their requested route.
Will block the client from going further if verification fails.

