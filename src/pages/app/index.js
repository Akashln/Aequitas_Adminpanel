import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Bingocard from "./bingocard/Bingocard";
import Dashboard from "./dashboard/Dashboard";
import Game from "./game/Game";
import Player from "./player";
import User from "./user";
import ViewUser from "./user/ViewUser";
import Item from "./item";
import Wallet from "./wallet/Wallet";
import Profile from "./profile/Profile";
import Question from "./question/Question";
import ViewWallet from "./wallet/viewWallet";
import ViewQuestion from "./question/ViewQuestion";


export default function AppScreen(){
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to='dashboard' replace/>}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/users" element={<User />}></Route>
        <Route path='/users/:userId' element={<ViewUser />}></Route>
        <Route path="/players" element={<Player />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/bingocard" element={<Bingocard />}></Route>
        <Route path="/item" element={<Item />}></Route>
        <Route path="/question" element={<Question />}></Route>
        {/* <Route path='/question/:questionId' element={<ViewQuestion />}></Route> */}
        <Route path="/wallet" element={<Wallet />}></Route>
        <Route path='/wallet/:walletId' element={<ViewWallet />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route> */}
      </Routes>
    </DashboardLayout>
  );
}
