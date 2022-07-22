// import "./styles.css";
import AddressDisplay from "../Address/AddressDisplay";
import AddressForm from "../Address/AddressForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function App() {
  const defaultAddress = {
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    phone: ""
  };
  const [addresses, setAddresses] = useState([]);
  const [displayForm, setDisplayFormToggle] = useState(false);
  const URL = "https://62d78b1251e6e8f06f1de851.mockapi.io/address/address";

  const getData = async () => {
    const getAddresses = await axios.get(URL);
    setAddresses(getAddresses.data);
  };

  useEffect(() => getData(), []);

  return (
    <div className="container__address">
      
      {displayForm && (
        <AddressForm
          defaultAddress={defaultAddress}
          addresses={addresses}
          setAddresses={setAddresses}
          setDisplayFormToggle={setDisplayFormToggle}
        />
      )}
      {addresses.map((address, id) => {
        return (
          <AddressDisplay
            key={id}
            address={address}
            addresses={addresses}
            setAddresses={setAddresses}
            setDisplayFormToggle={setDisplayFormToggle}
          />
        );
      })}
      {/* <button
        onClick={() => setDisplayFormToggle(true)}
        className=""
      >
        お届け先住所を追加{" "}
      </button> */}

        <Link to="/addressform" className="address__add">
            お届け先住所を追加
        </Link>
      <div>
        <div className="address__title">観覧履歴</div>
          <input type="radio" /> 
          <input type="radio" />
      </div>
    </div>
  );
}
