import express from 'express';
import path from 'path';
import sharp from 'sharp';
import { existsSync, promises as fsPromises } from 'fs';
import app from '..';
import images from '../routes/api/images';
import { METHODS } from 'http';
import { execFileSync } from 'child_process';
import { Session } from 'inspector';
import { fileURLToPath, pathToFileURL } from 'url';
// import NodeCache from 'node-cache';

// const myCache = new NodeCache();

const imageProcessing = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const fileName = req.query.filename as unknown as string;
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  fsPromises.mkdir('./thumb', { recursive: true });

  const thumbPath = path.resolve(path.join('./', `/thumb/${fileName}.jpg`));
  const imagesPath = path.resolve(path.join('./', `/images/${fileName}.jpg`));
  const newThumbPath = path.resolve(path.join('./', `/thumb/${fileName}.jpg`));
  // let result;
  // if (existsSync(thumbPath)) {
  //   console.log('served form cache');
  //   return res.sendFile(thumbPath);
  // } else {
    try {
      const result = await sharp(imagesPath)
        .resize(width, height)
        // .toFile(thumbPath)
        console.log(result.allowHalfOpen.valueOf())
        // .then(() => {
          // arr.push(path.resolve(thumbPath));
          console.log('served form server');
          return res.sendFile(thumbPath);
        // });
    } catch (error) {
      res.sendStatus(400).send(error);
    }
  // }
  // }
  // console.log(arr)
  // if (wArr.includes(qrReq) === false) {
  //   wArr.push(qrReq);
  //   try {
  //     await sharp(imagesPath)
  //       .resize(width, height)
  //       .toFile(thumbPath)
  //       .then(() => {
  //         console.log('served form server');
  //         return res.sendFile(thumbPath);
  //       });
  //   } catch (error) {
  //     res.sendStatus(400).send(error);
  //   }
  // } else {
  //   console.log('from cache');
  //   return res.sendFile(thumbPath);
  // }

  // console.log(wArr);
  // console.log(res === req.originalUrl);

  // if (myCache.has(myEndPoint)) {
  //   console.log('from cache');
  //   return res.sendFile(thumbPath);
  // } else {
  //   try {
  //     await sharp(imagesPath)
  //       .resize(width, height)
  //       .toFile(thumbPath)
  //       .then(() => {
  //         myCache.set(myEndPoint, thumbPath);
  //         console.log('from server');
  //         return res.sendFile(thumbPath);
  //       });
  //   } catch (error) {
  //     res.sendStatus(400).send(error);
  //   }
  // }
  next();
};
export default imageProcessing;
