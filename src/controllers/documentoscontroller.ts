import { Request,Response } from "express"; 
const {Pool } =require('pg')

const config={
    user:'reebapiffnhibp',
    host:'ec2-18-215-41-121.compute-1.amazonaws.com',
    password:'ca78ff4669b83ecd30c32d7bcba1b493216e033058d39190f14bf3adf81ae125',
    database:'d965m8i3faog71',
    ssl: {
        rejectUnauthorized: false
      },
    port:'5432'
}

const pool=new Pool(config)

class DocumentosController{

    
   async getarticles(req:Request,res:Response):Promise<any>{
    const resp =await pool.query(
        `SELECT 
        *
        FROM 
          public."ARTICULOS" ;`
    )
    res.json(resp)
}

   
} export const documentosController=new DocumentosController();