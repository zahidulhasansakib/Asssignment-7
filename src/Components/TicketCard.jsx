import { FaRegCalendarAlt } from "react-icons/fa";

const TicketCard = ({ ticket, onClick }) => {
  const priorityColors = {
    High: "text-red-500",
    Medium: "text-yellow-500",
    Low: "text-green-500",
  };

  return (
    <div
      className="w-full shadow-md rounded-lg p-5 cursor-pointer bg-white hover:shadow-lg transition"
      onClick={onClick}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-lg">{ticket.title}</h2>
        <button className="flex items-center gap-2 bg-green-200 text-green-600 font-semibold text-xs px-2 py-1 rounded-full">
          <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-800"></span>
          Open
        </button>
      </div>

      <p className="text-gray-700 text-sm mb-3">
        {ticket.description.length > 100
          ? ticket.description.slice(0, 100) + "..."
          : ticket.description}
      </p>

      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-3">
          <span className="font-mono text-gray-500">#{ticket.id}</span>
          <span
            className={`px-2 py-1 text-xs font-semibold ${
              priorityColors[ticket.priority]
            }`}>
            {ticket.priority} Priority
          </span>
        </div>

        <div className="flex items-center gap-3 text-gray-500 text-xs">
          <span>{ticket.customer}</span>
          <span className="flex items-center gap-1">
            <FaRegCalendarAlt className="text-gray-400" />
            {ticket.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
