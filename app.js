document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

const nodeBtn = document.querySelector('a.red')

nodeBtn.addEventListener('click',(evento)=> console.log(event))

const newNode = document.createElement('h1')

newNode.innerText = 'Hola mundo'

document.body.appendChild(newNode)