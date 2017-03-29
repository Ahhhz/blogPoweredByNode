const express = require('express');

const router = express.Router();

const parser = require('body-parser');

const Posts = require('./post')

router.use(parser.json());


router.get('/post',(request , response ,next) => {
      next();
 });



router.post('/post',(request , response ,next) => {

  const requestBody = request.body;

  Posts.createItem(requestBody)

    next();
});


router.put('/post/:id',(request , response ,next) => {
  const id = parseInt(request.params.id, 10);
	const dataPayload = request.body;
  Object.keys(dataPayload).forEach((key) => {
  		Posts.updateItem(id, 'data.' + key, dataPayload[key]);
  	})
  next();
});

router.delete('/post/:id',(request , response ,next) => {

    const id = parseInt(request.params.id, 10);

  	Posts.deleteItem(id);

  	next();
})





router.use((request , response) => {
  response.header('Content-Type', 'application/json');
  response.send(Posts.getItems());
});

module.exports = router;
