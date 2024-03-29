import { useState } from "react"
import {IState as ListProps} from "../App"

interface Props {
    people: ListProps["people"],
    setPeople: React.Dispatch<React.SetStateAction<ListProps["people"]>>
}

const AddToList: React.FC<Props> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        note: "",

    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const handleClick = (): void => {
        if(
            !input.name ||
            !input.age ||
            !input.img
        ) {
            return
        }

        setPeople([
            ...people, 
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note,
            }
        ])

        setInput({
            name: "",
            age: "",
            img: "",
            note: "",
        })
    }

    return (
        <div className="AddToList">
            <input 
                type="text" 
                placeholder="name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input 
                type="text" 
                placeholder="age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <input 
                type="text" 
                placeholder="image url"
                className="AddToList-input"
                value={input.img}
                onChange={handleChange}
                name="img"
            />
            <textarea  
                placeholder="note"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            >
                Add to list
            </button>
        </div>
    )
}

export default AddToList
