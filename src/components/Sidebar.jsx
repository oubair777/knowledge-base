const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4 text-sm">
      
      <p className="text-gray-400 mb-2">MY PROJECTS</p>
      <ul className="space-y-2">
        <li>Agents</li>
        <li>AI Models</li>
        <li>Library</li>
      </ul>

      <p className="text-gray-400 mt-6 mb-2">ORCHESTRATOR</p>
      <ul className="space-y-2">
        <li>Published</li>
        <li>Machines</li>
        <li>Queues</li>
        <li>Triggers</li>
        <li>Jobs</li>
        <li>Executions</li>
        <li>Vault</li>
        <li className="bg-purple-100 text-primary p-2 rounded">
          Knowledge Base
        </li>
      </ul>
    </div>
  )
}

export default Sidebar