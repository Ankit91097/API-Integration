import axios from "axios";
import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);
  const Click = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    const responsedata = response.data;
    setData(responsedata);
    console.log(data);
  };
  return (
    <div>
      <button
        onClick={Click}
        className="px-5 py-3 m-5 border-2 border-black rounded bg-teal-400"
      >
        Get Data
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 py-3">
  {data.map((elem, idx) => (
    <Card key={idx} photo={elem.download_url} name={elem.author} />
  ))}
</div>

    </div>
  );
};

export default App;
