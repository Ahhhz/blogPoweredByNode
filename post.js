  const low = require('lowdb');

  const db = low('./db.json');


  db.defaults({ post: [] }).write()

  const Posts = {};

  Posts.getItems = () =>  {
    return db.get('post').value()
  }



  Posts.createItem = (itemToCreate) => {
  	db.get('post').push({
  		id: Date.now(),
  		data: itemToCreate,
  	}).write();
  }


  Posts.updateItem = (id, key, propertyToUpdate) => {
  const post =	db.get('post')
  		  .find({ id })
  		  post.set(key, propertyToUpdate)
  		  .write()
  }


  Posts.deleteItem = (id) => {
  	db.get('post')
  		.remove({id})
  		.write();
  }

  module.exports = Posts;
