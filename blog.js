const low = require('lowdb');

const db = low('./db.json');


db.defaults({ blogs: [] }).write()

const NewBlog = {};

NewBlog.getItems = () =>  {
  return db.get('blogs').value()
}



NewBlog.createItem = (itemToCreate) => {
	db.get('blogs').push({
		id: Date.now(),
		data: itemToCreate,
	}).write();
}


NewBlog.updateItem = (id, key, propertyToUpdate) => {
	db.get('blogs')
		  .find({ id })
		  .set(key, propertyToUpdate)
		  .write()
}


NewBlog.deleteItem = (id) => {
	db.get('blogs')
		.remove({id})
		.write();
}

module.exports = NewBlog;
