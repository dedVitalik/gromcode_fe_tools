const basicUrl = 'https://6343fd7db9ab4243cadc5c2a.mockapi.io/api/v1/todolist/';

export const getTasksFromServer = () => {
    return fetch(basicUrl)
        .then(response => response.json());
};

export const changeTaskOnServer = (id, taskData) => {
    return fetch(basicUrl + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData),
    });
};