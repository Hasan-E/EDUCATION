"use strict";
/* ============================================ */
/*    EXPRESSJS - BLOG PROJECT WITH MONGOOSE    */
/* ============================================ */

const { BlogCategory } = require("../models/blogModel");

module.exports = {
  list: async (req, res) => {
    const result = await BlogCategory.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  // CRUD Operations

  create: async (req, res) => {
    const result = await BlogCategory.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    // const result = await BlogCategory.findOne({...filter});
    // const result = await BlogCategory.findOne({_id:req.params.id});
    const result = await BlogCategory.findById(req.params.id);

    res.status(200).send({
      error: false,
      result,
    });
  },

  update : async (req,res)=>{

    // const result = await BlogCategory.updateOne({...filter},{...data})
    const result = await BlogCategory.updateOne({_id:req.params.id},req.body)

    res.status(200).send({
        error:false,
        result
    })
  },

  delete: async (req,res) => {

    const result = await BlogCategory.deleteOne({_id:req.params.id})

    res.status(200).send({
        error:false,
        result
    })
  }
};
