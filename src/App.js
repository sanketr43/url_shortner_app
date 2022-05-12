import ShortUrl from "./components/short_url/short_url.component";
import LongUrl from './components/long_url/long_url.component';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShortUrl />} />
        <Route path="/:unique_code" element={<LongUrl />} />
      </Routes>
    </div>
  );
}

export default App;
