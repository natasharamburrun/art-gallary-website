import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './styles/styles.scss';
import Home from './component/Home';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
