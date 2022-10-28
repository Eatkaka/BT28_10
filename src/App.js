
import './App.css';
// import NavbarComponent from './NavbarComponent'
// import ResciperComponent from './ResciperComponent'
import NavFood from './btfoodmoi/NavFood';
import { Fragment, useEffect, useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import FoodComponent from './btfoodmoi/FoodComponent';

function App() {
   const [listData,setListData]=useState([])
   const [isLoading,setIsLoading]=useState(false)
   
   useEffect(() => {
    setIsLoading(true);
      axios.post('https://api-qa.muangay-vn.com/api/consumers/menu/data',
      {
      "menuGUID": "7359bfe8-dbf1-4f4d-8b70-0a10566e51ea",
      "isPreview": false,
      "tableId": null
  }).then((res) => {
        // console.log(res)

        setListData(res?.data?.data)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error)
        setIsLoading(false);
      });
  }, []);
  return (

    <>
    {isLoading?(<p>loading</p>):(
    <Fragment>
      <NavFood listData={listData?.sections}/>
      <FoodComponent  listData={listData?.sections}/>
   </Fragment>)}
   
   </>   
  )};
  export default App;

