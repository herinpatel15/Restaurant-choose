import { Request, Response } from "express";
import db from "../db"

export class RestaurantController {
    constructor() {}

    async getAllRestaurant(req: Request, res: Response) {
        try {
            const db_result = await db.query("SELECT * FROM restaurants;")
            console.log(db_result);
            
            res.status(200).json({
                status: "success",
                results: db_result.rowCount,
                data: db_result.rows
            })
        } catch(err) {
            console.log("getallrestaurants error : ",err);
            
            res.status(500).json({
                status: "fail",
                data: "Internal server error"
            })
        }
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