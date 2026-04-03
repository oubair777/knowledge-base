import { useState } from "react"

const Drawer = ({ onClose, onCreate }) => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  return (
    <div className="fixed inset-0 flex z-50">
      
  
      <div
        className="flex-1 bg-black bg-opacity-40"
        onClick={onClose}
      />

    
      <div className="w-[420px] bg-white p-6 shadow-xl">
        
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-lg">
            Create New Knowledge Base
          </h2>
          <button onClick={onClose}>✕</button>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Best for quick answers from documents, websites and text files.
        </p>

        <label className="text-sm font-medium">
          Name (Cannot be edited later) *
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full p-2 mt-1 mb-3 rounded"
        />

        <label className="text-sm font-medium">Description</label>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border w-full p-2 mt-1 mb-3 rounded"
        />

        <label className="text-sm font-medium">Vector Store *</label>
        <select className="border w-full p-2 mt-1 mb-3 rounded">
          <option>Qdrant</option>
        </select>

        <label className="text-sm font-medium">LLM Embedding Model *</label>
        <select className="border w-full p-2 mt-1 mb-6 rounded">
          <option>text-embedding-ada-002</option>
        </select>

        <button
          onClick={() => {
         
            onCreate({ name, desc })
            onClose()
          }}
          className="bg-primary text-white w-full py-2 rounded-lg"
        >
          Create
        </button>
      </div>
    </div>
  )
}

export default Drawer