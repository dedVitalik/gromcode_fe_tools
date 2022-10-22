import {tasks} from './storage.js';
import {renderTasks} from './render.js';

const addTask = (text) => {
    tasks.push({id: tasks.length + 1, text, done: false});
    localStorage.setItem('tasksList', JSON.stringify(tasks));
}

export const createTaskBtnHandler = (newTaskText, listElem) => {
    if (newTaskText) {
        addTask(newTaskText);
        renderTasks(tasks, listElem);
    }
}