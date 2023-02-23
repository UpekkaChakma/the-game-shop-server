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
1. Admin routes can be used for CRUD operation create, update and delete game data.

### `Authentication Part has two Routes`
1. while first time login or signup, 1st auth route will generate a token using JsonWebToken and send it back to the client. The token will later be used for secure data connection. The token will expire after 3 days so client has to login again after token expiration.
2. Second route will verify token from the client (both User and Admin). Then will redirect them according to their requested route.
3. Will block the client from going further if verification fails.
