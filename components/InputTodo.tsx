import React from "react";

interface Props {
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: any;
}
export const InputTodo: React.FC<Props> = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)} className="space-y-4">
      <input
        type="text"
        className="rounded-lg p-1 border-gray-300"
        {...props.register("todoText", { required: true })}
      />
      {props.errors.todoText && (
        <span className="text-red-500">This field is required</span>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-1 rounded-md"
      >
        追加
      </button>
    </form>
  );
};
