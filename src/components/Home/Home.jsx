import React from "react";
import { useState, useEffect } from "react";
import { Main } from "./Styled-Home";
import img1 from "./Images/img1.png";
import img2 from "./Images/img2.png";
import img3 from "./Images/img3.png";
import img4 from "./Images/img4.png";

import { Link } from "react-router-dom";
import "./Home.css";
import { FaStar } from "react-icons/fa";

export default function Home() {
  const [apidata, setData] = useState([]);


  useEffect(() => {
      const url = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";

      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json);
              setData(json);
          } catch (error) {
              console.log("error", error);
          }
      };

      fetchData();
  }, []);
      return (
    <Main>
      <section id="homepage">
        <div>
          <h1>Lowest Prices</h1>
          <h1>Best Quality Shopping</h1>
          <p>25+ Crores worth Rewards | 500 Winners every Hour</p>
          <button>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJqSURBVHgBrZRPaxNBGMbfmd1oG+KfFBGpCBtBUPBgoB49BEzxpNSLx/YqXhJtTxqr/QLJfoKkX0ByEaQVDEIpAUtKBS2I3VgjWGLcEJq02Sb7OrNlY5pskk12H1hmdt6Z5zfz7B8yr6wt3vQUIyFvPq8TnAn4o3lwUWR+Zw1558apPxD2KgAIqSbF126BqNn5ql2A7OFlhoQ5AcmHgirPggui7TfZw8ljCICkI6Z2/yYURY3fAgeinQNtEAPETpPbLSWSDCSBGwALSCu2H6V4BNwAmJDN+qX2IYkQEuex/VLlB+AUwPXx4Irx8DskNRHTdmOjgyas1gJWEDO23E9VXgQnABNSaJyxKp1HxFc8NlV5MjsygOtt9RoUm17L2lhtT/KVv6UauXASc/ekkQB1FODN/vUuiEerwLnSltFHIHMN0JWj3HQrttavwq7O0jo89G2zVjPMJ/ayQPWjrnkEIM+aqO0TmKrop42TVLUm+IsbluZcbNcSu5JDA7iECsDFtG60/cROUR4a4N+vw+P3X2CiSEFYvw1QG+8xEzMC0NBQANPcX60f7/BgvAvCs2fXjCe4GiLBd3nbgDGtccK8Zcghn4IADQ/ftSyAFhSDK2mzLjoxb0Eqvoy4cjdKnkc3O2u2ANx8Uq1ZlcrMPkJiz5Z7rR0Y0aP17z3MUYYmDZDY0+V+68VB5lM7xU7jDFDBMo6hANNbhU5zlcUR7ReHlWgv8/DngnnLPkhMsDiuDorDSmIfczTiAFwisYUMjCixh7kKRF8iLxYS4FAUjVcN4M72b27+Pw4XzLlEgro8pZRe3t9QMk7jsNI/SVwmYkYExSAAAAAASUVORK5CYII="
              alt=""
            />
            Download the <span> Meesho App</span>
          </button>
        </div>
        <div>
          <img
            src="https://images.meesho.com/images/marketing/1651230340362.webp"
            alt=""
          />
        </div>
      </section>
      <div id="h1-line">
        <hr />
        <h1>Top Categories to choose from</h1>
        <hr />
      </div>
      <div id="image-container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
      <div id="h1-line2">
        <hr />
        <h1>Top Products for You!!!</h1>
        <hr />
      </div>

      <section id="products">
        {apidata.map(
            (
              data,idx
            ) => (
              <Link to={`/product/${data.id}`}>
                <div key={data.idx}>
                  <img src={data.image} alt="" className="main-img" />
                  <p className="quantity">
                    + {Math.floor(Math.random() * 7) + 1} More
                  </p>
                  <p className="product-name">{data.title}</p>
                 
                  <p className="price">
                    ₹{data.price} 
                  </p>
                  <p className="rating">
                    <span
                      style={{
                        backgroundColor:
                          data.rating >= 3.5 ? " #23bb75" : "rgb(244, 182, 25) ",
                      }}
                    >
                      {data.rating.rate} <FaStar color="#fff" />
                    </span>{" "}
                    {data.rating.count} Reviews
                  </p>
                    </div>
              </Link>
            )
          )}
      </section>
    </Main>
  );
}
