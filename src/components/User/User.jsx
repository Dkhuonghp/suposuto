import React from 'react'
import { Link } from 'react-router-dom'
import App from "../Address/App"
import UserAddress from "./UserAddress"
import Camera from "../../assets/images/products/camera.png"
import AddressForm from "../Address/AddressForm";
import { deleteHandler } from "../Address/utilities";
const User = () => {
    return (
        <>
            <div className="avatar__container">
                <div className="avatar__container-img">

                    <div className="avatar__img">
                        <img src={Camera} alt="" />
                    </div>
                </div>

            </div>
            <div className="user__container">
                <div className="address__title">お届け先住所</div>
                <UserAddress/>
            </div>
        </>
    )
}

export default User