import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { usersRoute } from './routers/user.routers';
import { handleErrors } from './error';
import { loginRouter } from './routers/login.routers';
import { categotyRouter } from './routers/categories.routers';
import { realEstateRouter } from './routers/realEstate.routers';

const app = express();
app.use(express.json());

app.use('/users', usersRoute);
app.use('/login', loginRouter);
app.use('/categories', categotyRouter);
app.use('/categories/:id/realEstate', realEstateRouter);
app.use('/realEstate', realEstateRouter);

app.use(handleErrors);

export default app;
