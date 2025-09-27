import CountBox from "./Components/CountBox"
import Footer from "./Components/Footer"
import MainSection from "./Components/MainSection"
import Navbar from "./Components/Navbar"
import TaskStatus from "./Components/TaskStatus"
import TicketCard from "./Components/TicketCard"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar></Navbar>

      <MainSection>
        <CountBox></CountBox>
        <TicketCard></TicketCard>
        <TaskStatus></TaskStatus>
      </MainSection>
      <Footer></Footer>
    </>
  );
}

export default App
