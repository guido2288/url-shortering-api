import { useState } from "react"
import { Results } from "./Results";


export const Shorter = () => {

  const [inputValue, setInputValue] = useState('');

  const [error, setError] = useState(false);

  const submitHandler = (e) => {

    e.preventDefault();
    const result = e.target.url.value

    if (result.trim() === '') {
      return setError(true)
    }
    setInputValue(result);
    setError(false)
  }


  return (

    <>
      <div className="bg-formMobile bg-no-repeat bg-Violet bg-cover bg-right-bottom px-4 py-8  rounded-md relative md:bg-formDesktop md:bg-center md:p-10 md:m-8">

        <form onSubmit={submitHandler} className="flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="rounded-md p-2 w-full placeholder:p-2 md:w-5/6"
            name="url"
          />

          <button
            type="submit"
            className="bg-Cyan hover:bg-CyanLigth text-White p-2 rounded-md w-full font-bold md:w-1/6"
          >Shorten It!</button>
        </form>

        {error && <p className="text-Red absolute">Please add a link</p>}

      </div>

      <Results inputValue={inputValue} />

    </>
  )
}
