const alert = document.querySelector('.alert');
const formulario = document.querySelector('#formulario');
const pintarTodo = document.querySelector('#pintarTodo');
const templateTodo = document.querySelector('#templateTodo').content;

let todos = []

const agregarTodo = todo =>
{
    const objetoTodo = {
        nombre: todo,
        id: `${Date.now()}`
    }

    todos.push(objetoTodo);
}

const pintarTodos = () =>
{
    localStorage.setItem('todos', JSON.stringify(todos));

    pintarTodo.textContent = '';

    const fragment = document.createDocumentFragment();

    todos.forEach(item =>
        {
            const clone = templateTodo.firstElementChild.cloneNode(true);
            clone.querySelector('.lead').textContent = item.nombre;
            clone.querySelector('.btn').dataset.id = item.id;

            fragment.appendChild(clone);
        })

    pintarTodo.appendChild(fragment)
}

document.addEventListener('click', e => 
{

    if(e.target.matches('.btn-danger'))
    {
        todos = todos.filter(item => item.id !== e.target.dataset.id);
        pintarTodos();
    }
});

formulario.addEventListener('submit', e => 
{
    e.preventDefault();
    alert.classList.add('d-none')

    const data = new FormData(formulario);
    //...data.values devuelve todos los valores de cada input, como es solo uno, la desestructuración
    // sería con un solo nombre
    const [todo] = [...data.values()];
    
    if(!todo.trim())
    {
        console.log('no pongas vacios, pon una cadena');
        alert.classList.remove('d-none');
        return
    }

    agregarTodo(todo);
    pintarTodos();
});

document.addEventListener('DOMContentLoaded', e =>
{
    //cuando carga la página verifica si ya hay algo guardado y lo muestra
    if (localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'));
        pintarTodos();
    }
})