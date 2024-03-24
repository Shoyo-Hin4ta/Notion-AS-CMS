import { Router } from "express";
import { getStatus, getAllPagesInDB } from "../controller/notiondb.controller.js";
import { getPageContent, getPageProperties } from "../controller/notionpage.controller.js";


const router = Router();


router
    .route('/database')
    .get(getStatus)

//gives page content 
router
    .route('/page/:id')
    .get(getPageContent)

//get All the pages inside status properties, and img links too
router
    .route('/getpages/:type')
    .get(getAllPagesInDB)

router
    .route('/getpageproperty/:id')
    .get(getPageProperties)



export default router;