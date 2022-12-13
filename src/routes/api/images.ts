import express from 'express';
import myMiddleware from '../../utilities/logger';
import imageProcessing from '../../utilities/imageProcessing';

const images = express.Router();

images.get(
  '/images',
  myMiddleware,
  imageProcessing,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (req: express.Request, res: express.Response): void => {
    console.log('image have been successfully resized');
  }
);

export default images;
