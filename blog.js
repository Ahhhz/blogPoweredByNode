const low = require('lowdb');
const db = low('./db.json');
db.defaults({ blog: [] }).write()

const newBlog = {};

// newBlog.getItems()=>{
//   return db.get('blog').value()
// }

// newBlog.updateItem()=>{
//
// }


module.exports = newBlog;
