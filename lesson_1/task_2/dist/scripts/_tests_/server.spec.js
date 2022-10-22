import { getTasksFromServer } from '../server';

it('should ', function () {
    const basicUrl = 'https://6343fd7db9ab4243cadc5c2a.mockapi.io/api/v1/todolist/';
    const resultedFetch = getTasksFromServer();
    const expectedData = [
        {
            "text": "text 1",
            "done": false,
            "id": "1"
        },
        {
            "text": "text 2",
            "done": false,
            "id": "2"
        }
    ];
    expect(resultedFetch.then(data => data.json())).toEqual(expectedData);
});