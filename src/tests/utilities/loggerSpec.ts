import express from 'express';

describe('with user inputs', () => {
  it('expect myMiddleware to validate the request', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function myMiddleware(
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) {
      const contentHeader = req.get('content-type');
      if (!contentHeader) {
        expect(res.send('Request failed'));
      } else {
        if (contentHeader.toLowerCase() !== 'application/json') {
          expect(res.send(' content type not application/json '));
        } else {
          next();
        }
      }
    }
  });
});
