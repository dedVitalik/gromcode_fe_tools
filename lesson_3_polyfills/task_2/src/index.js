import {renderTasks} from './scripts/render.js';
import {createTaskBtnHandler} from './scripts/add-task.js';
import {getTasksFromServer, changeTaskOnServer} from './scripts/server.js';
import './index.scss';

const listElem = document.querySelector('.list');

getTasksFromServer()
    .then(tasksList => {
        renderTasks(tasksList, listElem);
    });

const newTaskText = document.querySelector('.task-input');
const checkButton = document.querySelector('.list');
const createButton = document.querySelector('.create-task-btn');

const checkboxChangeHandler = (evt) => {
    const isCheckbox = evt.target.classList.contains('list__item-checkbox');
    if (!isCheckbox) {
        return;
    }
    evt.target.closest('.list__item').classList.toggle('list__item_done');
    const changedTask = {
        id: +evt.target.dataset.id,
        text: evt.target.closest('.list__item').innerText,
        done: evt.target.checked,
    };
    
    changeTaskOnServer(changedTask.id, changedTask)
        .then(getTasksFromServer)
        .then(tasksList => {
            renderTasks(tasksList, listElem);
        });
}

checkButton.addEventListener('click', checkboxChangeHandler);
createButton.addEventListener('click', () => {
    createTaskBtnHandler(newTaskText.value, listElem);
    newTaskText.value = '';
});
