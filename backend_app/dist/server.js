"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3500;
app.use((0, cors_1.default)({
    origin: "http://localhost:3000"
}));
app.get("/", (req, res) => {
    res.send("Hello, World!");
    // res.json({"users": ['one', 'two', 'three', 'four']});
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
