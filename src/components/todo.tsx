import { MdAddToPhotos } from "react-icons/md";
import TodoItems from "./todoItems";
import { useState } from "react";
import { Task } from "../types";

const Todo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  // console.log(inputValue);

  // -------------------add task------------------------
  const handleAddTask = () => {
    if (inputValue.length < 1) {
      return;
    }
    const newTask: Task = {
      title: inputValue,
      id: Date.now(),
      isCompleted: false,
    };
    setTasks((prev) => {
      return [...prev, newTask];
    });
    setInputValue("");
  };


  //   ----------------------delete tasks---------------
  const handleDeleteTasks = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //   -----------------------edit tasks------------------
  const handleEditTask = (id: number, newTitle: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };


//   -----------------------toggleTask--------------------
const handleToggleCompleted=(id:number)=>{
    setTasks(tasks.map((task)=>task.id === id ?{...task,isCompleted:!task.isCompleted}:task))

}





  return (
    <div className="bg-gray-200 flex flex-col  min-h-[550px] rounded-xl p-7">
      {/* title */}
      <div className="flex items-center gap-3 mt-3">
        <h1 className="text-3xl font-semibold">To-Do-List</h1>
        <MdAddToPhotos className="text-4xl" />
      </div>

      {/* input*/}
      <div className=" flex bg-gray-400 items-center my-7  rounded-full">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className=" flex items-center text-2xl flex-1 h-12 rounded-xl pr-2 border-none outline-none pl-4 bg-transparent text-slate-600  placeholder:text-slate-700"
          placeholder="Add a Task Here"
        />
        <button
          onClick={handleAddTask}
          className="bg-orange-600 text-lg rounded-full  text-white font-medium border-none w-32 h-14"
        >
          ADD
        </button>
      </div>

      {/* todo items */}
      {tasks.length === 0 ? (
        <p className="text-center text-xl text-slate-600">
          no tasks to display
        </p>
      ) : (
        <div className="flex flex-col gap-y-3">
          {tasks.map((task) => (
            <TodoItems
              key={task.id}
              taskItems={task}
              handleDeleteTasks={handleDeleteTasks}
              handleEditTask={handleEditTask}
              handleToggleComplete={handleToggleCompleted}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Todo;
