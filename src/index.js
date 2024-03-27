import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js' 
import reportWebVitals from './reportWebVitals';
import './font/Inconsolata-VariableFont_wdth,wght.ttf';
import "./css/Common.scss"
import FramePage from './FramePage';
import MainAboutPage from './MainAboutPage';
import MainHomePage from './MainHomePage';
import MainContactPage from './MainContactPage';
import MainProductPage from './MainProductPage';
import NotFoundPage from './NotFoundPage';
import MainDetailsProduct from './MainDetailsProduct';
import MainSigInPage from './MainSigInPage';
import MainProfile from './MainProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  {path} from "./utils/constant"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
            {/* Page */}
            <Route path={path.HOME} element={<FramePage/>}>
                {/*your path is seem like parent element */}
                <Route index element={<MainHomePage/>}></Route>
                {/* The below specifices path will be render and if your path not in the list
                  , it goes to NOTFOUND Page for you
                */}
                <Route path={path.ABOUT} element={<MainAboutPage/>}></Route>
                <Route path={path.CONTACT} element={<MainContactPage/>}></Route>
                <Route path={path.PRODUCT} element={<MainProductPage/>}></Route>
                <Route path={path.DETAIL_PRODUCT} element={<MainDetailsProduct/>}></Route>
                <Route path={path.SIGN_IN} element={<MainSigInPage/>}></Route>
                <Route path={path.PROFILE} element={<MainProfile/>}></Route>
                <Route path='*' element={<NotFoundPage/>}></Route>
            </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
