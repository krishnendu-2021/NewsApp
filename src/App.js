import "./App.css";
import React  from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router , Routes, Route} from "react-router-dom"

const App = () => {

  const pageSize=5;
  
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/NewsApp/"
          element={<News  pageSize={pageSize} country={"in"} category={"general"} />}/>
        <Route
          exact
          path="/NewsApp/buisness"
          element={<News  pageSize={pageSize} country={"in"} category={"buisness"} />}/>
        <Route
          exact
          path="/NewsApp/sports"           
        element={<News  pageSize={pageSize} country={"us"} category={"sports"} />}/>
        <Route
          exact
          path="/NewsApp/entertainment"
                     
        element={<News  pageSize={pageSize} country={"in"} category={"entertainment"} />}/>
        <Route
          exact
          path="/NewsApp/science"              
        element={<News pageSize={pageSize} country={"in"} category={"science"} />}/>
        <Route
          exact
          path="/NewsApp/technology"              
          element={ <News pageSize={pageSize} country={"in"} category={"technology"} />}/>
        <Route
          exact
          path="/NewsApp/health"
          key={"health"}         
        element={<News pageSize={pageSize} country={"in"} category={"health"} />}/>
        <Route
          exact
          path="/NewsApp/general"
         element={<News pageSize={pageSize} country={"in"} category={"general"} />}
        />
      </Routes> 
      
    </div>
  
  </Router>
  )
}

export default App

  
    
  
