// app/page.tsx
"use client";
import { useState } from "react";
import { useTodoStore } from "@/store/todoStore";
import TodoItem from "@/components/TodoItem";

export default function Home() {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <main className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">📝 Todo App</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tambah todo..."
          className="border p-2 flex-1"
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white p-2">
          Tambah
        </button>
      </div>
      <TodoItem />
    </main>
  );
}
