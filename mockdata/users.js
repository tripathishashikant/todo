export default {
  users: [
    {
      userName: 'User 1',
      boards: [
        {
          boardName: 'Dashboard',
          lists: [
            {
              listName: 'List 1',
              id: 1,
              todos: [
                {
                  id: 1,
                  title: 'Learn Vue',
                  completed: false,
                },
                {
                  id: 2,
                  title: 'Learn Vuex',
                  completed: false,
                },
                {
                  id: 3,
                  title: 'Learn Vue Router',
                  completed: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
