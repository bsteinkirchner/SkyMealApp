import React, { useState, useEffect } from 'react';
import Nav from "./components/Nav/Nav";
import Pages from "./pages/Pages";
import {SkynetClient} from "skynet-js";
import { ContentRecordDAC } from '@skynetlabs/content-record-library';
import "./index.scss"
import { BrowserRouter } from "react-router-dom";


function App() {
    const contentRecord = new ContentRecordDAC();
    const [dataKey, setDataKey] = useState('');
    const [userID, setUserID] = useState();
    const [mySky, setMySky] = useState();
    const [loggedIn, setLoggedIn] = useState(null);

    const dataDomain = 'localhost';

    useEffect(() =>{
      async function initMySky() {
        try {
        //const mySky = await client.loadMySky(dataDomain);
        //await mySky.loadDacs(contentRecord);
        const loggedIn = await mySky.checkLogin();
        setMySky(mySky);
        setLoggedIn(loggedIn);
        if (loggedIn) {
          setUserID(await mySky.userID());
        }
        } catch (e) {
          console.error(e);
        }
      }
      initMySky();
    })
    const handleMySkyLogin = async () => {
      const status = await mySky.requestLoginAccess();
      setLoggedIn(status);
      if (status) {
        setUserID(await mySky.userID());
      }
    }
    const handleMySkyLogout = async () => {
      await mySky.logout();
      setLoggedIn(false);
      setUserID('');
    }
  return(
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;