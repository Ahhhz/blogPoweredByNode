// function render(blogPosts) {
//     // const sortedData = todoItems.sortby(['id'])
//     const container = document.querySelector('.js-todolist');
//     container.innerHTML = '';
//     const blogItemsReverse = blogItems.reverse();
//     // for (const todoItem of sortedData) {
//     for (const blogPost of blogPosts) {
//         const div = document.createElement('div');
//         div.innerHTML = `
//        <article class="container box style1 right todoinput">
//          <img class="image fit"src="images/${blogPost.data.image}" alt="" />
//          <div class="inner">
//            <header>
//              <h2><a href="#/post/${blogPost.id}">${blogPost.data.title}</a></h2>
//            </header>
//            <p>${blogPost.data.todo}</p>
//          </div>
//        </article>
//        `;
//         container.appendChild(div);
//     };
// }; // End of render on page load
//
//
//
// const routes = {
//     '/home': () => {
//         //Initializer on page load
//         GET('/api/blog')
//             .then((blogPost) => {
//                 render(todoItems);
//             });
//     },
//     '/post/:postId': (postId) => {
//         //Initializer on page load
//         GET('/api/blogPost/' + postId)
//             .then((blogPost) => {
//                 //  console.log(todoItems)
//                 renderOnePost(blogPost);
//             });
//     }
// };
//
// function renderOnePost(blogPosts) {
//     // const sortedData = todoItems.sortby(['id'])
//     const mainContainer = document.querySelector('.js-to-hide');
//     mainContainer.style.display = "none";
//
//
//     const postContainer = document.querySelector('.js-one-post');
//     postContainer.style.display = "block";
//
//     postContainer.innerHTML = '';
//     // const todoItemsReverse = todoItems.reverse();
//     // for (const todoItem of sortedData) {
//     for (const blogPost of blogPosts) {
//         // const div = document.createElement('div');
//         postContainer.innerHTML = `
//                <a href="../index.html">Back to home</a>
//                    <header>
//                        <h2>${blogPost.data.title}</h2>
//                        <p>${blogPost.data.todo}</p>
//                    </header>
//                    <section>
//                        <hr />
//                        <header>
//                            <p>${blogPost.data.when}</p>
//                        </header>
//                    </section>
//                      `;
//         // container.appendChild(div);
//     };
// }; // End of render on page load
//
//
//
//
// const router = Router(routes);
//
// router.init();
// router.setRoute('/home')
//
//








  // function render (blogPosts) {
  //   const container = document.querySelector('.js-blog');
  //   container.innerHTML = '';
  //   for (const blogPost of blogPosts) {
  //     const div = document.createElement('div');
  //     div.innerHTML = `
  //     ${blogPost.data.blog}
  //     `;
  //
  //
  //   }
  //   innerHTML = `
  //
  //
  //   `
  //
  // }
  //
  // render()



  //
  // const low = require('lowdb');
  //
  // const db = low('./db.json');
  //
  //
  // db.defaults({ blogs: [] }).write()
  //
  // const NewBlog = {};
  //
  // NewBlog.getItems = () =>  {
  //   return db.get('blogs').value()
  // }
  //
  //
  //
  // NewBlog.createItem = (itemToCreate) => {
  // 	db.get('blogs').push({
  // 		id: Date.now(),
  // 		data: itemToCreate,
  // 	}).write();
  // }
  //
  //
  // NewBlog.updateItem = (id, key, propertyToUpdate) => {
  // 	db.get('blogs')
  // 		  .find({ id })
  // 		  .set(key, propertyToUpdate)
  // 		  .write()
  // }
  //
  //
  // NewBlog.deleteItem = (id) => {
  // 	db.get('blogs')
  // 		.remove({id})
  // 		.write();
  // }
  //
  // module.exports = NewBlog;





  //           const div = document.createElement('div');
  //           div.innerHTML = `
  //  <h2 class="ui header text">${blogItem.data.title}</h2>
  //  <div class="ui tall stacked segment">
  //    <p class = "text post-body">${blogItem.data.blog}</p>
  //    </div>
  //       	`;
   //
  //           // if (Posts.data.isDone) {
  //           //     div.innerHTML += `<span class="glyphicon glyphicon-check todolist-icon js-todo-check"></span>`
  //           // } else {
  //           //     div.innerHTML += `<span class="glyphicon glyphicon-unchecked todolist-icon js-todo-check"></span>`
  //           // }
   //
   //
  //           div.classList.add('jumbotron', 'js-blogList');
   //
  //           container.appendChild(div);
   //
  //           li.querySelector('.js-todo-check').addEventListener('click', (e) => {
  //               console.log(blogItem);
  //               let isDone;
  //               if (blogItem.data.isDone) {
  //                   isDone = false;
  //               } else {
  //                   isDone = true;
  //               }






  // `<div class="jumbotron"><h2 class="ui header text"></h2>
  // <div class="ui tall stacked segment">
  // <p class="text post-body"></p>
  // <div class="ui segment">
  // <div class="ui active inverted dimmer">
  // <div class="ui large text loader">Loading</div>
  // </div>
  // <p style ="font-family: cursive;" >A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.</p>
  // <em><br style = "text-align:right;"> -Douglas Adams’ The Hitchhiker’s Guide to The Galaxy</br></em>
  // </div>
  // </div>
  // </div>`
