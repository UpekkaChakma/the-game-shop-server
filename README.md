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
1. while 1st time login or signup, 1st auth route will generate a token using JsonWebToken and send it back to the client.
2. 2nd route will verify token for both User and Admin.
3. Then will redirect them to different routes(admin-routes, user-routes or block if verification fails) according to the verified result.
