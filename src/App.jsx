import CountBox from "./Components/CountBox"
import Footer from "./Components/Footer"
import MainSection from "./Components/MainSection"
import Navbar from "./Components/Navbar"
import TaskStatus from "./Components/TaskStatus"
import TicketCard from "./Components/TicketCard"


function App() {
 

  return (
    <>
     <Navbar>

     </Navbar>

     <MainSection>
      <CountBox></CountBox>
      <TicketCard></TicketCard>
      <TaskStatus></TaskStatus>
     </MainSection>
 <Footer>

 </Footer>
    
    
    </>
  )
}

export default App
