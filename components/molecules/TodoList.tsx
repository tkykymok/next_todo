import React, { FC } from "react";
import Button from "@/components/atoms/Button";

interface TodoListProps {
  todos: string[];
  onClickDel: (index: number) => void;
}

export const TodoList: FC<TodoListProps> = ({ todos, onClickDel }) => {
  return (
    <ul className="mt-4">
      {todos.map((todo, index) => (
        <li key={index} className=" bg-white mt-4 first:mt-0 rounded-md">
          <div className="flex justify-between items-center">
            <p className="p-2 text-sm ">{todo}</p>
            <div className="p-2">
              <Button onClick={() => onClickDel(index)}>
                削除
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
