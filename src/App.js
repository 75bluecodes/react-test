import { createBrowserRouter, 
        createRoutesFromElements,
        RouterProvider,
        Route } from "react-router-dom";
import MainLayout from "./components/layouts/mainLayout";
import LanguageLayout from "./components/layouts/languageLayout";
import HomeWrapper from "./components/pages/home";
import About from "./components/pages/about";
import  { Services} from "./components/pages/services";
import { language, languages } from "./services/languagesfetch";
import Course from "./components/pages/course";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomeWrapper />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<LanguageLayout />} >
      <Route index element={<Services />} loader={languages} />
        <Route path=":id" element={<Course />} loader={language} />
      </Route>

    </Route>
  )
)

function App(){
  return  <RouterProvider router={router} />
}

export default App;