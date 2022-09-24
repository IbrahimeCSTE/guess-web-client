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
function App() {
  return (
    <>
      <Router>
        <SubNav />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/winner-prize" component={WinnerScreen} />
          <Route exact path="/own-idea" component={IdeaScreen} />
          <PrivateRoute exact path="/admin">
            <AdminScreen />
          </PrivateRoute>
          <Route exact path="/private" component={PravateScreen} />
          <Route exact path="/news" component={NewsScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
