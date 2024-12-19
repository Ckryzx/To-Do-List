const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const totalTasks = document.getElementById('total-tasks');
const completedTasks = document.getElementById('completed-tasks');

let tasks = [
  { id: 1, description: 'Estudiar', completed: false },
  { id: 2, description: 'Leer libros', completed: false },
  { id: 3, description: 'Jugar videojuegos', completed: false }
];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    if (task.completed) taskItem.classList.add('completed');

    taskItem.innerHTML = `
      <span class="task-text">${task.description}</span>
      <div class="task-actions">
        <button onclick="toggleTask(${task.id})">${task.completed ? 'Desmarcar' : 'Completar'}</button>
        <button onclick="deleteTask(${task.id})">Eliminar</button>
      </div>
    `;

    taskList.appendChild(taskItem);
  });

  updateCounters();
}

function addTask() {
  const description = taskInput.value.trim();
  if (!description) return;

  const newTask = {
    id: Date.now(),
    description,
    completed: false
  };

  tasks.push(newTask);
  taskInput.value = '';
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

function toggleTask(id) {
  const task = tasks.find((task) => task.id === id);
  if (task) task.completed = !task.completed;
  renderTasks();
}

function updateCounters() {
  totalTasks.textContent = tasks.length;
  completedTasks.textContent = tasks.filter((task) => task.completed).length;
}

addTaskBtn.addEventListener('click', addTask);
renderTasks();