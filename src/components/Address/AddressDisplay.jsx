// import "./styles.css";
import { useState } from "react";
import Button from "../Button";
import AddressForm from "./AddressForm";
import { deleteHandler } from "./utilities";
import { Link } from "react-router-dom";

import Camera from "../../assets/images/products/camera.png"
import "../Address/Address.scss"
const AddressDisplay = ({
  address,
  addresses,
  setAddresses,
  setDisplayFormToggle
}) => {
  const [isEditing, setIsEditing] = useState(false);

  let addressContent;

  if (!isEditing) {
    addressContent = (
      <>
        {/* <div className="avatar__container">
          <div className="avatar__container-img">

            <div className="avatar__img">
              <img src={Camera} alt="" />
            </div>
            <div className="address__name">{address.name} </div>
          </div>

        </div> */}

        <div className="address__container">
          <div className="address__name">氏名 : {address.name} </div>
          <p>郵便番号 : 〒 {address.state} - {address.state_2}</p>
          <p>
            住所 : {address.address} {address.city} {address.country}
          </p>

          <p>電話番号 : {address.phone}</p>
          <div className="flex">
            <div className="button__style"
              onClick={() => setIsEditing(true)}
            >
              編集
            </div>
            <div className="button__style"
              onClick={() => deleteHandler(address.id, addresses, setAddresses)}
            >
              消去
            </div>
          </div>
        </div>
      </>
    );
  } else {
    addressContent = (
      <AddressForm
        defaultAddress={address}
        addresses={addresses}
        setAddresses={setAddresses}
        setDisplayFormToggle={setDisplayFormToggle}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    );
  }

  return <div className="address-container ">{addressContent}</div>;
};

export default AddressDisplay;
