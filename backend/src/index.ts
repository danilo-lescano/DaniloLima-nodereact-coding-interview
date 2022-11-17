import 'reflect-metadata';
require('dotenv').config();

import {
    createExpressServer,
    RoutingControllersOptions,
} from 'routing-controllers';

const port = process.env.PORT || '3001';

const routingControllersOptions: RoutingControllersOptions = {
    routePrefix: '/v1',
    controllers: [`${__dirname}/controllers/*.controller.*`],
    validation: true,
    classTransformer: true,
    cors: true,
    defaultErrorHandler: true,
};

const app = createExpressServer(routingControllersOptions);

app.listen(port, () => {
    console.log(`[Coding Interview] Running at http://localhost:${port}`);
});

export default app;
