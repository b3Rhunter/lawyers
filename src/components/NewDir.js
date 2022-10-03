import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";
import "./dark-theme.css";
import "./posts.css";
import { Button, notification, Row, Col } from "antd";
import { Navbar } from "../components/Navbar/Navbar.tsx";
import "../components/Home/Header/Header.css";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import "./newDir.css";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

export default function NewDir() {
    const [dirData, setNewDir] = useState(null);

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "author"]{
                name,
                bio,
                image,
                jurisdiction,
                expertise,
                email,
                phone,
                linkedin,
                twitter
              }`
          )
          .then((data) => setNewDir(data))
          .catch(console.error);
      }, []);
    
      console.log(dirData);

      return (
       
        <>
        
        <div className="min-h-screen p-12">

          <div className="container mx-auto">

        <div>
        <h3>
          <span  style={{
            fontFamily: "Rajdhani",
            fontSize: "3vw",
            borderBottom: "1px solid #00bbff",
            }}>Directory</span>

            </h3>
        </div>

            <div>
              {dirData &&
                dirData.map((author, index) => (
      
                  <span id="lawyer"
                    className="block relative rounded shadow "
                    key={index}
                  >
                    <div>
                    <p>
                    <span id="name" style={{color: "#fff", fontSize: "2vw"}}>
                        {author.name}
                    </span>
                
                    <span id="location" style={{color: "#fff", float: "right", fontSize: "2vw"}}>
                        {author.jurisdiction}
                    </span>
                    </p>
                    </div>
                    
                    <div id="content">
                    <div id="image">
                    <img style={{borderRadius: "100%"}} src={urlFor(author.image).url()} alt=""></img>
                    </div>
                    <p>{author.expertise}</p>
                    <BlockContent
                        blocks={author.bio}
                        projectId={sanityClient.clientConfig.projectId}
                        dataset={sanityClient.clientConfig.dataset}
                    />
                    <p>{author.email}</p>
                    <p>{author.phone}</p>
                    <p>
                    <span>
                    <a href={author.linkedin}><BsLinkedin/></a>
                    </span>
                    <span style={{paddingLeft: "10px"}}>
                    <a href={author.twitter}><BsTwitter/></a>
                    </span>
                    </p>
                    </div>
                  </span>
                ))}

            </div>


            
          </div>
        </div></>
      );
}