import { MdAddToPhotos } from "react-icons/md"


const Todo = () => {
  return (
    <div className="bg-gray-200 flex flex-col items-center min-h-[550px] rounded-xl">
        {/* title */}
      <div className="flex items-center gap-3 mt-3">
        <h1 className="text-3xl font-semibold">To-Do-List</h1>
        <MdAddToPhotos className="text-4xl"/>
      </div>
    </div>
  )
}

export default Todo
