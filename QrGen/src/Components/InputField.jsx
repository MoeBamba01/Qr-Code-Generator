import { useContext } from "react"
import { InputContext } from "../App"


const InputField = () => {

  const {inputValue, SetInputValue} = useContext(InputContext)
  const handleOnChange = e => SetInputValue ({...inputValue, url: e.target.value});

  return (
    <div>
      <label className='font-semibold text-md'
      > Your URL 
      <input 
        type="url"
        className='w-full border-2 py-1 px-3 text-gray-700 rounded-sm'
        placeholder='https://www.example.com'
        value={inputValue.url}
        onChange={handleOnChange}
      />
      </label>
    </div>
  )
}

export default InputField