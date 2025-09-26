import { useState } from "react";
import Container from "./Container";
import CountBox from "./CountBox";
import TicketCard from "./TicketCard";
import TaskStatus from "./TaskStatus";

// 10 example tickets
const tickets = [
  {
    id: 1001,
    title: "Login Issue",
    description: "Cannot login",
    customer: "John Smith",
    priority: "High",
    status: "Pending",
    createdAt: "2025-09-25",
  },
  {
    id: 1002,
    title: "Profile Update",
    description: "Profile pic not updating",
    customer: "Michael Brown",
    priority: "Medium",
    status: "Pending",
    createdAt: "2025-09-24",
  },
  {
    id: 1003,
    title: "Payment Issue",
    description: "Payment not going through",
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
  const [data, setData] = useState(tickets);
  const [taskStatus, setTaskStatus] = useState([]);

  const handleCardClick = (ticket) => {
    if (!taskStatus.find((t) => t.id === ticket.id)) {
      setTaskStatus((prev) => [...prev, ticket]);
      alert(`${ticket.title} added to Task Status!`);
    }
  };

  const handleComplete = (ticketId) => {
    alert(`Ticket ${ticketId} marked as Complete!`);
    setTaskStatus((prev) => prev.filter((t) => t.id !== ticketId));
  };

  return (
    <div className="my-10 flex justify-center px-4">
      <div className="w-full max-w-7xl">
        {/* CountBox / Banner */}
        <CountBox data={data} taskStatus={taskStatus} />

        {/* Main flex container */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* Left: Tickets 2/3 */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onClick={() => handleCardClick(ticket)}
                />
              ))}
            </div>
          </div>

          {/* Right: Task Status 1/3 */}
          <div className="md:w-1/3">
            <TaskStatus taskStatus={taskStatus} onComplete={handleComplete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
