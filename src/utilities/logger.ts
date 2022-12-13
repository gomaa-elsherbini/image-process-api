import express from 'express';
import { existsSync } from 'fs';
import path from 'path';


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
    return res.send('invalid image name !!');
  }
  if (
    width <= 0 ||
    width === null ||
    Number.isInteger(width) === false
    ) {
    return res.send('invalid width input !!');
  }
  if (
    height <= 0 ||
    height ===  null||
    Number.isInteger(height) === false
    ) {
    return res.send('invalid height input !!');
  }
  next();
};
export default myMiddleware;

