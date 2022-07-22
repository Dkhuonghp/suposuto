// import "./styles.css";
import AddressDisplay from "./AddressDisplay";
import AddressForm from "./AddressForm";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const defaultAddress = {
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    state_2: "",
    country: "",
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
    <div className="">
      {/* <button
        onClick={() => setDisplayFormToggle(true)}
        className=""
      >
        + Add new address{" "}
      </button> */}
      {/* {displayForm && (
        <AddressForm
          defaultAddress={defaultAddress}
          addresses={addresses}
          setAddresses={setAddresses}
          setDisplayFormToggle={setDisplayFormToggle}
        />
      )} */}
      <AddressForm
          defaultAddress={defaultAddress}
          addresses={addresses}
          setAddresses={setAddresses}
          setDisplayFormToggle={setDisplayFormToggle}
        />
      {/* {addresses.map((address, id) => {
        return (
          <AddressDisplay
            key={id}
            address={address}
            addresses={addresses}
            setAddresses={setAddresses}
            setDisplayFormToggle={setDisplayFormToggle}
          />
        );
      })} */}
    </div>
  );
}
