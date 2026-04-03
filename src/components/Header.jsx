const Header = () => {
  return (
    <div className="flex items-center justify-between bg-secondary text-white px-6 py-3">
      
      <div className="flex items-center space-x-4">
        <h1 className="font-bold text-lg">Workspace</h1>
        <select className="bg-purple-700 px-2 py-1 rounded">
          <option>Workspace 1</option>
            <option>Workspace 2</option>
              <option>Workspace 3</option>
        </select>
      </div>
<input
  className="w-1/3 px-4 py-2 rounded-md bg-purple-700 placeholder-gray-300 outline-none"
  placeholder="Search..."
/>
      <div className="flex items-center space-x-4">
        <span>🔔</span>
        <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
          GK
        </div>
      </div>
    </div>
  )
}

export default Header