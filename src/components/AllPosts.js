import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";
import "./dark-theme.css";
import "./posts.css";
import { Button, notification } from "antd";
import { Navbar } from "../components/Navbar/Navbar.tsx";
import "../components/Home/Header/Header.css"

export default function AllPosts() {
    const [allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                  asset->{
                    _id,
                    url
                  }
                }
              }`
          )
          .then((data) => setAllPosts(data))
          .catch(console.error);
      }, []);
    
      console.log(allPostsData);

      return (
       
        <><Navbar/>
        
        <div className="min-h-screen p-12">

          <div className="container mx-auto">

          <h1 style={{
            fontFamily: "Rajdhani",
            padding: "10px",
            
            }}>Articles</h1>

            <div style={{marginTop: "50px"}} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPostsData &&
                allPostsData.map((post, index) => (
                  <Link to={"/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 " style={{ borderColor: "#313131" }}
                    key={index}
                  >
                    <img
                      className="w-full h-full rounded-r object-cover absolute"
                      src={post.mainImage.asset.url}
                      alt=""
                      style={{paddingTop: "0px", marginTop: "0px"}}
                      />
                    <span className="block relative h-full flex justify-start items-start pr-4 pb-4">

                      <h2 className="text-gray-800 text-lg font-bold px-3 py-3 text-red-100 flag" style={{ backgroundColor: "#313131" }}>
                        {post.title}
                      </h2>

                    </span>
                  </span>
                  </Link>
                ))}

            </div>
          </div>
        </div></>
      );
}