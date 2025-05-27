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


// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

  return (
    <div className="bg-blue-100 flex justify-center">
      <div className="lg:w-9/10">
        <ul className="p-5 flex flex-wrap justify-center  gap-3">
          {item.map((element, index) => (
            <li key={index}>
                <div className=" flex flex-col justify-between h-[30vh]  w-[35vh] p-3 rounded bg-white  hover:translate-1 shadow-2xl">
                    <h1><span className="font-bold">{element.title}</span></h1>
                    <Link className="rounded p-1 text-white bg-blue-500 hover:bg-blue-900 text-center" to={`${element.id}`}>Read more</Link>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
