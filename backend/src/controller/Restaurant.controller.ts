import { Request, Response } from "express";
import db from "../db"
import { reqObject } from "../allTypes";

export class RestaurantController {
    constructor() {}

    async getAllRestaurant(req: Request, res: Response) {
        try {
            const db_result = await db.query("SELECT * FROM restaurants;")
            console.log(db_result.rows);
            
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

    async getOneRestaurant(req: Request, res: Response) {
        try {
            const db_result = await db.query(`SELECT * FROM restaurants WHERE id = $1;`, [req.params.id])
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

    async createRestaurant(req: Request, res: Response) {
        try {
            const {name, location, price_range}: reqObject = req.body

            if (!name && !location && !price_range) {
                throw new Error("Please provide all the required fields")
            }

            const db_result = await db.query(
                `
                    INSERT INTO restaurants (name, location, price_range) 
                    VALUES ($1, $2, $3);
                `,
                [name, location, price_range]
            )
            console.log(db_result);

            res.status(200).json({
                status: "success",
                results: db_result.rowCount,
            })
        } catch(err) {
            console.log("getallrestaurants error : ",err);
            
            res.status(500).json({
                status: "fail",
                data: "Internal server error"
            })
        }
    }

    async updateRestaurant(req: Request, res: Response) {
        try {
            const {name, location, price_range}: reqObject = req.body

            if (!name && !location && !price_range) {
                throw new Error("Please provide all the required fields")
            }

            const db_result = await db.query(
                `
                    UPDATE restaurants
                    SET name = $1, location = $2, price_range = $3
                    WHERE id = $4;
                `,
                [name, location, price_range, req.params.id]
            )
            console.log(db_result);

            res.status(200).json({
                status: "success",
                results: db_result.rowCount,
            })
        } catch(err) {
            console.log("getallrestaurants error : ",err);
            
            res.status(500).json({
                status: "fail",
                data: "Internal server error"
            })
        }
    }

    async deleteRestaurant(req: Request, res: Response) {
        try {
            const db_result = await db.query(
                `
                    DELETE FROM restaurants WHERE id = $1;
                `,
                [req.params.id]
            )
            console.log(db_result);

            res.status(200).json({
                status: "success",
                results: db_result.rowCount,
            })
        } catch(err) {
            console.log("getallrestaurants error : ",err);
            
            res.status(500).json({
                status: "fail",
                data: "Internal server error"
            })
        }
    }
}