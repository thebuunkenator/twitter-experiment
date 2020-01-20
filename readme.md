#Twitter like clone
nodejs,
mongdb
express


## installation
```
npm init
npm install express cors body-parser mongodb
npm i -D nodemon
```

aanpassen package json voor productie en development
in servermap index.js aanmaken

Om server te starten:
```bash
npm run dev
```

 -----


 Client: VUE

 install vue cli (globally)
 ```
$ sudo npm i -g @vue/cli
$ vue create client

```
om client te starten
```bash

cd client
npm run serve
```

# dev/prod config
create a vue.config.js in the client source folder. This will take care of rerouting the api calls to a local port 5000.
In prod, the build sources will be put in the server/public folder, so you have server and client in one place

```json
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  },
```


