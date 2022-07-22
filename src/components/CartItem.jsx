import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { updateItem, removeItem } from '../redux/shopping-cart/cartItemsSlide'

import numberWithCommas from '../utils/numberWithCommas'
import Modal from './Modal/Modal'
import { Link } from 'react-router-dom'
// import Button from './Button'

const CartItem = (props) => {
    const [modalOpen, setModalOpen] = useState(false)

    const dispatch = useDispatch()

    const itemRef = useRef(null)

    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])

    const updateQuantity = (opt) => {
        if (opt === '+') {
            dispatch(updateItem({...item, quantity: quantity + 1}))
        }
        if (opt === '-') {
            dispatch(updateItem({...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1}))
        }
    }

    // const updateCartItem = () => {
    //     dispatch(updateItem({...item, quantity: quantity}))
    // }

    const removeCartItem = () => {
        console.log('removeCartItem')
        dispatch(removeItem(item))
    }

    return (
        <>
            <div className="cart__item" ref={itemRef}>
                <div className="cart__item__image">
                    {/* <img src={item.product.image01} alt="" /> */}
                    <model-viewer className="scene__model" src={item.product.image01} camera-controls ar ios-src={item.product.image02}></model-viewer>
                </div>
                <div className="cart__item__info">
                    <div className="cart__item__info__name">
                        <Link to={`/catalog/${item.slug}`}>
                            <div className='cart__item__info__title'>{`${item.product.title}`}</div>
                            <div className='cart__item__info__color'>カラー：{`${item.color}`}</div>
                            <div className='cart__item__info__price'>サイズ：{`${item.size}`} 
                                <span class="test-stock" style={{color:"rgb(115, 169, 98)", marginLeft:"10px",}}>在庫あり 
                                <i className='bx bx-check'></i></span>
                            </div>
                        </Link>
                    </div>
                    {/* <div className="cart__item__info__price">
                        ¥ {numberWithCommas(item.price)}
                    </div> */}
                    <div className="cart__item__info__quantity">
                        <div className="product__info__item__quantity">
                            <div className="product__info__item__quantity__btn left" onClick={() => updateQuantity('-')}>
                                <i className="bx bx-minus"></i>
                            </div>
                            <div className="product__info__item__quantity__input">
                                {quantity}
                            </div>
                            <div className="product__info__item__quantity__btn right" onClick={() => updateQuantity('+')}>
                                <i className="bx bx-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="cart__item__icon">

                        <div className="cart__item__icon__her">
                            <i className="bx bx-heart"></i>
                        </div>
                        <div className="cart__item__icon__del" onClick={() => removeCartItem()}>
                            <i className='bx bx-trash'></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem
