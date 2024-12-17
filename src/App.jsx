import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div>base page</div>} />
          <Route path="/login" element={<div>login page</div>} />
          <Route path="/test" element={<div>test page</div>} />
          <Route path="/*" element={<div>404 page not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
