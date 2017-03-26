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
