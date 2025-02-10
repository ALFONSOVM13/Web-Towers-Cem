'use client'
import { useRef, useState } from 'react'
import { BiX } from 'react-icons/bi'

export const InputTags = ({ value, onChange, placeholder, className = "", ...props }) => {

  const [inputText, setInputText] = useState('')
  const inputRef = useRef(null)



  const onRemoveTag = (tag) => {
    const currentTags = value

    if (currentTags.includes(tag)) {
      const sizesTags = currentTags.filter(t => t !== tag)
      onChange(sizesTags)
    }
  }


  const onAddNewTag = () => {

    const newTag = inputText.split(',')[0].toLocaleLowerCase().trim()

    if (newTag.trim() === '') { return setInputText('') }

    const currentTags = value

    if (currentTags.includes(newTag)) { return setInputText('') }

    onChange([...currentTags, newTag])
    setInputText('')
  }


  return (
    <ul className="relative flex items-center gap-2 flex-wrap w-full border p-2 rounded focus:outline-blue-800 hover:border-blue-800">
      {
        value.map(tag => (
          <li
            key={tag}
            className="flex items-center gap-2 rounded px-1 bg-gray-50"
          >
            <button
              type="button"
              onClick={()=> onRemoveTag( tag )}
              className="flex cursor-pointer p-[0.1rem] text-gray-500 hover:text-black"
            >
              <BiX />
            </button>
            <span>
              {tag}
            </span>
          </li>
        ))
      }
      <li className="flex-1">
        <input
          type="text"
          autoComplete="off"
          ref={inputRef}
          name="inputText"
          value={inputText}
          onChange={({ target }) => setInputText(target.value)}
          placeholder={value.length === 0 ? placeholder : ''}
          onKeyUp={({ code }) => code === 'Comma' ? onAddNewTag() : undefined}
          className="outline-none w-full min-w-[2.5rem]"
          {...props}
        />
      </li>
    </ul>
  )
}
