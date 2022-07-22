import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Tab_2 = () => {


    const storageName = JSON.parse(localStorage.getItem("names"))

    const [name, setName] = useState("")
    const [names, setNames] = useState(storageName ?? [])

    const storageContent = JSON.parse(localStorage.getItem("contents"))

    const [content, setContent] = useState("")
    const [contents, setContents] = useState(storageContent ?? [])

    const [number, setNumber] = useState(0)

    const [hoverStar, setHoverStar] = useState(undefined)

    const handleText = () => {
        switch (number || hoverStar) {
            case 0:
                return "Evaluate";
              case 1:
                return "Dissatifation";
              case 2:
                return "Unsatisfied";
              case 3:
                return "Normal";
              case 4:
                return "Satisfied";
              case 5:
                return "Very Satisfied";
              default:
                return "Evaluate";
        }
    }

    const handlePlaceHolder = () => {
        switch (number || hoverStar) {
            case 0:
                return "Comment here...";
            case 1:
            case 2:
            case 3:
            case 4:
                return "What is your problem?";
            case 5:
                return "Why do you like the product?";
            default:
                return "Comment here...";
        }
    }

    const handleSubmit = () => {
        setContents(prev => {
            const newContents = [...prev, content]

            const jsonContents = JSON.stringify(newContents)
            localStorage.setItem("contents", jsonContents)

            return newContents
        })
        setContent("")


        setNames(prev => {
            const newNames = [...prev, name]

            // save to localStorage
            const jsonNames = JSON.stringify(newNames)
            localStorage.setItem("names", jsonNames)

            return newNames
        })

        setName("")
    }



    return (
        <>
            <h1>{handleText}</h1>
            {Array(5)
                .fill()
                .map((_, index) =>
                    number >= index + 1 || hoverStar >= index + 1 ? (
                        <AiFillStar
                            onMouseOver={() => !number && setHoverStar(index + 1)}
                            onMouseLeave={() => setHoverStar(undefined)}
                            style={{ color: "#FF5050" }}
                            onClick={() => setNumber(index + 1)}
                        />
                    ) : (
                        <AiOutlineStar
                            onMouseOver={() => !number && setHoverStar(index + 1)}
                            onMouseLeave={() => setHoverStar(undefined)}
                            style={{ color: "#FF5050" }}
                            onClick={() => setNumber(index + 1)}
                        />
                    )
                )
            }

            <button className ={`${!number && "disabled"}`}>Submit</button>
            <div className='product-description__title'>
                商品のレビュー
            </div>
            <h1>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </h1>
            <div>
                {contents.map((content, index_1) => (
                    <p key={index_1}>{content}</p>
                ))}
            </div>
            <div className='product-description__content'>
                <div>
                    質問タイトル
                    <input type="text" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    質問内容
                    <textarea type="text" 
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                </div>

                <button className='submit__contact' onClick={handleSubmit}>
                    質問を投稿する
                </button>
            </div>
        </>
    )
}

export default Tab_2