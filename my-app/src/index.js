import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './styles/styles.scss';
import Home from './component/Home';
import Location from './component/Location';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="location" element={<Location />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
