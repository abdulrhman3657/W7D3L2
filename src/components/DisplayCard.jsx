import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

function DisplayCard() {
  const [item, setItem] = useState([]);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    console.log("hello");
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, [id]);

  return (
    <div className="flex justify-center bg-blue-100 h-screen shadow-2xl">
      <div className="p-3 lg:w-8/10">
        <div className="flex flex-col items-center gap-5 py-5 bg-white rounded-xl p-3">
          <h1><span className="font-bold text-2xl">{item.title}</span></h1>
          <h1>{item.body}</h1>
        </div>
      </div>
    </div>
  );
}

export default DisplayCard;
