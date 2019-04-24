import React, { useReducer } from "react";

const initState = { todo: [], input: "" };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, { title: state.input, complete: false }]
      };
    case "CHANGE_INPUT":
      //console.log(action.input);
      return { ...state, input: action.input };
    case "COMPLETE_TODO":
      return {
        ...state,
        todo: [
          ...state.todo.slice(0, action.index),
          {
            ...state.todo[action.index],
            complete: !state.todo[action.index].complete
          },
          ...state.todo.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
}

function Todo() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      Todo List:
      <div>
        {state.todo.map(anythingbutindex => (
          <div className={CSS.false}>•{anythingbutindex.title}</div>
        ))}
        <input
          value={state.input}
          type="text"
          placeholder="Enter a Todo!"
          onChange={e =>
            dispatch({ type: "CHANGE_INPUT", input: e.target.value })
          }
        />
        <button onClick={() => dispatch({ type: "ADD_TODO" })}>+</button>
      </div>
    </div>
  );
}

export default Todo;

//what State do we need:
//    -items Title = string
//    -item Completed = boolean
//   -Items/Todo's = []
//    -Input = ""

//What actions?
// -Add - AddTodo(title) - {type: 'ADD_TODO'}
// -Delete - Delete(idx) - {type: 'DELETE_TODO', indx: 5}
// -set complete status - CompleteATodo(indx) - {type: COMPLETE_TODO, indx: 2}
// -edit a todo
