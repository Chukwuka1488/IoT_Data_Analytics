"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
exports.app = app;
const port = process.env.NODE_ENV === "test" ? 4000 : 3500; // Use environment variable
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
