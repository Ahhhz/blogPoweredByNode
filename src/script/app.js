(function() {

    function GET(url) {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', url)
            request.onload = () => {
                const data = JSON.parse(request.responseText);
                resolve(data)
            };
            request.onerror = (err) => {
                reject(err)
            };
            request.send();
        });
    }

    function POST(url, data) {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('POST', url);
            request.setRequestHeader('Content-Type', 'application/json');

            request.onload = () => {
                const data = JSON.parse(request.responseText);
                resolve(data)
            };
            request.onerror = (err) => {
                reject(err)
            };

            request.send(JSON.stringify(data));
        });
    } // POST

    function PUT(url, data) {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('PUT', url);
            request.setRequestHeader('Content-Type', 'application/json');

            request.onload = () => {
                const data = JSON.parse(request.responseText);
                resolve(data)
            };
            request.onerror = (err) => {
                reject(err)
            };

            request.send(JSON.stringify(data));
        });
    }

    function render(blogItems) {
        const container = document.querySelector('.js-blogList');
        container.innerHTML = '';
  //       for(const blogItem of blogItems){
  //           const div = document.createElement('div');
  //           div.innerHTML = `
  //  <h2 class="ui header text">${blogItem.data.title}</h2>
  //  <div class="ui tall stacked segment">
  //    <p class = "text post-body">${blogItem.data.blog}</p>
  //    </div>
  //       	`;
   //
  //           if (Posts.data.isDone) {
  //               div.innerHTML += `<span class="glyphicon glyphicon-check todolist-icon js-todo-check"></span>`
  //           } else {
  //               div.innerHTML += `<span class="glyphicon glyphicon-unchecked todolist-icon js-todo-check"></span>`
  //           }
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
   //
  //               PUT('/api/post/' + blogItem.id, {
  //                       isDone
  //                   })
  //                   .then((data) => {
  //                       render(data);
  //                   })
  //                   .catch((e) => {
  //                       alert(e)
  //                   })
  //           })
   //
  //       }
   //
  //       if (blogItem.length === 0) {
  //           container.innerHTML = `
  //           <div class="ui loading form"></div>`;
  //       }
  //   } // render


    GET('/api/post')
        .then((blogItems) => {
            render(blogItems);
        });

    // document.querySelector('.js-add-todo').addEventListener('click', (e) => {
    //     const input = document.querySelector('.js-todo-text');
    //     input.setAttribute('disabled', 'disabled');
    //     POST('/api/post', {
    //         post: input.value,
    //         when: new Date().getTime() + 9 * 60 * 60 * 1000
    //     }).then((data) => {
    //         input.removeAttribute('disabled');
    //         input.value = '';
    //         render(data);
    //     });
    // })





    // function render (blogPosts) {
    //   const container = document.querySelector('.js-blog');
    //   // container.innerHTML = '';
    //   for (const blogPost of blogPosts) {
    //     const div = document.createElement('div');
    //     div.innerHTML = `
    //     ${blogPost.data.blog}
    //     `;
    //
    //
    //   }
    //   innerHTML = `
    //   //
    //   //
    //   // `
    //
    // }

    render()

    GET('api/blogs')
      .then((Post)=>{
        render(Post)
        console.log('IN GET')
      });

const create = document.querySelector('.js-create')
  create.addEventListener('click',(e)=>{
    $('.ui.basic.modal')
  .modal('show')
;
  })
})();
