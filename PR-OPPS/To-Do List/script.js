class Task {
    constructor(name, time) {
        this.name = name;
        this.time = time;
        this.completed = false;
    }
}

class UI {
    static addTaskToList(task) {
        const list = document.getElementById('taskList');

        const taskItem = document.createElement('li');
        taskItem.classList.add('todo-item');
        if (task.completed) {
            taskItem.classList.add('complete');
        }
        taskItem.innerHTML = `
            <span>${task.name}</span>
            <span>${task.time}</span>
            <input type="checkbox" class="complete-checkbox" ${task.completed ? 'checked' : ''}>
        `;
        list.appendChild(taskItem);
    }


    static toggleTask(element) {
        if (element.classList.contains('complete-checkbox')) {
            const taskItem = element.parentElement;
            taskItem.classList.toggle('complete');

            const tasks = Store.getTasks();
            const taskName = taskItem.querySelector('span:first-child').textContent.trim();
            tasks.forEach(task => {
                if (task.name === taskName) {
                    task.completed = !task.completed;
                }
            });
            Store.setTasks(tasks);
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.todo-container');
        const form = document.querySelector('.todo-form');
        container.insertBefore(div, form);

    
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

}
document.addEventListener('DOMContentLoaded', UI.displayTasks);

document.getElementById('todoForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const taskName = document.getElementById('taskInput').value.trim();
    const taskTime = document.getElementById('taskTime').value.trim();

    if (taskName === '' || taskTime === '') {
        UI.showAlert('Please enter both task and time', 'error');
    } else {
        const newTask = new Task(taskName, taskTime);
        UI.addTaskToList(newTask);

        const tasks = Store.getTasks();
        tasks.push(newTask);
        Store.setTasks(tasks);

        UI.showAlert('Task added', 'success');
        UI.clearFields();
    }
});
document.getElementById('taskList').addEventListener('change', (e) => {
    UI.toggleTask(e.target);
});