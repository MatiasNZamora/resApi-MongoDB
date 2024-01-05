
# RestApi MongoDB

Esta es una api de autenticación de loggeo basada en Typescript conectada con una base de datos no relacional en este caso MongoDB.
La misma se encuentra documentada a travez de [Apidocs](https://apidocjs.com/).


## Dependencies

Dependencies:

- bcrypt: "^5.1.1"
- cors: "^2.8.5"
- express: "^4.18.2"
- jsonwebtoken: "^9.0.2"
- mongoose: "^8.0.3"
- morgan: "^1.10.0"
- passport: "^0.7.0"
- passport-jwt: "^4.0.1"

Dev Dependencies:

- tsc-watch: "^6.0.4"
- apidoc: "^1.2.0"
- typescript": "^5.3.3"
    - @types/bcrypt: "^5.0.2"
    - @types/cors: "^2.8.17"
    - @types/jsonwebtoken: "^9.0.5"
    - @types/mongoose: "^5.11.97"
    - @types/morgan": "^1.9.9"
    - @types/passport": "^1.0.16"
    - @types/passport-jwt": "^4.0.0"



## Package.json

Scripts necesarios:

```bash
    "start": "node dist/index.js",
    "dev": "tsc-watch --onSuccess \"node dist/index.js\" ",
    "build": "tsc",
    "docs": "apidoc -i src -o docs"
```
    
## Deployment

Para la ejecucion del proyecto:

```bash
  npm run dev
```

Para la generar la documentación:

```bash
  npm run docs
```

Para la generar el build:

```bash
  npm run build
```
