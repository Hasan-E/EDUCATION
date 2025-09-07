"use strict";
/* ============================================ */
/*    EXPRESSJS - BLOG PROJECT WITH MONGOOSE    */
/* ============================================ */

const { BlogCategory, BlogPost } = require("../models/blogModel");

//! --------- BLOG CATEDORY CONTROLLER --------- */
module.exports.blogCategory = {
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

  update: async (req, res) => {
    // const result = await BlogCategory.updateOne({...filter},{...data})
    // const result = await BlogCategory.updateOne({ _id: req.params.id },req.body);

    //* response from updateOne : {
    // "acknowledged": true, // if update methods ends successfuly.
    // "modifiedCount": 1, // if returns 0 : no any data updated cause data is already up to date.
    // "upsertedId": null, //  No new document was inserted. Combination of update and insert.
    // "upsertedCount": 0, // Since nothing was inserted, no new ID.
    // "matchedCount": 1 // number of data matches with our filter.
    // }

    // const result = await BlogCategory.findOneAndUpdate({ _id: req.params.id },req.body);
    const result = await BlogCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!result) {
      res.errorStatusCode = 404;
      throw new Error("Data is not found and not updated");
    }

    res.status(200).send({
      error: false,
      result,
      // new: await BlogCategory.findById(req.params.id),
    });
  },

  delete: async (req, res) => {
    const result = await BlogCategory.deleteOne({ _id: req.params.id });

    if (result.deletedCount) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Data is not found and or already deleted");
    }
  },
};

//! --------- BLOG POST CONTROLLER --------- */

//todo: BlogPost controller

module.exports.blogPost = {
  list: async (req, res) => {
    //? -- FILTERING SEARCHING SORTING PAGINATION -- */

    // Filter: kesin eşitlik arar
    // Search: kısmi eşitlik arar

    // nested query
    // filter[published]=false
    // sort[createdAt]=desc
    // search[title]=test
    // console.log(req.query);

    //* FILTERING
    //URL?filter[fieldName1]=Value1&filter[fieldName2]=value2
    const filter = req.query?.filter || {};

    //* SEARCHING
    //URL?search[fieldName1]=Value1&search[fieldName2]=value2
    // mongodb search
    // { <field>: { $regex: /pattern/, $options: '<options>' } }
    // { "<field>": { "$regex": "pattern", "$options": "<options>" } }
    // { "content": { "$regex": " 1 content", "$options": $options: 'i' } }
    // { <field>: { $regex: /pattern/<options> } }

    const search = req.query?.search || {};

    // console.log(search.content);
    // search.content = '2 content'
    // search['content'] = '3 content'
    // console.log(search['content']);

    for (let key in search) {
      search[key] = { $regex: search[key], $options: "i" };
    }

    //* SORTING
    //URL?sort[fieldName1]=Value1&sort[fieldName2]=value2

    const sort = req.query?.sort || {};

    // pg1 = 20 data -> skip=0 , limit=20
    // pg2 = 20 data -> skip=20 , limit=20
    // pg3 = 20 data -> skip=40 , limit=20
    //200 / limit & skip => 2. sf =>  (page - 1 )*limit=skip

    // limit = 10  skip= 10  -> 2.sayfayı ifade eder
    //* PAGINATION
    //URL?page=2
    let page = parseInt(req.query?.page);
    page = page > 0 ? page : 1;

    let limit = parseInt(req.query?.limit);
    limit = limit > 0 ? limit : 20;

    let skip = parseInt(req.query?.skip);
    limit = skip > 0 ? skip : (page - 1) * limit;

    const result = await BlogPost.find({ ...search, ...filter }).sort(sort);

    // const result = await BlogPost.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  // CRUD Operations

  create: async (req, res) => {
    // const userId = req.session._id;

    //* before userControl middleware
    // if (!userId) {
    //   throw new Error("You must login to create a post");
    // }

    // req.body.userId = req.session._id;

    //* after userControl middleware
    if (!req.user) {
      throw new Error("You must login to create a post");
    }

    req.body.userId = req.user?._id;

    const result = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    const result = await BlogPost.findById(req.params.id);

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    const result = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!result) {
      res.errorStatusCode = 404;
      throw new Error("Data is not found and not updated");
    }

    res.status(200).send({
      error: false,
      result,
    });
  },

  delete: async (req, res) => {
    const result = await BlogPost.deleteOne({ _id: req.params.id });

    if (result.deletedCount) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Data is not found and or already deleted");
    }
  },
};
