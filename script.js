document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = ''; // Clear input field
        }
    }

    function handleTaskClick(event) {
        if (event.target.tagName === 'SPAN') {
            event.target.parentNode.classList.toggle('completed');
        } else if (event.target.classList.contains('delete-btn')) {
            event.target.parentNode.remove();
        }
    }
});
