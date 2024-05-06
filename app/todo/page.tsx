"use client";
import React, { useState } from "react";

interface Task {
  task: string;
  detail: string;
}

function ToDo() {
  let [task, setTask] = useState("");
  let [detail, setDetail] = useState("");
  let [mainTask, setMainTask] = useState<Task[]>([]);

  // Add Task Button Working
  function taskHandler(e: any) {
    e.preventDefault();
    setTask("");
    setDetail("");
    setMainTask([...mainTask, { task, detail }]);
  }

  let savedTasks: any = (
    <div
      className="
  font-bold
  text-center
  pt-10
  text-6xl
  "
    >
      No Task Available
    </div>
  );

  // Delete Button
  function deleteHandler(e: any) {
    let copyMainTask = [...mainTask];
    copyMainTask.splice(e, 1);
    setMainTask(copyMainTask);
  }

  if (mainTask.length > 0) {
    savedTasks = mainTask.map((e, index) => {
      return (
        <div
          key={index}
          className="
      bg-gradient-to-br from-purple-500 to-green-500
      flex
      justify-around
      py-2
      flex-col
      items-center
      mb-1
      lg:flex-row
      gap-4
      "
        >
          <h1 className="lg:w-1/4 text-wrap text-start font-bold">{e.task}</h1>

          <h1 className="lg:w-1/2 text-start text-wrap">{e.detail}</h1>

          <button
            onClick={deleteHandler}
            className="bg-red-500 lg:w-1/4 hover:bg-red-600
        text-white
        p-1
        "
          >
            Delete
          </button>
        </div>
      );
    });
  }

  return (
    <div
      className="
    mainBg
    min-h-[calc(100vh-90px)]
    px-4 py-1
    "
    >
      <div className="w-full h-full flex flex-col">
        <h1
          className="
      bg-black
      lg:text-3xl
      text-white
      font-bold
      text-center
      text-sm
      p-1
      "
        >
          My ToDo List
        </h1>

        {/* input task */}
        <form className="flex flex-col lg:flex-row gap-2 py-4">
          <input
            className="
        text-sm
        lg:text-2xl
        border-blue-800
        border-2
        outline-none
        rounded
        p-1
        "
            type="text"
            placeholder="Enter Task Here"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />

          <input
            className="
      text-sm
      lg:text-2xl
      border-blue-800
      border-2
      outline-none
      rounded
      p-1
      "
            type="text"
            placeholder="Enter Details Here"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          />

          <button
            onClick={taskHandler}
            className="
      bg-blue-800
      text-white
      p-1
      text-sm
      lg:text-2xl
      font-bold
      rounded
      hover:bg-blue-900
      "
          >
            Add Task
          </button>
        </form>

        {/* Saved Tasks */}
        <div>{savedTasks}</div>
      </div>
    </div>
  );
}

export default ToDo;
