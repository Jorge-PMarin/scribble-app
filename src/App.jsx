import NavBar from "./components/NavBar";
import Post from "./components/Post";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";
import Write from "./components/write";
import UserBar from "./components/UserBar";
import SettingsPage from "./Pages/SettingsPage";
import Popup from "./components/Popup";
import SignupForm from "./components/signupForm";
import RootLayout from "./layouts/RootLayout";
import NotFoundPage from "./Pages/NotFoundPage";

//Routing
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="write" element={<Write />} />
        <Route path="settings" element={<SettingsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      {/* <UserBar />
      <HomePage /> */}
    </>
  );
}

export default App;
