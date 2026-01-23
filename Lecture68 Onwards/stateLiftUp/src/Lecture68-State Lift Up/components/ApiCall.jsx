import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiCall() {
  const [resp, setRes] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const[loading,setLoading]=useState(false);


  const handleApi = async () => {
    // const res = await fetch('https://picsum.photos/200');
    // res.json();
    // setRes(res);
    try {
      const res = await axios.get("https://picsum.photos/200");
      // Picsum.photos returns a redirect, so the original URL can be used
      setImgUrl(res.config.url ); // force new image each click
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=>{
    handleApi();
  },[])
  console.log(resp);


  return (
    <div className="min-h-screen">
      <button onClick={handleApi}>Click me </button>
      <div>{imgUrl && <img src={imgUrl} alt="Random" />}</div>
    </div>
  );
}

export default ApiCall;
