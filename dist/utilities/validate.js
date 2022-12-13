"use strict";
// import express from 'express';
// const sourceImagse: string[] = [
//   'encenadaport',
//   'fjord',
//   'icelandwaterfall',
//   'palmtunnel',
//   'santamonica',
// ];
// const myMiddleware = (
//   req: express.Request,
//   res: express.Response,
//   next: express.NextFunction
// ) => {
//   const imageName = req.query.filename as string;
//   const width = req.query.width;
//   const height = req.query.height;
//   if (
//     sourceImagse.includes(imageName) === false ||
//     imageName === '' ||
//     typeof imageName === 'number'
//   ) {
//     return res.status(400).send('invalid image name !!');
//   }
//   if (
//     width === '0' ||
//     width === '' ||
//     parseInt(width as unknown as string) <= 0
//   ) {
//     return res.status(400).send('invalid width input !!');
//   }
//   if (
//     height === '' ||
//     height === '0' ||
//     parseInt(height as unknown as string) <= 0
//   ) {
//     return res.status(400).send('invalid height input !!');
//   }
//   next();
// };
// export default myMiddleware;
