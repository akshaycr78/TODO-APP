import{BrowserRouter,Routes,Route} from "react-router-dom"
import Todo from "./todo";
import Main from "./Main"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/todo" element={<Todo/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
