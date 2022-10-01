import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./Slider.css";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Directory from "../../images/directory.svg";
import Management from "../../images/management.svg";
import Advice from "../../images/advice.svg";
import Discord from "../../images/discord.svg";
import Opinion from "../../images/opinion.svg";
import Events from "../../images/events.svg";

export default class Responsive extends Component {
  


  render() {
    var settings = {
      customPaging: function(i) {
        return (
         <p>.</p>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",

      arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        pauseOnHover: true,
 
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
          cssEase: "linear"
    }
    return (

        
<Container>
        <Row>
            <Col>
      <div id="MemberBenefits">
        <h2 style={{textAlign: "center", marginBottom: "35px"}}>
          <span className="underlined" style={{fontFamily: "Rajdhani-Light", fontSize: "1.5em"}}> Member</span> <span className="textGradient" style={{fontFamily: "Rajdhani", fontSize: "1.5em"}}>Benefits</span> </h2>
        
        <Slider {...settings} >
        <Link to="/directory" id="benefits" >
        <Card   id="cardStyle" sx={{ maxWidth: 345, maxHeight: 300, minHeight: 300, backgroundColor: "#000", border: "1px solid #368cff", borderRadius: "25px", padding: "10px" }}>

        <CardMedia
          component="img"
          height="200"
          image={Directory}
          alt="directory"

        />
        <CardContent className="cardDisplay">
        <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center"}}>
            Project Directory
          </Typography>
          <Typography variant="body2" color="#fff" style={{textAlign: "justify"}}>
            Meet our trailblazers. The featured lawyers are knowledgeable and tech-savvy,
           capable of providing world-class legal advice due to their qualifications and
            experience in advising Web3 companies and professionals.
        
          </Typography>
        </CardContent>
   
        </Card>
        </Link>

          <Card id="cardStyle" sx={{ maxWidth: 345, maxHeight: 300, minHeight: 300, backgroundColor: "#000", border: "1px solid #368cff", borderRadius: "25px", padding: "10px" }}>
   
            <CardMedia
          component="img"
          height="200"
          image={Management}
          alt="management"
            />
            <CardContent className="cardDisplay">
            <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center"}}>
            Project Management Tool
          </Typography>
          <Typography variant="body2" color="#fff" style={{ textAlign: "justify"}}>
          Freely collaborate and manage international projects through a 
          Web3-native project management tool.
          </Typography>
        </CardContent>
  
          </Card>

    
          <Card id="cardStyle" sx={{ maxWidth: 345, maxHeight: 300, minHeight: 300, backgroundColor: "#000", border: "1px solid #368cff", borderRadius: "25px", padding: "10px" }}>
        
            <CardMedia
          component="img"
          height="200"
          image={Advice}
          alt="advice"
            />
            <CardContent className="cardDisplay">
            <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center"}}>
            Free Advice Policy
          </Typography>
          <Typography variant="body2" color="#fff" style={{ textAlign: "justify"}}>
          Contact other members for straightforward legal advice.
          </Typography>
        </CardContent>
  
          </Card>

          <a href="https://discord.gg/ZhpYndq8" target="_blank" rel="noreferrer">
          <Card id="cardStyle" sx={{ maxWidth: 345, maxHeight: 300, minHeight: 300, backgroundColor: "#000", border: "1px solid #368cff", borderRadius: "25px", padding: "10px" }}>

            <CardMedia
          component="img"
          height="200"
          image={Discord}
          alt="discord"
            />
            <CardContent className="cardDisplay" >
            <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center"}}>
            Members-Only Discord
          </Typography>
          <Typography variant="body2" color="#fff" style={{ textAlign: "justify"}}>
          Be a part of ongoing discussions on current news and trends and make personal connections with other members.
          </Typography>
        </CardContent>

          </Card>
          </a>
          <Card id="cardStyle" sx={{ maxWidth: 345, maxHeight: 300, minHeight: 300, backgroundColor: "#000", border: "1px solid #368cff", borderRadius: "25px", padding: "10px" }}>
  
            <CardMedia
          component="img"
          height="200"
          image={Opinion}
          alt="opinion"
            />
            <CardContent className="cardDisplay">
            <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center"}}>
            Opinion Pieces
          </Typography>
          <Typography variant="body2" color="#fff" style={{ textAlign: "justify"}}>
          Write opinion articles on specialized media outlets and in our online newsletter.
          </Typography>
        </CardContent>
  
          </Card>

   
          <Card id="cardStyle" sx={{ maxWidth: 345, maxHeight: 300, minHeight: 300, backgroundColor: "#000", border: "1px solid #368cff", borderRadius: "25px", padding: "10px" }}>
   
            <CardMedia
          component="img"
          height="200"
          image={Events}
          alt="events"
            />
            <CardContent className="cardDisplay">
            <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center"}}>
            Events
          </Typography>
          <Typography variant="body2" color="#fff" style={{textAlign: "justify"}}>
          Attend our members-only seminars and conferences and benefit from our guidelines and informative materials on legal developments. Share knowledge and business experiences, but, most importantly, connect.
          </Typography>
        </CardContent>

          </Card>
        </Slider>
      </div>
      </Col>
      </Row>
      </Container>

    );
  }
}