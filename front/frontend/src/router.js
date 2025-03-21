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
import Guide1 from "./Pages/Guide1";
import Guide2 from "./Pages/Guide2";
import Guide3 from "./Pages/Guide3";
import Guide4 from "./Pages/Guide4";
import Guide5 from "./Pages/Guide5";
import First from './Pages/First';
import Mypage from "./Pages/Mypage";
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
        <Route path='/first' element={<First />} />
        <Route path="/itemregister" element={<ItemRegister />} />
        <Route path="/itemselfregister" element={<ItemSelfRegister />} />
        <Route path="/itemvideoregister" element={<ItemVideoRegister />} />
        <Route path="/guide1" element={<Guide1 />} />
        <Route path="/guide2" element={<Guide2 />} />
        <Route path="/guide3" element={<Guide3 />} />
        <Route path="/guide4" element={<Guide4 />} />
        <Route path="/guide5" element={<Guide5 />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
