import express, { Router } from "express";

import {RestaurantController} from "../controller/Restaurant.controller"

const route: Router = express.Router()
const restaurantController = new RestaurantController()

route.get("/restaurants", restaurantController.getAllRestaurant)
route.get("/restaurants/:id", restaurantController.getOneRestaurant)
route.post("/restaurants", restaurantController.createRestaurant)
route.put("/restaurants/:id", restaurantController.updateRestaurant)
route.delete("/restaurants/:id", restaurantController.deleteRestaurant)


export default route