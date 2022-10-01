import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, Component } from "react";

import Slider from "../../../features/Slider/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './ProjectOverview.css';


export const ProjectOverview = () => {




  return (
    <section className="po" style={{backgroundColor: "rgba(0,0,0,0.0)"}}>
      <div>
      <Slider/>
      </div>
    </section>

  );
}