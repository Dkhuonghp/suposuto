import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux'

import { addItem } from '../redux/shopping-cart/cartItemsSlide'
import { remove } from '../redux/product-modal/productModalSlice'

import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'

const ProductView = props => {

    const dispatch = useDispatch()

    let product = props.product

    if (product === undefined) product = {
        title: "",
        price: '',
        image01: null,
        image02: null,
        categorySlug: "",
        colors: [],
        slug: "",
        size: [],
        description: ""
    }
    //notifycation
    // const notify = () => toast("Successfully toasted!")

    const [previewImg, setPreviewImg] = useState(product.image01)

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)

    const [quantity, setQuantity] = useState(1)

    const [checkSize, setCheckSize] = useState("checksize")

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

    const check = () => {
        if (color === undefined) {
            toast.error("色を選んでください!", {
                autoClose: 5000,
                style: {
                    fontSize:"1.125rem",
                    color:"red",
                    boxShadow:"0 0 10px 4px #aeaeaeae",
                },
            })
            return false
        }

        if (size === undefined) {
            toast.error("サイズを選んでください!", {
                autoClose: 5000,
                style: {
                    fontSize:"1.125rem",
                    color:"red",
                    boxShadow:"0 0 10px 4px #aeaeaeae",
                    
                },
            })
            return false
        }

        return true
    }
    const checkSaved = () => {
        if (color === undefined) {
            return true
        }

        if (size === undefined) {
   
            return true
        }

        return true
    }

    const addToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity
            }
            if (dispatch(addItem(newItem))) {
                toast.success("カートに追加しました。", {
                    position: "top-center",
                    autoClose: 5000,
                    style: {
                        fontSize:"1.125rem",
                        color:"green",
                        boxShadow:"0 0 10px 4px #aeaeaeae",
                    },
                })
            } else {
                alert('Fail')
            }
        }
    }

    const goToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity
            }
            if (dispatch(addItem(newItem))) {
                dispatch(remove())
                props.history.push('/cart')
            } else {
                alert('Fail')
            }
        }
    }

    return (
        <div className="product">
            <div className="product__images">
                {/* <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
                        <model-viewer src={product.image02} camera-controls ar ios-src={product.image02}></model-viewer>
                    </div>
                </div> */}
                <div className="product__images__main">
                    {/* <img src={previewImg} alt="" /> */}
                    <model-viewer className="scene__model" src={product.image01} camera-controls ar ios-src={product.image02}></model-viewer>
                </div>
            </div>
            <div>
                <div className="product__title">
                    <h1 className="product__info__title">{product.title}</h1>
                    <i className="bx bx-heart"></i>
                </div>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        ¥ {numberWithCommas(product.price)}
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title" onChange={() => check()}>
                        カラーを選択
                    </div>
                    {/* {check()} */}
                    <div className="product__info__item__list">
                        {
                            product.colors.map((item, index) => (
                                <>
                                    <div key={index} className={`product__info__item__list__item ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                                        {/* <div className={`circle`}></div> */}
                                        <model-viewer src={product.image01}></model-viewer>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        サイズを選択
                    </div>
                    <div className="product__size">
                        {
                            product.size.map((item, index) => (
                                <div key={index} className={`product__border ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                    <span className="product__info__item__list__item__size">
                                        {item} cm
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        数量
                    </div>
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn left" onClick={() => updateQuantity('minus')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div className="product__info__item__quantity__btn right" onClick={() => updateQuantity('plus')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <Button onClick={() => addToCart()}>カートに入れる</Button>
                    
                    <Button onClick={() => goToCart()}>すぐ購入する</Button>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default withRouter(ProductView)
