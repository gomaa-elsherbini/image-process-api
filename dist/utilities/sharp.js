"use strict";
// import express from 'express';
// import path from 'path';
// import sharp from 'sharp';
// import validateInputs from '';
// const images = express.Router();
// images.get('/images', (req: express.Request, res: express.Response): void => {
//   const fileName = req.query.filename as string;
//   const width = Number(req.query.width);
//   const height = Number(req.query.height);
//   console.log(req.body);
//   const orignalImagePath = path.resolve(
//     path.join('./', `/images/${fileName}.jpg`)
//   );
//   const processedImagePath = path.resolve(
//     path.join('./', `/thumb/${fileName}.jpg`)
//   );
//   const processing = async function () {
//     try {
//       sharp(orignalImagePath)
//         .resize(width, height)
//         .toFile(`./thumb/${fileName}.jpg`)
//         .then(() => {
//           res.sendFile(processedImagePath);
//         });
//     } catch (error) {
//       return res.status(500).send(error);
//     }
//   };
//   processing();
// });
// export default images;
