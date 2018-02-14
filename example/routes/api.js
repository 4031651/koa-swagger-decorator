import Router from 'koa-router';

import SampleRouter from './sample';
import UserRouter from './user';

import { wrapper } from '../../lib';

const router = new Router();

wrapper(router);

// swagger docs avaliable at http://localhost:3000/api/swagger-html
router.swagger({

  title: 'Example Server',
  description: 'API DOC',
  version: '1.0.0',

  // [optional] default is root path.
  prefix: '/api',

  // [optional] default is /swagger-html
  swaggerHtmlEndpoint: '/swagger-html',

  // [optional] default is /swagger-json
  swaggerJsonEndpoint: '/swagger-json',

  // [optional] additional options for building swagger doc
  // eg. add api_key as shown below
  swaggerOptions: {
    securityDefinitions: {
      api_key: {
        type: 'apiKey',
        in: 'header',
        name: 'api_key'
      }
    },
  }
});

router.map(SampleRouter);
router.map(UserRouter);

export default router;