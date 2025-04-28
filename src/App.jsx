import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import Subscription from "./components/Subscription";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/chat/:targetUserId" element={<Chat />} />
            </Route>

            <Route path="/*" element={<div>404 page not found</div>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
