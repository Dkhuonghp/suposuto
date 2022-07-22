import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import ProductCard from '../components/ProductCard'
import Grid from '../components/Grid'

import Helmet from '../components/Helmet'
import CartItem from '../components/CartItem'
import Button from '../components/Button'
import productData from '../assets/fake-data/products'
import numberWithCommas from '../utils/numberWithCommas'
import Cart_image from "../../src/assets/images/products/cart.png"
import Payment from "./Payment"

const Cart = props => {

    const product = productData.getProductBySlug(props.match.params.slug)

    const relatedProducts = productData.getProducts(8)
    // const [products, setProducts] = useState(DATA);
    // const [totalCost, setTotalCost] = useState(0);
    const [totalVoucher, setTotalVoucher] = useState(0);
    // const [modalDeleteState, setModalDeleteState] = useState("");
    const [voucherInputValue, setVoucherInputValue] = useState("");
    const [alertResult, setAlertResult] = useState("");
    const [resultVoucher, setResultVoucher] = useState("");
    const [resultApplyVoucherClass, setResultApplyVoucherClass] = useState(
      "hide"
    );
    const [totalVoucherClass, setTotalVoucherClass] = useState("hide");

    const updateVoucherInput = (e) => {
        setVoucherInputValue(e.target.value);
        setAlertResult("");
        setResultVoucher("");
    };

    const applyVoucher = () => {
        setResultApplyVoucherClass("");
        if (voucherInputValue === "") {
            setAlertResult("コードを入力してください");
            setResultVoucher("");
        } else if (voucherInputValue !== "123") {
            setAlertResult("入力したクーポン番号が認識されません。番号をもう一度ご確認のうえ、再入力してください。");
            setResultVoucher("");
            if (voucherInputValue !== "abc") {
                setAlertResult("入力したクーポン番号が認識されません。番号をもう一度ご確認のうえ、再入力してください。");
                setResultVoucher("");
            } else {    
                setResultApplyVoucherClass("pass");
                setAlertResult("クーポンを追加しました。");
                setResultVoucher("割引 10%");
                setTotalVoucherClass("");
                setTotalVoucher(Math.round((totalPrice) / 10));
            }
        } else {
            setResultApplyVoucherClass("pass");
            setAlertResult("クーポンを追加しました。");
            setResultVoucher("割引 ¥2000");
            setTotalVoucherClass("");
            setTotalVoucher(2000);
        }
    };


    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])

    return (
        <Helmet title="Cart">
            <div className="cart">
                <>
                    {cartItems.length >= 1 && (
                        <>
                            <h1>購入手続き</h1>

                            <div className="cart__info">
                                
                                <div className="cart__info__txt">

                                    <Payment
                                        totalCost={totalPrice.toLocaleString("jpy")}
                                        totalVoucher={totalVoucher.toLocaleString("jpy")}
                                        totalPayment={Math.round(
                                        (totalPrice - totalVoucher) * 1.1
                                        ).toLocaleString("jpy")}
                                        updateVoucherInput={(e) => updateVoucherInput(e)}
                                        applyVoucher={applyVoucher}
                                        alertResult={alertResult}
                                        resultVoucher={resultVoucher}
                                        resultApplyVoucherClass={resultApplyVoucherClass}
                                        totalVoucherClass={totalVoucherClass}
                                        totalTax={Math.round((totalPrice) / 10).toLocaleString("jpy")}
                                    />

                                    <div className="cart__info__txt__price">
                                        <h2>合計</h2> 
                                        <h2>¥ {numberWithCommas(Number(Math.round((totalPrice) * 1.1) - totalVoucher))}</h2>
                                    </div>
                                </div>
                                <div className="pay__btn">
                                    <Link to="/cart">
                                        <Button size="block">
                                            戻す
                                        </Button>
                                    </Link>
                                    <Link to = '/payment'>
                                    
                                        <Button size="block">
                                            購入する
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                </>
            </div>
        </Helmet>
        
    )
}

export default Cart
