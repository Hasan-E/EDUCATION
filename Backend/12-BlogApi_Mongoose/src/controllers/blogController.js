'use strict';

/* ============================================ */
/*    EXPRESSJS - BLOG PROJECT WITH MONGOOSE    */
/* ============================================ */

const {BlogCategory} = require('../models/blogModel')

module.exports = {
    list : async (req,res)=>{

        const result = await  BlogCategory.find()

        res.status(200).send({
            error:false,
            result
        })
    }

    //CRUD Operations
}