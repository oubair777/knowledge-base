const Card = ({ data }) => {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      
      <div className="flex justify-between">
        <h2 className="font-semibold">{data.name}</h2>
        <span>⋮</span>
      </div>

      <p className="text-gray-500 text-sm mt-3">
        {data.desc}
      </p>

      <div className="border-t mt-5 pt-2 text-xs text-gray-400">
        Created On: {data.date}
      </div>
    </div>
  )
}

export default Card