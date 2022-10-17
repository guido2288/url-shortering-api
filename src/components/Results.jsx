import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard"

export const Results = ({ inputValue }) => {

  const shortenLink = inputValue;

  const [result, setResult] = useState('');

  const [copy, setCopy] = useState(false);

  const [loading, setLoading] = useState(false);


  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);

      setResult(res.data.result.full_short_link);


    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {

    const timer = setTimeout(() => {
      setCopy(false)
    }, 1200);

    return () => clearTimeout(timer)

  }, [copy]);

  useEffect(() => {
    if (shortenLink.length) {
      fetchData();
    }

  }, [shortenLink])

  if (loading) {
    return <p>Loading...</p>
  }

  return (

    <>

      {result && (
        <>

          <div className="bg-GrayLight rounded-md px-4 py-2 mt-2  md:flex md:gap-4 md:mx-8">
            {shortenLink && <p className="py-2 md:w-3/5">{shortenLink}</p>}

            <hr className="w-full text-Gray md:hidden" />

            <h2 className="py-2 text-Cyan md:w-1/5">{result}</h2>

            <CopyToClipboard
              text={result}
              onCopy={() => setCopy(true)}
            >
              {
                copy
                  ? <button className="bg-Violet text-White w-full rounded-md py-2 font-bold md:w-1/5">Copied!</button>

                  : <button className="bg-Cyan text-White w-full rounded-md py-2 font-bold cursor-pointer hover:bg-CyanLigth md:w-1/5 ">Copy</button>
              }

            </CopyToClipboard>
          </div>
        </>

      )}


    </>


  )
}
