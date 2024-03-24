import express from "express";
import cors from "cors";

export const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials :true,
}))


app.use(express.json({
    limit : "16kb",
}));
app.use(express.urlencoded(
    {
        extended : true,
        limit : "16kb"
    }
));


import notionRouter from "./routes/notion.routes.js"
app.get('/', (req, res) => {
    return res.send("Server up");
});

app.use('/api/notion', notionRouter);

