"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TodoList } from "@/components/molecules/TodoList";
import { TodoForm } from "@/components/molecules/TodoForm";
import { TodoFormValues } from "@/type/todoForm";

const Page = () => {
  const useTodoForm = useForm<TodoFormValues>();
  const [todos, setTodos] = useState<string[]>([]);

  /**
   * 追加ボタン押下時の処理
   */
  const onSubmit = (data: TodoFormValues) => {
    if (data.todoText === "") return;
    const newTodos = [...todos, data.todoText];
    setTodos(newTodos);
    useTodoForm.reset(); // フォームのリセット
  };

  /**
   * 削除ボタン押下時の処理
   * */
  const onClickDel = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="bg-blue-500 min-h-screen">
      <section className="min-h-screen w-1/4 bg-orange-500 mx-auto">
        <div className="p-8">
          <h2 className="font-bold">Todo</h2>
          <TodoForm todoForm={useTodoForm} onSubmit={onSubmit} />
          <TodoList todos={todos} onClickDel={onClickDel} />
        </div>
      </section>
    </div>
  );
};

export default Page;
