### `The Game Shop back-end part`
MERN app for purchasing video games.

### `See the` [Github repo](https://github.com/UpekkaChakma/the-game-shop-client) `for it's front-end part`.

### `ExpressJs` `Mongoose` `MongoDB` `JsonWebToken` `Dotenv` `CryptoJs` `NodeMailer`

### `User Part has Routes`
This routes can be used for-
1. To get all video games data.
2. Find a single game data.
3. To check if a game already purchased.
4. Find all the games purchased by the user.

### `Admin Part has three Routes`
1. Admin routes can be used for CRUD operation. Create, Update and Delete any game data.

### `Authentication Part has two Routes`
1. when a user log in or sign up, the first auth route will generate a token using JsonWebToken and send it back to the client. The token will be used later for verification and accessing other routes. It will expire after 3 days so the user has to log in again after the token expiration.
2. The second route is a `middleware` that will verify the token from the client (both User and Admin). Then will redirect them according to their requested route. `Middleware` will also block the client from accessing other routes if verification fails.

