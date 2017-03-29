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
    } //GET

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
    } //PUT

    function render(blogItems) {
        const container = document.querySelector('.js-AllPost');
        container.innerHTML = `<div class="jumbotron"><h2 class="ui header text"></h2>
      	<div class="ui tall stacked segment">
      	<p class="text post-body"></p>
      	<div class="ui segment">
      	<div class="ui active inverted dimmer">
      	<div class="ui large text loader">Loading</div>
      	</div>
      	<p style ="font-family: cursive;" >A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.</p>
      	<em><br style = "text-align:right;"> -Douglas Adams’ The Hitchhiker’s Guide to The Galaxy</br></em>
      	</div>
      </div>
      </div>`

        for (const blogItem of blogItems) {
          console.log(blogItem)
          const div = document.createElement('div')
          div.innerHTML = `<h2 class="ui header text">${blogItem.data.title}</h2>
          <div class="ui tall stacked segment">
          <p class="text post-body">
            ${blogItem.data.blog}
          </p>
          </div>
          <p><a class="btn btn-primary btn-lg" href="#" role="button">Read more</a></p>
          `;
          div.classList.add('jumbotron')

          container.appendChild(div)
        }
    } // render



    const createBtn = document.querySelector('.js-create')
    createBtn.addEventListener('click',(e) => {
      console.log(e)
      $('.ui.fullscreen.modal')
      .modal('toggle')
      ;
    })
    // createBtn.addEventListener('click', (e) => {
    //     POST('/api/post', {
    //         post: input.value,
    //         when: new Date().getTime() + 9 * 60 * 60 * 1000
    //     }).then((data) => {
    //         input.removeAttribute('disabled');
    //         input.value = '';
            // render(data);
    //     });
    // })





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


    GET('api/post')
        .then((blogItems) => {
            render(blogItems)
            // console.log(blogItems)
            // console.log('IN GET')
        });

})();
