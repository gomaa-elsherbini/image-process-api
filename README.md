# Image Processing API

## Overview

A web app that uses a third party module to make an editing on an image which allowed to user to enter by its name and the desired dimensions to the app to make desired resizing for user.

## project description

This project focuses on how to build an express server with an end point that can be reachable by the image name and its height and width. Write to memory disk via a Node.js file system and how to access to a file system . Using a scalable, architectures and formatted code to make the app scalable for real-world projects and enterprises projects. Tie together some of the most popular middleware and utilities need in Node.js projects.

## Image Processing API

project directory - dist - images - node_modules - spec
-support - jasmine.json - src - routes - api - images.ts
index.ts - tests - helpers - utilities - logger.ts - sharpSpec.ts - indexSpec.ts - utilities - imageProcessing.ts - logger.ts - index.ts - thumb - .eslintrc.js - .prettierignore - prettierrc.json - package.json - README.md - tsconfig.json

## Project requirements

- Node.js
- Typescript
- Unit Test with Jasmine
- express
- third party modules
- eslint
- prettier

## Technolegies used in the project

- node js and express environment.
- express framework to build a server to run app locally.
- using express to make GET and routes on a server side.
- using sharp module with the response with the resized and stored image
- use middleware for different uses such as validation or to check requests or to do some logic between request form user and response form the server.
- using typescript to add a type definition to javascript code to develop and build errors free and strong code rather than week typed javascript code
- using jasmine framework to performed a unit tests to build an errors free and consistence code
- take advantage of threading pool of libuv library
- use prettier and eslint for formatting the code

## main jobs of the project

- initialize project
- install typescript and its type-definitions
- Install Prettier
- Install Eslint
- Eslint + Prettier Integration
- Install Jasmine
- Set up project structure
- Configure middleware and dependencies
- Create an API endpoint
- Install Sharp and configure endpoint
- Write tests
- Add caching
- test, Debug, and Refactor

## The scripts uses for the application

"start": {"nodemon --watch ./\*_/_.ts --exec ts-node ./src/index.ts"},

{"build"}: "npx tsc",

"start:prod": {"npm run build && node dist/index.js"},

"lint": {"eslint ."},

"lint-fix": {"eslint --fix ./\*_/_.ts"},

"format": {"prettier --write src/\*_/_.ts"},

"test": "npx tsc && jasmine"

## Project EndPoint

http://localhost:3000/images?filename=fjord&width=1000&height=1000

## Project functionality

- # Adding a functionality to build up the server and a endpoint
  import express from 'express';
  import routes from './routes';

const app = express();
const port = 3000;

app.use('/', routes);

app.listen(port, () => {
console.log(`server is running at http://localhost:${port}`);
});

# export default app;

- # Adding functionality to create the app routes
  import express from 'express';
  import images from './api/images';

const routes = express.Router();

routes.use('/images', images);

export default routes;

import express from 'express';
import myMiddleware from '../../utilities/logger';
import imageProcessing from '../../utilities/imageProcessing';

const images = express.Router();

images.get(
'/',
myMiddleware,
imageProcessing,
(req: express.Request, res: express.Response): void => {
console.log('image have been successfully resized');
}
);

export default images;

=============================================

- Adding a validation functionality to check the user inputs before request the endpoint

=============================================
const myMiddleware = (
req: express.Request,
res: express.Response,
next: express.NextFunction
) => {
const imageName = req.query.filename as string;
const width = Number(req.query.width) ;
const height = Number(req.query.height);

const imagePath = path.resolve(path.join('./', `/images/${imageName}.jpg`));

if (existsSync(imagePath) === false) {
return res.status(400).send('invalid image name !!');
}
if (
width <= 0 ||
width === null ||
Number.isInteger(width) === false
) {
return res.status(400).send('invalid width input !!');
}
if (
height <= 0 ||
height === null||
Number.isInteger(height) === false
) {
return res.status(400).send('invalid height input !!');
}
next();
};
=============================================

- # Adding an image resizing functionality by a third party module -called sharp
  sharp(path.resolve(path.join('./', `/images/${fileName}.jpg`)))
  .resize(+width as unknown as number, +height as unknown as number)
  .toFile(`./thumb/${fileName}.jpg`)
  .then(() => {
  cache.set(
  myEndPoint,
  path.resolve(path.join('./', `/thumb/${fileName}.jpg`))
  );
  return res.sendFile(
  path.resolve(path.join('./', `/thumb/${fileName}.jpg`))
  );
  });
  =============================================
- # Adding functionality to add tests
- endpoint test:

import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
it('gets the api endpoint', async () => {
const response = await request.get('/images');
expect(response.status).toBe(200);
});
});

=============================================

- # Adding functionality to add server caches with a Node-cache module
- const myEndPoint = req.originalUrl;
  console.log(req.path);

  if (cache.has(myEndPoint)) {
  console.log('served from cache');
  return res.sendFile(
  path.resolve(path.join('./', `/thumb/${fileName}.jpg`))
  );
  } else {
  console.log('served from Api');
  sharp(path.resolve(path.join('./', `/images/${fileName}.jpg`)))
  .resize(+width as unknown as number, +height as unknown as number)
  .toFile(`./thumb/${fileName}.jpg`)
  .then(() => {
  cache.set(
  myEndPoint,
  path.resolve(path.join('./', `/thumb/${fileName}.jpg`))
  );
  return res.sendFile(
  path.resolve(path.join('./', `/thumb/${fileName}.jpg`))
  );
  });
  }

=============================================
