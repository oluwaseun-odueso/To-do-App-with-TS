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

type createTodo = {item: string}

router.post('/create', async(req: Request, res: Response) => {
    if (req.body.item) {
        try {
            await addToDo(req.body.item);
            const itemId = await returnItemId();
            const item = await getAToDo(itemId)
            res.status(201).send({
                message : "New item added", 
                item
            })
        } catch (error) {
            res.send({errno: 101, error})
        }
    }
    else {
        res.status(500).send({
            error:"104" ,
            message : "Enter item property correctly."
        })
    }
})
