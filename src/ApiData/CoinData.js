import React, { useEffect, useState } from "react";
import axios from "axios";
import CoinsTable from "../TableFormData/CoinsTable";
import { Button } from "react-bootstrap";
export default function CoinData() {
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  const [coinsdata, setcoinsdata] = useState({});

  useEffect(() => {
    async function CoinData() {
      const res = await axios.get(url);
      console.log(res);
      setcoinsdata(res);
    }
    CoinData();
  }, []);

  return (
    <div>
      {/* <Button onClick={CoinData}>movie</Button> */}
      <CoinsTable coinsdata={coinsdata} />
    </div>
  );
}
