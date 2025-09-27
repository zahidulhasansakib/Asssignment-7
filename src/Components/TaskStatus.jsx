const TaskStatus = ({ taskStatus, onComplete }) => {
  return (
    <div className="space-y-4 p-4 border-l">
      <h2 className="font-bold text-lg mb-4">Task Status</h2>
      {taskStatus.length === 0 ? (
        <p className="text-gray-500">No tasks in progress</p>
      ) : (
        taskStatus.map((ticket) => (
          <div
            key={ticket.id}
            className="w-full shadow-md rounded-lg p-5 bg-white flex flex-col gap-3">
            <h3 className="font-semibold text-lg">{ticket.title}</h3>
            <button
              className="w-full bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition"
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
