"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var myMiddleware = function (req, res, next) {
    var imageName = req.query.filename;
    var width = Number(req.query.width);
    var height = Number(req.query.height);
    var imagePath = path_1.default.resolve(path_1.default.join('./', "/images/".concat(imageName, ".jpg")));
    if ((0, fs_1.existsSync)(imagePath) === false) {
        return res.send('invalid image name !!');
    }
    if (width <= 0 ||
        width === null ||
        Number.isInteger(width) === false) {
        return res.send('invalid width input !!');
    }
    if (height <= 0 ||
        height === null ||
        Number.isInteger(height) === false) {
        return res.send('invalid height input !!');
    }
    next();
};
exports.default = myMiddleware;
