import { Request, Response } from "express";

export class RestaurantController {
    constructor() {}

    getAllRestaurant(req: Request, res: Response) {
        res.send("all restaurant")
    }

    getOneRestaurant(req: Request, res: Response) {
        res.send("one restaurant")
    }

    createRestaurant(req: Request, res: Response) {
        res.send("create restaurant")
    }

    updateRestaurant(req: Request, res: Response) {
        res.send("update restaurant")
    }

    deleteRestaurant(req: Request, res: Response) {
        res.send("delete restaurant")
    }
}