

# Installation

First we need to initiat typescript config compiller

```bash
tsc --init
```

Now we need to initiat nodejs to give it the controll

```bash
npm init --y
```

We need to install our dependencies, 

```bash
npm install --save express
npm install --save body-parser
```

We need to install the types to can use typescript with node

```bash
npm i --save-dev @types/node
npm i --save-dev @types/express
npm i --save-dev @types/body-parser
```

Now we need to uncomment the moduleResolution in the tsconfig.json file like 

**"moduleResolution": "node",**
**"outDir": "./dist",**
**"rootDir": "./src",**    


# Initiating our app

We need to create a new file **app.ts**


```javascript
import express  from 'express';
import loginRoutes from './routes/login';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use(loginRoutes);


app.listen(3000);
```


creating new folder routes, inside login.ts

```typescript
import { Router } from 'express';
import { User } from '../models/user';

const users:User[] = [];
const router = Router();


router.get('/', (req, res, next)=> {
    res.status(200).json({users: users});

});

router.post('/signin', (req, res, next) =>{
    const user:User = {
        id: new Date().toISOString(),
        password: req.body.password,
        salt: "my-salt"
    };

    users.push(user);
    return res.status(201).json({User:user});
});


export default router;
```


creating model and user.ts

```typescript
export  interface User{
    id: string;
    password: string;
    salt: string;
}
```

# Execute

First it is necesary to compile the files

```bash
tsc
```

then it is able to execute

```bash
node app.js
```
