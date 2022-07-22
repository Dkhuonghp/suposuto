import { useState } from "react";

import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { addFormHandler, editFormHandler } from "./utilities";
const AddressForm = ({
  defaultAddress,
  addresses,
  setAddresses,
  setDisplayFormToggle,
  isEditing = false,
  setIsEditing = null
}) => {
  // const dummyData = {
  //   name: "Poornima",
  //   phone: "9999999",
  //   city: "hyd",
  //   address: "PLOT 999",
  //   state: "Telangana",
  //   country: "India",
  // };
  const [formValues, setFormValues] = useState(defaultAddress);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setDisplayFormToggle(false);
    if (!isEditing) {
      addFormHandler(formValues, setAddresses);
      toast.success("お届け先を追加しました。", {
        position: "top-center",
        autoClose: 5000,
        style: {
            fontSize:"1.125rem",
            color:"green",
            boxShadow:"0 0 10px 4px #aeaeaeae",
        },
    })
    } else {
      editFormHandler(formValues, addresses, setAddresses);
      setIsEditing(false);
    }
  };
  return (
    <>
      <form className="form_container">

        <label htmlFor="">氏名</label>
        <input
          placeholder=""
          name="name"
          className="input"
          value={formValues.name}
          onChange={changeHandler}
        ></input>
        <label htmlFor="">電話番号</label>
        <input
          placeholder=""
          name="phone"
          className="input"
          value={formValues.phone}
          onChange={changeHandler}
        ></input>
        <label htmlFor="">郵便番号</label>

        <div className="state__flex">

          <input
            placeholder=""
            name="state"
            className="input"
            value={formValues.state}
            onChange={changeHandler}
          ></input>
          
          <input
            placeholder=""
            name="state_2"
            className="input"
            value={formValues.state_2}
            onChange={changeHandler}
          ></input>
        </div>
        {/* <label htmlFor="">地域</label>
        <select
          name="Country"
          className="input"
          value={formValues.country}
          onChange={changeHandler}
        >
          <option>大阪</option>
          <option>東京</option>
          <option>奈良</option>
          <option>名古屋</option>
        </select> */}
        <label htmlFor="">住所</label>
        <input
          placeholder=""
          name="address"
          className="input"
          value={formValues.address}
          onChange={changeHandler}
        ></input>
        <label htmlFor="">建物名/会社名(会社への配達の場合)</label>
        <input
          placeholder=""
          name="city"
          className="input"
          value={formValues.city}
          onChange={changeHandler}
        ></input>
        <label htmlFor="">部屋番号(数字は半角数字)</label>
        <input
          placeholder=""
          name="country"
          className="input"
          value={formValues.country}
          onChange={changeHandler}
        ></input>
    

        <div className="flex-row gap-s">
          <div onClick={submitHandler}  className="address__save">
            保存する
          </div>

          <Link to="/user">
            <div className="address__save">
              戻す
            </div>
          </Link>

          {/* <button
            onClick={(e) => {
              e.preventDefault();
              setFormValues(dummyData);
            }}
            className="btn btn-primary-outline"
          >
            Enter dummy values
          </button> */}
        </div>
      </form>
    </>
  );
};

export default AddressForm;
