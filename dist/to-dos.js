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
            const item = (yield (0, functions_1.getAToDo)(itemId))[0];
            res.status(201).send({
                message: "New item added",
                item
            });
        }
        catch (error) {
            res.send({ errno: 101, error });
        }
        ;
    }
    else {
        res.status(500).send({
            error: "104",
            message: "Enter item property correctly."
        });
    }
    ;
}));
exports.router.get('/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.id) {
        try {
            const result = yield (0, functions_1.getAToDo)(req.body.id);
            if (result.length == 1) {
                res.status(200).send({ Item: result[0] });
            }
            else {
                res.status(401).send({
                    error: "106",
                    message: "Item id does not exist."
                });
            }
            ;
        }
        catch (error) {
            res.send({ errno: 102, message: error });
        }
        ;
    }
    else {
        res.status(500).send({
            error: "109",
            message: "Enter to-do id."
        });
    }
    ;
}));
exports.router.get('/get_all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, functions_1.getAllToDo)();
        if (result.length >= 1) {
            res.status(200).send({ "To-do items": result });
        }
        else {
            res.status(401).send({ message: "You have no to-do yet." });
        }
        ;
    }
    catch (error) {
        res.send({ errno: 103, message: error });
    }
    ;
}));
exports.router.patch('/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.id && req.body.item) {
        try {
            yield (0, functions_1.updateToDo)(req.body.id, req.body.item);
            const updatedItem = yield (0, functions_1.getAToDo)(req.body.id);
            if (updatedItem.length == 1) {
                res.status(201).send({
                    message: "Item updated!",
                    Item: updatedItem[0]
                });
            }
            else {
                res.status(401).send({
                    message: "Item does not exist!"
                });
            }
            ;
        }
        catch (error) {
            res.send({ errno: 104, message: error });
        }
        ;
    }
    else {
        res.status(500).send({
            error: "109",
            message: "All properties must be entered correctly."
        });
    }
    ;
}));
exports.router.delete('/delete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.id) {
        try {
            const new_item = yield (0, functions_1.getAToDo)(req.body.id);
            if (new_item.length == 1) {
                yield (0, functions_1.deleteToDo)(req.body.id);
                res.status(200).send({ message: "An item has been deleted." });
            }
            else {
                res.status(401).send({
                    message: "Item does not exist!"
                });
            }
        }
        catch (error) {
            res.send({ errno: 105, message: error });
        }
    }
    else {
        res.status(500).send({
            error: "104",
            message: "Enter id correctly."
        });
    }
}));
