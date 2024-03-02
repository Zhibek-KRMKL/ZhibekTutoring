import "./index.css";
import Notification from "./pages/Notification";
import ColorChange from "./pages/ColorChange";
import Password from "./pages/Password";
import ForMenu from "./components/ForMenu";
import TodoList from "./pages/TodoList";
import Registration from "./pages/Registration";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingProvider } from "./context/LoadingProvider";
import { CounterProvider } from "./context/CounterProvider";
import Login from "./pages/Login";
import ListItem from "./pages/ListItem";


function App() {
  const loginStorage = JSON.parse(localStorage.getItem("loggedIn"));

  const obj = {
    name: "Liana",
    city: "Istanbul"
  }

  const x = "Hello, World!!!!"
  const y = 18

  return (
    <>
    HOLAAAA
      <LoadingProvider>
        <CounterProvider>
          <Router>
            <ForMenu />
            <br />
            <Routes>
              {loginStorage ? (
                <>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/homePage" element={<HomePage />} />
                  <Route path="/todoList" element={<TodoList />} />
                  <Route path="/password" element={<Password />} />
                  <Route path="/notification" element={<Notification />} />
                  <Route path="/listItem" element={<ListItem />} />
                  <Route path="/colorChange" element={<ColorChange />} />
                </>
              ) : (
                <>
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/" element={<Login />} />
                  <Route path="/login" element={<Login />} />
                </>
              )}
            </Routes>
          </Router>
        </CounterProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
