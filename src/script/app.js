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


    function DELETE(url, data) {
          return new Promise((resolve, reject) => {
              const request = new XMLHttpRequest();
              request.open('DELETE', url);
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
        const container = document.querySelector('.js-AllPost');
        container.innerHTML = ''

        for (const blogItem of blogItems) {
            // console.log(blogItem)
            const div = document.createElement('div')
            div.innerHTML = `<h2 class="ui header text">${blogItem.data.title}</h2>
          <div class="ui tall stacked segment">
          <h4><p style = "overflow:scroll; width:915px; height:300px;" class="text post-body">
            ${blogItem.data.blog}
          </p></h4>
          </div>`;

            if (blogItem.data.isDone) {
                div.innerHTML += `<span class="glyphicon glyphicon-check todolist-icon js-blog-select"></span>`
            } else {
                div.innerHTML += `<span class="glyphicon glyphicon-unchecked todolist-icon js-blog-select"></span>`
            }


            div.classList.add('jumbotron')

            container.appendChild(div)


            div.querySelector('.js-blog-select').addEventListener('click', (e) => {
                // console.log(blogItem);
                let isDone;
                if (blogItem.data.isDone) {
                    isDone = false;
                } else {
                    isDone = true;
                }

                PUT('/api/post/' + blogItem.id,{isDone})
                    .then((data) => {
                        render(data);
                    })
                    .catch((e) => {
                        alert(e)
                    })
            });

            const discard = document.querySelector('.js-delete')
            const {id} = blogItem;

            discard.addEventListener('click', (e) => {

                    DELETE('/api/post/' + blogItem.id).then((data) => {
                    console.log('delete complete')
                    render(data)
                  });
            });

            if (blogItems.length === 0) {
                container.innerHTML = `
            <div class="jumbotron"><h2 class="ui header text"></h2>
            <div class="ui tall stacked segment">
            <p class="text post-body"></p>
            <div class="ui segment">
            <div class="ui active inverted dimmer">
            <div class="ui large text loader">Loading</div>
            </div>
            <p style ="font-family:cursive";>A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.</p>
            <em><br style = "text-align:right;"> -Douglas Adams’ The Hitchhiker’s Guide to The Galaxy</br></em>
            </div>
            </div>
            </div>`;

            }
        } // render

    }

    const createBtn = document.querySelector('.js-create')
    createBtn.addEventListener('click', (e) => {
        $('.ui.fullscreen.modal')
            .modal('toggle')
    });

    const submit = document.querySelector('.js-submit')

    submit.addEventListener('click', (e) => {

        const input = document.querySelector('.js-title');
        const body = document.querySelector('.js-textArea')
        input.setAttribute('disabled', 'disabled');
        body.setAttribute('disabled', 'disabled');

        const time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

        POST('/api/post', {
            title: input.value,
            blog: body.value,
            when: time,
        }).then((data) => {
            input.removeAttribute('disabled');
            body.removeAttribute('disabled');
            input.value = '';
            body.value = '';
            window.location.href = '/';
        })

    });

    const discard = document.querySelector('.js-delete')
    discard.addEventListener('click', (e) => {
        console.log(e)
    })

    GET('api/post')
        .then((blogItems) => {
            render(blogItems)
            // console.log(blogItems)
            // console.log('IN GET')
        });

})();
