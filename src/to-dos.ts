import express, { Router, Request, Response} from "express";
import dotenv from "dotenv";
import {
    addToDo, 
    getAToDo, 
    getAllToDo, 
    returnItemId, 
    updateToDo, 
    deleteToDo
} from './functions'
dotenv.config();

export const router = Router();

router.post('/create', async(req: Request, res: Response) => {
    if (req.body.item) {
        try {
            await addToDo(req.body.item);
            const itemId = await returnItemId();
        } catch (error) {
            res.send({errno: 101, message : error.message})
        }
    }
})