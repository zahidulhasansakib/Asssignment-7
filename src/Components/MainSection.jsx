import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CountBox from "./CountBox";
import TicketCard from "./TicketCard";
import TaskStatus from "./TaskStatus";
import { toast } from "react-toastify";

// Sample tickets
const tickets = [
  {
    id: 1001,
    title: "Login Issues - Can't Access Account",
    description:
      "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
    customer: "John Smith",
    priority: "High",
    status: "Pending",
    createdAt: "2025-09-25",
  },
  {
    id: 1002,
    title: "Payment Failed - Card Declined",
    description:
      "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
    customer: "Michael Brown",
    priority: "Medium",
    status: "Pending",
    createdAt: "2025-09-24",
  },
  {
    id: 1003,
    title: "Unable to Download Invoice",
    description:
      "Customer cannot download their January invoice from the billing section. The download button is...",
    customer: "James Anderson",
    priority: "High",
    status: "Pending",
    createdAt: "2025-09-23",
  },
  {
    id: 1004,
    title: "Course Material",
    description: "Cannot download pdf",
    customer: "Liam Thomas",
    priority: "Low",
    status: "Pending",
    createdAt: "2025-09-22",
  },
  {
    id: 1005,
    title: "Exam Schedule",
    description: "Exam schedule missing",
    customer: "David Wilson",
    priority: "Medium",
    status: "Pending",
    createdAt: "2025-09-21",
  },
  {
    id: 1006,
    title: "Assignment Issue",
    description: "Cannot submit assignment",
    customer: "Sarah Johnson",
    priority: "High",
    status: "Pending",
    createdAt: "2025-09-20",
  },
  {
    id: 1007,
    title: "Feedback Form",
    description: "Feedback form not visible",
    customer: "Emily Davis",
    priority: "Low",
    status: "Pending",
    createdAt: "2025-09-19",
  },
  {
    id: 1008,
    title: "Notification Error",
    description: "Not receiving notifications",
    customer: "Sophia Taylor",
    priority: "Medium",
    status: "Pending",
    createdAt: "2025-09-18",
  },
  {
    id: 1009,
    title: "Library Access",
    description: "Cannot access library portal",
    customer: "Olivia Martinez",
    priority: "Low",
    status: "Pending",
    createdAt: "2025-09-17",
  },
  {
    id: 1010,
    title: "Transcript Request",
    description: "Transcript not available",
    customer: "Isabella Garcia",
    priority: "Medium",
    status: "Pending",
    createdAt: "2025-09-16",
  },
];

const MainSection = () => {
  const [data, setData] = useState(tickets); // Main tickets section
  const [taskStatus, setTaskStatus] = useState([]); // In-Progress
  const [resolved, setResolved] = useState([]); // Resolved
  const [showTaskStatus, setShowTaskStatus] = useState(false);
  const [showResolved, setShowResolved] = useState(false);

  // Click on main ticket -> add to In-Progress
  const handleCardClick = (ticket) => {
    if (
      !taskStatus.find((t) => t.id === ticket.id) &&
      !resolved.find((t) => t.id === ticket.id)
    ) {
      setTaskStatus((prev) => [...prev, ticket]);
      setShowTaskStatus(true);
      toast.info(`${ticket.title} added to In-Progress!`);
    }
  };

  // Complete button -> move to Resolved & remove from Main Section
  const handleComplete = (ticketId) => {
    const completedTicket = taskStatus.find((t) => t.id === ticketId);
    if (!completedTicket) return;

    setResolved((prev) => [...prev, completedTicket]);
    setShowResolved(true);

    setTaskStatus((prev) => prev.filter((t) => t.id !== ticketId));
    setData((prev) => prev.filter((t) => t.id !== ticketId));

    toast.success(`Ticket "${completedTicket.title}" marked as Resolved!`);
  };

  return (
    <div className="my-10 flex justify-center px-4">
      <div className="w-full max-w-7xl">
        {/* CountBox */}
        <CountBox taskStatus={taskStatus} resolved={resolved} />

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* Left: Main Tickets */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onClick={() => handleCardClick(ticket)}
              />
            ))}
          </div>

          {/* Right: In-Progress & Resolved */}
          <div className="md:w-1/3 flex flex-col gap-6">
            {/* Task Status */}
            {showTaskStatus && (
              <TaskStatus taskStatus={taskStatus} onComplete={handleComplete} />
            )}

            {/* Resolved Section */}
            {showResolved && (
              <div className="space-y-4 p-4 border-l rounded-md shadow-md bg-green-100">
                <h2 className="font-bold text-lg mb-4">Resolved Tasks</h2>
                {resolved.length === 0 ? (
                  <p className="text-gray-500">No resolved tasks yet</p>     
                ) : (
                  resolved.map((ticket) => (     
                    <div
                      key={ticket.id}
                      className="w-full shadow-md rounded-lg p-4 bg-green-100 flex flex-col gap-2">
                      <h3 className="font-semibold text-lg">{ticket.title}</h3>
                      <div className="flex justify-between items-center text-sm text-green-700">
                        <span className="flex items-center gap-1">
                          <FaCheck /> Complete
                        </span>
                        <span className="cursor-pointer text-gray-600">
                          Click to remove
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
