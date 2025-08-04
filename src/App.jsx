import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Navbar from "./component/navbar/Navbar";
import MyFooter from "./component/footer/MyFooter";

function App() {
  return (
    <div className=" w-full text-lightText h-auto bg-bodyColor ">
     
      <div className="w-full   mx-auto ">
        <Routes>
          <Route
            path="*"
            element={
              <>
                 <Navbar />
                <Routes>
                  <Route path="/" element={<Layout />} />
                </Routes>
                <MyFooter />
              </>
            }
          ></Route>
        </Routes>
      </div>
     
    </div>
  );
}

export default App;
