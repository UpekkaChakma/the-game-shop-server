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

### `Admin Routes`
1. Admin has 3 routes for CRUD (create, update, delete) game data.

### `Authentication Routes`
1. while 1st time login or signup, 1st auth route will generate a token using JsonWebToken and send it back to the client. The token will later be used for secure data connection.
2. 2nd route will verify token from the client (both User and Admin). After verification, this route will redirect them according to their requested route.
3.  Will block the client from going further if verification fails.
