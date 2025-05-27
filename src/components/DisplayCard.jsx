import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router";

function DisplayCard() {
  const [item, setItem] = useState([]);

  const { id } = useParams();

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
    <div className="flex flex-col items-center gap-3  h-screen bg-linear-to-r from-gray-300 to-blue-300 shadow-2xl">
      <Link to={"../"} className="my-5 rounded p-1 w-30 lg:text-xl text-white bg-blue-500 hover:bg-blue-900 text-center">Go Back</Link>
      <div className="p-3 lg:w-8/10">
        <div className="flex flex-col items-center gap-5 py-5 bg-white rounded-xl p-3">
          <h1><span className="font-bold text-2xl">{item.title}</span></h1>
          <img className="rounded-xl lg:w-5/10" src="https://images.pexels.com/photos/31913883/pexels-photo-31913883/free-photo-of-scenic-mountain-landscape-with-grazing-horses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          <h1>{item.body}</h1>
        </div>
      </div>
    </div>
  );
}

export default DisplayCard;
