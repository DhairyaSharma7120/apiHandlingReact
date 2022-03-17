import React, { useState, useEffect } from "react";
import moment from "moment";
import "./fetchedData.css";

function FetchedData({ searchKeyword }) {
  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [post, setPosts] = useState([]);
  useEffect(() => {
    let searchedDataArray = data
      ?.map((ele) => {
        if (ele?.title?.search(searchKeyword) >= 0) {
          return ele;
        }
      })
      .filter(Boolean);
    setSearchedData(searchedDataArray);
  }, [searchKeyword]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then((res) => res.json())
      .then((result) => {
        result = result.splice(4990);
        console.log(result);
        setData(result);
        setSearchedData(result);
      })
      .catch((err) => console.error(err));

    fetch("http://localhost:3001/posts/get-all-posts")
      .then((res) => res.json())
      .then((result) => {
        console.log(result?.data);
        setPosts(result?.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {post?.map((ele, index) => {
        return (
          <div key={index} className="dataCards">
            <img src={data[index]?.thumbnailUrl} />
            <div className="itemDetails">
              <label id={"label" + (index + 1)}>
                Description: {ele?.description}
              </label>
              <label id={"label" + (index + 1)}>
                Created Date: {moment(ele?.datetimeCreated).format("DD-MM-YYYY")}
              </label>
              
              <label id={"label" + (index + 1)}>
                Created Time: {moment(ele?.datetimeCreated).format("hh:mm A")}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FetchedData;
