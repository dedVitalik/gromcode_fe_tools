export const renderTasks = (tasksList, listElem) => {
    const tasksElems = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({ id, text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-id', String(id));
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);
            
            return listItemElem;
        });
    
    listElem.innerHTML = '';
    listElem.append(...tasksElems);
};
