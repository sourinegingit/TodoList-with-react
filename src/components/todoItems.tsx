import { FaCheckCircle } from "react-icons/fa"
import { MdDelete } from "react-icons/md"

interface taskItem{
title:string;
id:number;
isCompleted:boolean
}

interface todoItemProps{
    taskItems:taskItem
}

const TodoItems = ({taskItems}:todoItemProps) => {
 
    
  return (
    <div className=" flex items-center justify-between gap-56 p-2  ">
        <div className="flex items-center ">
          <FaCheckCircle className="text-xl" />
          <p className="text-slate-600 ml-4 text-2xl">{taskItems.title}</p>
        </div>
        <MdDelete className="text-3xl"/>
      </div>
  )
}

export default TodoItems
