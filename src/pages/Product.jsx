import React, { useState } from 'react'

import Helmet from '../components/Helmet'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'
import productData from '../assets/fake-data/products'
import Button from '../components/Button'

//!Tablist
import Tab_2 from '../components/Tabs/Tab_2'
import CommentApp from '../components/Comment/CommentApp'
import Modal from "../components/Modal/OpenModal"
const Product = props => {

    const [ index, setIndex ] = useState(0)

    const product = productData.getProductBySlug(props.match.params.slug)

    const [descriptionExpand, setDescriptionExpand] = useState(false)
    const [descriptionExpand_2, setDescriptionExpand_2] = useState(false)
    const [descriptionExpand_3, setDescriptionExpand_3] = useState(false)


    const relatedProducts = productData.getProducts(8)

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [product])

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
            <Section>
                {/* //!TabsList */}
                
                <div className='Tabs'>
                    <div className="tabs__list">
                        <div className={`tabs__list__head ${ index === 0 ? "active" : null} `} onClick={() => {setIndex(0)}}>商品詳細</div>
                        <div className={`tabs__list__head ${ index === 1 ? "active" : null} `}  onClick={() => {setIndex(1)}}>クチコミ</div>
                        <div className={`tabs__list__head ${ index === 2 ? "active" : null} `}  onClick={() => {setIndex(2)}}>お問い合わせ</div>
                        <div className={`tabs__list__head ${ index === 3 ? "active" : null} `}  onClick={() => {setIndex(3)}}>オススメ</div>
                    </div>

                    {/* //!商品詳細 */}
                    <div className="tabs__content" hidden={index !== 0}>
                        <div className='product-description__title'>
                            商品情報
                        </div>
                        <ul>
                            <li>メーカー : NIKE</li>
                            <li>サイズ : 22.0cm~</li>
                            <li>原産国 : 日本</li>
                            <li>出荷元 : quon shoes</li>
                            <li>販売元 : quon shoes</li>
                        </ul>

                        <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                        <div>
                            <Section>
                                <div className="product-description__title">
                                    この商品の他にこの商品も見ています。
                                </div>
                                <SectionBody>
                                    <Grid
                                        col={4}
                                        mdCol={2}
                                        smCol={1}
                                        gap={20}
                                    >
                                        {
                                            productData.getProducts(20).map((item, index) => (
                                                <ProductCard
                                                    key={index}
                                                    img01={item.image01}
                                                    img02={item.image02}
                                                    img03={item.image03}
                                                    name={item.title}
                                                    price={Number(item.price)}
                                                    slug={item.slug}
                                                />
                                            ))
                                        }
                                    </Grid>
                                </SectionBody>
                            </Section>
                        </div>
                    </div>

                    {/* //! クチコミ */}
                    <div className="tabs__content" hidden={index !== 1}>
                        <CommentApp/>
                        {/* <Modal/> */}
                        {/* <SheetModal/> */}
                    </div>

                    {/* //! Contacts */}
                    <div className="tabs__content" hidden={index !== 2}>
                        <div className="tabs__contact__title" onClick={() => setDescriptionExpand(!descriptionExpand)}>{product.contactTitle_1}
                            <div className="product-description__toggle">
                                <div size="sm">
                                    {
                                        descriptionExpand ?  <i className='bx bx-chevron-up'></i> : <i className='bx bx-chevron-down'></i>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                            <div className="tabs__contact__content">{product.contactContent_1}</div>
                        </div>
                        <div className="tabs__contact__title" onClick={() => setDescriptionExpand_2(!descriptionExpand_2)}>{product.contactTitle_2}
                            <div className="product-description__toggle">
                                <div size="sm" onClick={() => setDescriptionExpand_2(!descriptionExpand_2)}>
                                    {
                                        descriptionExpand_2 ?  <i className='bx bx-chevron-up'></i> : <i className='bx bx-chevron-down'></i>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`product-description mobile ${descriptionExpand_2 ? 'expand' : ''}`}>
                            <div className="tabs__contact__content">{product.contactContent_2}</div>
                        </div>
                        <div className="tabs__contact__title" onClick={() => setDescriptionExpand_3(!descriptionExpand_3)}>{product.contactTitle_3}
                            <div className="product-description__toggle">
                                <div size="sm" onClick={() => setDescriptionExpand_3(!descriptionExpand_3)}>
                                    {
                                        descriptionExpand_3 ?  <i className='bx bx-chevron-up'></i> : <i className='bx bx-chevron-down'></i>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`product-description mobile ${descriptionExpand_3 ? 'expand' : ''}`}>
                            <div className="tabs__contact__content">{product.contactContent_3}</div>
                        </div>

                        <button className='submit__contact'>
                            質問を投稿する
                        </button>
                        
                    </div>
                    <div className="tabs__content" hidden={index !== 3}>
                        <Section>
                            <SectionTitle>
                                オススメの人気商品
                            </SectionTitle>
                            <SectionBody>
                                <Grid
                                    col={4}
                                    mdCol={2}
                                    smCol={1}
                                    gap={20}
                                >
                                    {
                                        productData.getProducts(20).map((item, index) => (
                                            <ProductCard
                                                key={index}
                                                img01={item.image01}
                                                img02={item.image02}
                                                img03={item.image03}
                                                name={item.title}
                                                price={Number(item.price)}
                                                slug={item.slug}
                                            />
                                        ))
                                    }
                                </Grid>
                            </SectionBody>
                        </Section>
                    </div>

                </div>
            </Section>


            {/* <Section>
                <h3 className='product-description__title'>
                    関連商品
                </h3>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProducts.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />   
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section> */}
        </Helmet>
    )
}

export default Product
