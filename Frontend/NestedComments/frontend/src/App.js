import { useState } from "react";
import "./App.css";
import Comments from "./components/Comments";

const comments = {
  id: 1,
  items: [
    {
      id: 1234,
      name: "hello",
      items: [
        {
          id: 12345,
          name: "hello world",
          items: [],
        },
      ],
    },
    {
      id: 12345,
      name: "react js",
      item: [
        {
          id: 12365,
          name: "mern",
          item: [],
        },
      ],
    },
  ],
};

function App() {
  const [commentsData, setCommentsData] = useState(comments);
  return (
    <div className="App">
      <Comments comments={commentsData} />
    </div>
  );
}

export default App;
