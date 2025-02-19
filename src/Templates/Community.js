import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css Files/Community.css"
import PostLink from "./Components/PostLink";

function Community() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState("All");

  useEffect(() => {
    fetchPostData();
    createComment()
  }, []);

  function onChangeHandler(e) {
    e.preventDefault()
    if (e.target.localName === "select") {
      setTag(e.target.value);
      fetchPostData()
    }
  }

async function createComment() {

    try {
        const response = axios.post("http://127.0.0.1:8000/api/comments/create", {
            post : 1,
            posted_user : "Arda",
            comment : "Arda Bir İnsan"
        })
    } catch (e) {
        alert(e)
    }
    
}
const Posts = () =>{
  return data.results.map((item, index) => (<div key={index}><PostLink name={item.post_name} tag={item.tag}></PostLink></div>))
}
  async function fetchPostData() {
    setLoading(true);
    try {
      console.log(tag);
      const response = await axios.get(
        `http://127.0.0.1:8000/api/posts?tag=${tag}`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      alert("Veri Alımında Hata Oluştu.");
    }
    setLoading(false);
  }

  return (
    <>
      {loading && <> loading</>}
      {!loading && (
        <div>
          <select className="tag-select" value={tag} onChange={onChangeHandler}>
            <option value="All">Hepsi</option>
            <option value="Help">Yardım</option>
            <option value="General">Genel</option>
            <option value="Advise">Tavsiye</option>
          </select>
        </div>
      ) }
      {!loading && (
        <Posts></Posts>
      )}
      
    </>
  );
}
export default Community;
