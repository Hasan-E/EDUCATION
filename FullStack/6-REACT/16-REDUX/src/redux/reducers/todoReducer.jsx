const initial = {
  yapilacaklar: [
    { id: 1, task: "Redux çalışıyoruz", completed: false },
    { id: 2, task: "Köpeği Gezdir", completed: true },
  ],
};

const todoReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case "DELETE":
      return { yapilacaklar: state.yapilacaklar.filter((a) => a !== payload) };
    case "ADD":
      return {
        yapilacaklar: [
          ...state.yapilacaklar,
          { id: 3, task: payload, completed: false },
        ],
      };
    case "DO":
      return {
        yapilacaklar: state.yapilacaklar.map((task) =>
          task.id === payload.id
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
