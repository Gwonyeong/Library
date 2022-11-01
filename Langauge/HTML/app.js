import express from "express";
const app = express();
app.use(express.json());

const port = 5000;
app.listen(port, () => {
    console.log("서버 열림");
});

app.get("/", (req, res, next) => {
    res.send("안녕하세요");
});

app.get("/calc", (req, res, next) => {
    console.log(req.query, "연결됨");
    const { first } = req.query;
    const { second } = req.query;

    res.send(first + second);
});
