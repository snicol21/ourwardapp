import { useState } from "react"
import ModalEventActionAdd from "./ModalEventActionAdd"
import ModalEventActionUpdate from "./ModalEventActionUpdate"

const ModalEventAction = () => {
  const [action, setAction] = useState("add")

  return (
    <div>
      <div>
        <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
          <button
            onClick={() => setAction("add")}
            aria-current="page"
            className={`${
              action === "add" ? "text-primary font-semibold" : "text-gray-500 font-medium hover:text-gray-700"
            } rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-md text-center hover:bg-gray-50 focus:z-10 focus:outline-none`}
          >
            <span>Add</span>
            <span aria-hidden="true" className={`${action === "add" ? "bg-primary-500" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}></span>
          </button>
          <button
            onClick={() => setAction("update")}
            aria-current="false"
            className={`${
              action === "update" ? "text-primary font-semibold" : "text-gray-500 font-medium hover:text-gray-700"
            } group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center hover:bg-gray-50 focus:z-10 focus:outline-none`}
          >
            <span>Update</span>
            <span aria-hidden="true" className={`${action === "update" ? "bg-primary-500" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}></span>
          </button>
        </nav>
      </div>
      {action === "add" ? <ModalEventActionAdd /> : <ModalEventActionUpdate />}
    </div>
  )
}

export default ModalEventAction
