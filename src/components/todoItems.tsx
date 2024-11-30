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
}

const TodoItems = ({ taskItems, handleDeleteTasks,handleEditTask }: todoItemProps) => {
    const edit=()=>{
        const newTitle=prompt("edittask",taskItems.title)
        if(newTitle){
            handleEditTask(taskItems.id,newTitle)
        }
    }
  return (
    <div className=" flex items-center justify-between gap-56 p-2  ">
      <div className="flex items-center " onClick={edit}>
        <FaCheckCircle className="text-xl"  />
        <p className="text-slate-600 ml-4 text-2xl">{taskItems.title}</p>
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
