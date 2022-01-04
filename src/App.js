// React
import { useEffect, useContext } from "react";
// Components
import SearchForm from "./components/SearchForm";
import LoadingSpinner from "./components/LoadingSpinner";
import Animated404 from "./components/Animated404";
import Message from "./components/Message";
import WordsList from "./components/WordsList";
// Hooks & Contexts
import useDictionary from "./hooks/useDictionary";
import { WordContext } from "./contexts/WordContext";
// CSS
import "./App.css";

function App() {
  const { word } = useContext(WordContext);

  const { error, isPending, data } = useDictionary(word);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <SearchForm />
      {isPending && <LoadingSpinner />}
      {error && error === "word not found" && <Animated404 />}
      {!data && !isPending && !error && (
        <Message message="You can start with searching a word!" />
      )}
      {data && <WordsList data={data} />}
    </div>
  );
}

export default App;
