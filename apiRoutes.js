const express = require('express');

const router = express.Router();

const parser = require('body-parser');

const blogs = require('./blog')

router.use(parser.json());

router.get('/blogs',(req,res,next)=>{
  console.log('IN GET')
      next();
  });



router.post('/blogs',(req,res,next)=>{
  const requestBody = request.body;

  NewBlog.createItem(requestBody)
    next();
});

router.put('/blog:id',(req,res,next)=>{
  const id = parseInt(request.params.id, 10);
	const dataPayload = request.body;


  NewBlog.updateItem(id, 'data.isDone', dataPayload.isDone);

  next();

});

router.delete('/blog:id',(req,res,next)=>{

    const id = parseInt(request.params.id, 10);

  	NewBlog.deleteItem(id);

  	next();
})





router.use((request, response) => {
  response.header('Content-Type', 'application/json');
  response.send(blogs.getItems());
});
module.exports = router;
