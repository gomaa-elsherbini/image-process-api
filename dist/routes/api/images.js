"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("../../utilities/logger"));
var imageProcessing_1 = __importDefault(require("../../utilities/imageProcessing"));
var images = express_1.default.Router();
images.get('/images', logger_1.default, imageProcessing_1.default, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function (req, res) {
    console.log('image have been successfully resized');
});
exports.default = images;
