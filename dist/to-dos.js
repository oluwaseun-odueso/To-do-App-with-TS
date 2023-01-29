"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
const functions_1 = require("./functions");
dotenv_1.default.config();
exports.router = (0, express_1.Router)();
exports.router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.item) {
        try {
            yield (0, functions_1.addToDo)(req.body.item);
            const itemId = yield (0, functions_1.returnItemId)();
            const item = yield (0, functions_1.getAToDo)(itemId);
            res.status(201).send({
                message: "New item added",
                item
            });
        }
        catch (error) {
            res.send({ errno: 101, error });
        }
    }
    else {
        res.status(500).send({
            error: "104",
            message: "Enter item property correctly."
        });
    }
}));
exports.router.get('/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.id) {
        try {
            const result = yield (0, functions_1.getAToDo)(req.body.id);
            console.log(result);
            if (result) {
                res.status(200).send({ Item: result });
            }
            if (result == undefined) {
                res.status(401).send({
                    error: "106",
                    message: "Item id does not exist."
                });
            }
            // else {
            // res.status(401).send({
            //     error:"106" ,
            //     message : "Item id does not exist."
            // })
            // }
        }
        catch (error) {
            res.send({ errno: 102, message: error });
        }
    }
    else {
        res.status(500).send({
            error: "109",
            message: "Enter item id property correctly."
        });
    }
}));
