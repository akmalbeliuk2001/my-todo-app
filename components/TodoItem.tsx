"use client";

import { useTodoStore } from "@/store/todoStore";

// Item
export default function TodoItem() {
  const { todos, toggleTodo, deleteTodo } = useTodoStore();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="flex gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? "line-through" : ""}>
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>🗑</button>
        </li>
      ))}
    </ul>
  );
}
