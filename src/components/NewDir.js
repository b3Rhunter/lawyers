import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";
import "./dark-theme.css";
import "./posts.css";
import { Button, notification, Row, Col, Table } from "antd";
import { Navbar } from "../components/Navbar/Navbar.tsx";
import "../components/Home/Header/Header.css";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import "./newDir.css";
import { BsLinkedin, BsTwitter, BsFillEnvelopeFill } from "react-icons/bs";




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

      const [isActive, setIsActive] = useState(false);

   

      function email() {
        window.location.href = "mailto:"+dirData.author.email;
      }

      const Mailto = ({ email }) => {
        return (
          <a href={`mailto:${email}`}><BsFillEnvelopeFill/></a>
        );
      };


      return (
       
        <><Navbar/>

        <Row id="directory" style={{marginTop: "125px"}} justify="center">
          <Col span={24}>

            <div style={{textAlign: "center", fontSize: "3vw", fontFamily: "Rajdhani", paddingBottom: "20px", marginBottom: "24px", paddingTop: 20}} id="header">
            <span style={{borderBottom: "2px solid #00bbff"}}>Directory</span>
            </div>

            <Col  style={{padding: "24px"}} span={24}>
            {dirData &&
                dirData.map((author, index) => (

                  <Row style={{marginBottom: "24px"}} key={index}>
                  <Col id="accordion" className="accordion" span={8}>
                  <div id="accordion" className="accordion-item" onClick={() => setIsActive(!isActive)} style={{padding: "10px"}}>

                  <div className="toggle" style={{width: "20px", height: "20px", lineHeight: "0.75"}}>{isActive ? '-' : '+'}</div>          
        
                  </div>
                  </Col>
                  <Col span={8} pull={4}>
                    <span className="name" >
                    {author.name.length < 8
                ? `${author.name}`
                : `${author.name.substring(0, 8)}...`}
                    </span>
                  </Col>
                  <Col span={8}>
                    <span className="location">
                      {author.jurisdiction}
                    </span>
                  </Col>

                  {isActive &&
                  
                  <Row style={{marginTop: "24px", backgroundColor: "rgba(0,0,0,0.3)", padding: "10px", borderRadius: "10px"}}>
                   <Col  span={6}>
                   <div>
                      <img id="image" style={{ borderRadius: "100%" }} src={urlFor(author.image).url()} alt=""></img>
                   </div>
                   </Col>
                    <Col span={18}>
                      <div style={{marginBottom: "20px"}} id="subTitle">
                            {author.expertise}
                      </div>

                      <div id="subSubText">
                          <BlockContent
                            blocks={author.bio}
                            projectId={sanityClient.clientConfig.projectId}
                            dataset={sanityClient.clientConfig.dataset} />
                        </div>
                        
                      <Row style={{fontSize: "1vw", padding: "10px"}}>
                     
                            <Col style={{marginTop: "-2px"}} span={6}>
                            <Mailto email={author.email}>
                            </Mailto> 
                            </Col>
                       
                            <Col span={6}>
                              <a href={author.linkedin}><BsLinkedin /></a>
                            </Col>
                            <Col span={6}>
                              <a href={author.twitter}><BsTwitter /></a>
                            </Col>   
                            <Col span={6}>
                            <span style={{color: "#087bff"}}>{author.phone}</span>
                            </Col>  

           
                      
                        </Row>

                          
                      </Col>
                      </Row>
                        }
                  </Row>
                ))}
            </Col>
          </Col>
        </Row>        
      
        </>
      );
}