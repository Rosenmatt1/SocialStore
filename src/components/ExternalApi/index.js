// src/components/ExternalApi.js

import React, { useState } from "react";
import { useAuth0 } from "../../react-auth0-wrapper";

const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false)
  const [apiMessage, setApiMessage] = useState("")
  const { getTokenSilently } = useAuth0()

  const callApi = async () => {
// PROMISE CHAIN SYNTAX , instead of async await
    // fetch('http://localhost:4000/api/external', {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // })
    //   .then(response => response.json())
    //   .then(responseData => {
    //     setShowResult(true)
    //     setApiMessage(responseData)
    //   })
    //   .catch(error => console.error(error))

    try {
      const token = await getTokenSilently()

      const response = await fetch("http://localhost:4000/api/external", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const responseData = await response.json()

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>External API</h1>
      <button onClick={callApi}>Ping API</button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </div>
  );
};

export default ExternalApi;