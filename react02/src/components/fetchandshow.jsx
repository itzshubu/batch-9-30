import { useEffect, useState } from "react";

function fetchandshow() {
  const [data, setdata] = useState([]);

  async function fetchdata() {
    let response = await fetch("https://fakestoreapi.com/products");
    let apidata = await response.json();
    // console.log(apidata)
    setdata(apidata);
  }

  console.log("dataaaaaaaaa");

  useEffect(() => {
    fetchdata();
    console.log(" i am in useeffect");
  }, []);

  return (
    <>
      <div>
        {data.map((product) => {
          return (
            <div className="card" key={product.id}>
              <img src={product.image} alt="" />
              <h2>{product.title}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default fetchandshow;
