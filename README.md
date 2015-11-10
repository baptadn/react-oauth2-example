# react-oauth2-example
React example for handling OAuth2 authentication and refresh token.

Workflow:

- Catch the 401 error;
- Check if it's a token expired error;
- Ask a new token to the API with `refresh_token` grant type;
- Replay the initial request with the new token.

The API side isn't provided here.

## Build app

### Install project   
```
npm install
```

### Build app   
```
npm run build
```

### Local run
```
npm run watch
```

By default Webpack runs local server on localhost:8080, you can change this config by adding --host yourip --port yourport within `package.json`:   

 ```
 webpack-dev-server --hot --inline --progress --colors --history-api-fallback --host 127.0.0.1 --port 1337
 ```