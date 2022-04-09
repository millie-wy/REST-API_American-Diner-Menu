import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Layout from "./components/Layout";
import Menu from "./components/Menu";

function App() {
  // return <div></div>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path="/create" element={<Create />} />
          <Route path="/menu/:id" element="menu item" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
