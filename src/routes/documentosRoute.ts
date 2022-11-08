import {Router}from 'express';

import { documentosController } from "../controllers/documentoscontroller";


class DocumentosRoute{
    public router:Router=Router();

    constructor(){
         this.onConfig(); 
    }
    onConfig():void{ 
         this.router.get('/articulos',documentosController.getarticles); 
    }
}
const documentosRoute = new DocumentosRoute();
export default documentosRoute.router