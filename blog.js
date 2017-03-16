const low = require('lowdb');

const db = low('./db.json');


db.defaults({ blog: [] }).write()

const NewBlog = {};

NewBlog.getItems = () =>  {
  return db.get('blog').value()
}



NewBlog.createItem = (itemToCreate) => {
	db.get('blog').push({
		id: Date.now(),
		data: itemToCreate,
	}).write();
}


NewBlog.updateItem = (id, key, propertyToUpdate) => {
	db.get('blog')
		  .find({ id })
		  .set(key, propertyToUpdate)
		  .write()
}


NewBlog.deleteItem = (id) => {
	db.get('blog')
		.remove({id})
		.write();
}

module.exports = NewBlog;
