import { Router, Request, Response, request, response } from "express";
//Models
import { Socie } from "../models/socie.model";
import { Curso } from "../models/curso.model";
// Data
import { socies } from "../data/socies.data";
import { cursos } from "../data/curso.data";
import { docentes } from "../data/docente.data";
import { Docente } from "../models/docente.model";

export const router = Router();


router.get('/socies', (req: Request, res: Response) => {
    let socie_resp: Array <{nombre: string, apellido: string, nick:string, edad:number}> = [];
    let current_year = new Date().getFullYear();
    socies.forEach( socie => {

        let edad = current_year - socie.nacimiento;
        socie_resp.push({
            nombre: socie.nombre,
            apellido: socie.apellido,
            nick: socie.nick,
            edad: edad
        }
        )
    });

    res.json({
        ok: true,
        socies: socie_resp
    });     
});      

router.get('/cursos', (req: Request, res: Response) => {
    res.json({
        ok:true,
        cursos: cursos
    });
});

router.get('/docentes', (req: Request, res: Response) => {
    res.json({
        ok:true,
        docentes: docentes
    });
});  

router.get('/socie/:nick', (req: Request, res: Response) => {
    let ficha:Socie= {nombre: "", apellido: "", nick:"", nacimiento:0};
    let flag:boolean=false;

    socies.forEach(socie => {
        if (socie.nick === req.params.nick){
            ficha = socie;
            flag=true;
        }
    });
    res.json({
        ok: flag,
        socie: ficha
    });
});

router.get('/docente/:nick', (req: Request, res: Response) => {
    let ficha:Docente= {nombre: "", apellido: "", nick:""};
    let flag:boolean=false;

    docentes.forEach(docente => {
        if (docente.nick === req.params.nick){
            ficha = docente;
            flag=true;
        }
    });
    res.json({
        ok: flag,
        docente: ficha
    });
});

router.get('/rickandmorty', (req:Request, res:Response) => {

})