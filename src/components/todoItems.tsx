import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface taskItem {
  title: string;
  id: number;
  isCompleted: boolean;
}

interface todoItemProps {
  taskItems: taskItem;
  handleDeleteTasks: (id: number) => void;
  handleEditTask:(id:number,title:string)=>void;
  handleToggleComplete:(id:number)=>void;
}

const TodoItems = ({ taskItems, handleDeleteTasks,handleEditTask,handleToggleComplete }: todoItemProps) => {
    const edit=()=>{
        const newTitle=prompt("edittask",taskItems.title)
        if(newTitle){
            handleEditTask(taskItems.id,newTitle)
        }
    }
    console.log(taskItems.isCompleted);
    
  return (
    <div className=" flex items-center justify-between gap-56 p-2  ">
      <div className="flex items-center ">
        <FaCheckCircle className="text-xl"  onClick={()=>{handleToggleComplete(taskItems.id)}}/>
        <p className={`ml-4 text-2xl ${taskItems.isCompleted ? "line-through text-gray-500" : ""}`} onClick={edit}>{taskItems.title}</p>
      </div>
      <MdDelete
        className="text-3xl"
        onClick={() => {
          handleDeleteTasks(taskItems.id);
        }}
      />
    </div>
  );
};

export default TodoItems;
