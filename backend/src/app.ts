import cors from 'cors'
import express from "express";
import fileUpload from "express-fileupload";
import swaggerSpec from "./resources/swagger/swagger";
import swaggerUi from 'swagger-ui-express';
import {HandlerError} from "./utils/error/handlerError";
import {PaginateMiddleware} from "./resources/middlewares/paginate.middleware";
import UserRouter from "./app/users/router/users.router";
import BoardRouter from "./app/board/router/board.router";
import ListRouter from "./app/list/router/list.router";
import CardRouter from "./app/card/router/card.router";

export const app = express();

app.use(express.json());
app.use(PaginateMiddleware());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}))
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/user',UserRouter)
app.use('/board', BoardRouter)
app.use('/list', ListRouter)
app.use('/card', CardRouter)

app.use(HandlerError)


