const express = require('express');

const router = express.Router();

const parser = require('body-parser');

const blog = require('./blog')

router.use(parser.json());

router.get('/blog',(req,res,next)=>{
      next();
  });



router.post('/blog',(req,res,next)=>{
  const requestBody = request.body;

  newBlog.createItem(requestBody)
    next();
});

router.put('/blog:id',(req,res,next)=>{
  const id = parseInt(request.params.id, 10);
	const dataPayload = request.body;


  newBlog.updateItem(id, 'data.isDone', dataPayload.isDone);

  next();

});

router.delete('/blog:id',(req,res,next)=>{

  const id = request.params.id;

  	newBlog.deleteItem(id);

  	next();
})





router.use((request, response) => {
  response.header('Content-Type', 'application/json');
  response.send(blog.getItems());
});
module.exports = router;
