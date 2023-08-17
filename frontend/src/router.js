import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Detail from "./Pages/Detail";
import Order from "./Pages/Order";
import ConfirmOrder from "./Pages/ConfirmOrder";
import ItemRegister from "./Pages/ItemRegister";
import ItemSelfRegister from "./Pages/ItemSelfRegister";
import ItemVideoRegister from "./Pages/ItemVideoRegister";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/confirmOrder" element={<ConfirmOrder />} />
        <Route path="/itemregister" element={<ItemRegister />} />
        <Route path="/itemselfregister" element={<ItemSelfRegister />} />
        <Route path="/itemvideoregister" element={<ItemVideoRegister />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
