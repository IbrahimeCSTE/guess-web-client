import "./App.css";
import HomeScreen from "./Screen/HomeScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Component/Header/Navbar";
import SubNav from "./Component/Header/SubNav";
import WinnerScreen from "./Screen/WinnerScreen";
import IdeaScreen from "./Screen/IdeaScreen";
import AdminScreen from "./Admin/AdminScreen";
import PravateScreen from "./Screen/PravateScreen";
import PrivateRoute from "./PrivateRouter/PrivateRouter";
import NewsScreen from "./Screen/NewsScreen";
import TimeUp from "./Admin/TimeUp";
import Yt from "./Admin/Yt";
import Fb from "./Admin/Fb";
import MobEmail from "./Admin/MobEmail";
import Winner from "./Admin/Winner";
import UpdateNews from "./Admin/UpdateNews";
import Notice from "./Admin/Notice";
import RegistedList from "./Admin/RegistedList";
import VideoLink from "./Admin/VideoLink";
import SelectWinner from "./Admin/SelectWinner";
import DynamicHadle from "./Admin/DynamicHadle";
import HeaderImg from "./Admin/HeaderImg";
import ErrorScreen from "./Screen/ErrorScreen";
import Sports from "./Screen/Sports";
import NewsManage from "./Admin/NewsManage";
import CricketSceen from "./Screen/CricketSceen";
import FootballScreen from "./Screen/FootballScreen";
import SingleNewsScreen from "./Screen/SingleNewsScreen";
import OtherGameScreen from "./Screen/OtherGameScreen";
import Login from "./Component/User/Login";
import Register from "./Component/User/Register";
function App() {
  return (
    <div>
      <Router>
        <SubNav />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/winner-prize" component={WinnerScreen} />
          <Route exact path="/own-idea" component={IdeaScreen} />
          <Route exact path="/private" component={PravateScreen} />
          <Route exact path="/news" component={NewsScreen} />
          <Route exact path="/sports" component={Sports} />
          <Route
            exact
            path="/sports/single-news/:id"
            component={SingleNewsScreen}
          />
          <Route exact path="/sports/cricket" component={CricketSceen} />
          <Route exact path="/sports/football" component={FootballScreen} />

          <Route exact path="/sports/other" component={OtherGameScreen} />
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/user/register" component={Register} />

          <PrivateRoute exact path="/pkadmin">
            <AdminScreen />
          </PrivateRoute>
          <PrivateRoute exact path="/time-manage">
            <TimeUp />
          </PrivateRoute>
          <PrivateRoute exact path="/yt-manage">
            <Yt />
          </PrivateRoute>
          <PrivateRoute exact path="/fb-manage">
            <Fb />
          </PrivateRoute>
          <PrivateRoute exact path="/me-manage">
            <MobEmail />
          </PrivateRoute>
          <PrivateRoute exact path="/winner-manage">
            <Winner />
          </PrivateRoute>
          <PrivateRoute exact path="/update-news-manage">
            <UpdateNews />
          </PrivateRoute>
          <PrivateRoute exact path="/notice-manage">
            <Notice />
          </PrivateRoute>
          <PrivateRoute exact path="/registerList">
            <RegistedList />
          </PrivateRoute>
          <PrivateRoute exact path="/yt-video">
            <VideoLink />
          </PrivateRoute>
          <PrivateRoute exact path="/selected-winner">
            <SelectWinner />
          </PrivateRoute>
          <PrivateRoute exact path="/dynamic-text">
            <DynamicHadle />
          </PrivateRoute>
          <PrivateRoute exact path="/header-img">
            <HeaderImg />
          </PrivateRoute>
          <PrivateRoute exact path="/news-manage">
            <NewsManage />
          </PrivateRoute>
          <Route exact path="*" component={ErrorScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
