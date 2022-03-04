import create from "zustand";
import React, { memo, useState } from "react";

let id = 0;
const useStore = create((set) => ({
  todoList: [],
  addTodo: (text) =>
    set((state) => ({
      todoList: [...state.todoList, { id: id++, text, isSelected: false }],
    })),
  toggleTodo: (item) =>
    set((state) => {
      let list = state.todoList.map((x) => {
        if (x.id === item.id) return { ...x, isSelected: !x.isSelected };
        return x;
      });
      return { todoList: list };
    }),
  del: (item) =>
    set((state) => {
      let list = state.todoList.filter((x) => x !== item);
      return { todoList: list };
    }),
}));

const selectTodoList = (state) => state.todoList;
const selectAdd = (state) => state.addTodo;
const selectToggle = (state) => state.toggleTodo;
const selectDel = (state) => state.del;

const Todo = ({ item }) => {
  const toggle = useStore(selectToggle);
  const del = useStore(selectDel);
  return (
    <li onClick={() => toggle(item)}>
      <span style={{ textDecoration: item.isSelected ? "underline" : null }}>
        {item.text}
      </span>
      <button onClick={() => del(item)}>Del</button>
    </li>
  );
};

const TodoList = () => {
  const todoList = useStore(selectTodoList);
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} item={todo} />
      ))}
    </ul>
  );
};

const AddTodo = () => {
  const add = useStore(selectAdd);
  const [temp, setTemp] = useState("");
  return (
    <div>
      <input
        type="text"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      <button
        onClick={() => {
          add(temp);
          setTemp("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default function () {
  return (
    <>
      <h2>Todo</h2>
      <AddTodo />
      <TodoList />
    </>
  );
}
