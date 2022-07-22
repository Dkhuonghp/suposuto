import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { set } from '../redux/product-modal/productModalSlice'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'

import Nike from "../assets/images/products/nike-air.webp"

const ProductCard = props => {

    const dispatch = useDispatch()

    return (
        <div className="product-card">
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__image">
                    {/* <model-viewer className="scene__model" src={props.img03} ios-src={props.img02}></model-viewer> */}
                    <img src={props.img03} alt="image" />
                </div>
                <div>
                    <div className="product-card__name">{props.name}</div>
                    <div className="product-card__price">
                        ¥ {numberWithCommas(props.price)}
                    </div>
                </div>
            </Link>
            {/* <div className="product-card__btn">
                <Button
                    size="sm"    
                    icon="bx bx-cart"
                    animate={true}
                    onClick={() => dispatch(set(props.slug))}
                >
                    購入
                </Button>
            </div> */}
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    img03: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard
