import { useState, useEffect } from "react";

function useDictionary(word) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    if (word) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {
        signal: abortCont.signal,
      })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("word not found");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          }
        });
    } else {
      setIsPending(false);
      setError(null);
    }
    // abort the fetch
    return () => {
      abortCont.abort();
      setIsPending(true);
      setError(null);
      setData(null);
    };
  }, [word]);

  return { data, isPending, error };
}

export default useDictionary;
