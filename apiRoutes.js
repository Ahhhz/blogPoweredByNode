const express = require('express');

const router = express.Router();

const parser = require('body-parser');

const Posts = require('./post')

router.use(parser.json());

router.get('/post',(req,res,next)=>{
  // Posts.getItems();
      next();
  });



router.post('/post',(req,res,next)=>{
  const requestBody = request.body;

  Posts.createItem(requestBody)

    next();
});

router.put('/post/:id',(req,res,next)=>{
  const title = blogItem.data.title;
	const blog = blogItem.data.blog;

  const id = parseInt(request.params.id, 10);
	// const dataPayload = request.body;


  Posts.updateItem(id, title, blog);

  next();

});

router.delete('/post/:id',(req,res,next)=>{

    const id = parseInt(request.params.id, 10);

  	Posts.deleteItem(id);

  	next();
})





router.use((req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(Posts.getItems());
});

module.exports = router;
