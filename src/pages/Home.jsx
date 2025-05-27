import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

function Home() {

  const [item, setItem] = useState([]);

  useEffect(() => {
    console.log("hello")
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setItem(data)
      })
  }, [])

  return (
    <div className="bg-blue-100 flex justify-center">
      <div className="lg:w-9/10">
        <ul className="p-5 flex flex-wrap justify-center  gap-3">
          {item.map((element, index) => (
            <li key={index}>
                <div className=" flex flex-col justify-between h-[50vh]  w-[35vh] p-3 rounded bg-white  hover:translate-1 shadow-2xl">
                    <h1><span className="font-bold">{element.title}</span></h1>
                    <div className="flex flex-col gap-5">
                      <img className="rounded-xl" src="https://images.pexels.com/photos/31913883/pexels-photo-31913883/free-photo-of-scenic-mountain-landscape-with-grazing-horses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                      <Link className="rounded p-1 text-white bg-blue-500 hover:bg-blue-900 text-center" to={`${element.id}`}>Read more</Link>
                    </div>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
