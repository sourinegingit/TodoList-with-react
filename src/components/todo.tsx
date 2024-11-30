import { MdAddToPhotos } from "react-icons/md";
import TodoItems from "./todoItems";

const Todo = () => {
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
          className=" flex items-center text-2xl flex-1 h-12 rounded-xl pr-2 border-none outline-none pl-4 bg-transparent text-slate-600  placeholder:text-slate-700"
          placeholder="Add a Task Here"
        />
        <button className="bg-orange-600 text-lg rounded-full  text-white font-medium border-none w-32 h-14">
          ADD
        </button>
      </div>

      {/* todo items */}
     <TodoItems/>
     <TodoItems/>
    </div>
  );
};

export default Todo;
