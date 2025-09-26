const TaskStatus = ({ taskStatus, onComplete }) => {
  return (
    <div className="space-y-4 p-4 border-l">
      <h2 className="font-bold text-lg mb-2">Task Status</h2>
      {taskStatus.length === 0 ? (
        <p className="text-gray-500">No tasks in progress</p>
      ) : (
        taskStatus.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
            <span>{ticket.title}</span>
            <button
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition"
              onClick={() => onComplete(ticket.id)}>
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskStatus;
