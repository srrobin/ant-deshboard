import { Col, Row, Space } from 'antd';
import React from 'react';
 import TypeBox from '../../components/TypeBox';
 import { FaHtml5 } from "react-icons/fa";
 import { FaCss3Alt } from "react-icons/fa";
 import { SiJavascript } from "react-icons/si";
 import { FaPython } from "react-icons/fa6";

import { SiPhp } from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { DiRuby } from "react-icons/di";
const TypeThree = () => {

    return (
        <Space 
        direction="vertical"
        size="middle"
        style={{
          display: 'flex',
        }}
        >
           <Row gutter={[16, 16]} > 

                <Col xs={24} sm={24} md={12}  lg={6} style={{ display:"flex" }}>
                <TypeBox 
                icon = {<FaHtml5/>}
                iconBg="#673AB7"
                title="HTML  !!"
                desc="A standard markup language used to create and structure content on the web."
                />                      
                </Col>
                    
                <Col xs={24} sm={24} md={12}  lg={6} style={{ display:"flex" }}>
                <TypeBox 
                icon = {<FaCss3Alt/>}
                iconBg="#3F51B5"
                title="CSS   !!"
                desc="A stylesheet language used to describe the presentation of a web page"
                /> 
                </Col>
                    
                <Col xs={24} sm={24} md={12}  lg={6} style={{ display:"flex" }}>
                <TypeBox 
                icon = {<SiJavascript/>}
                iconBg="#FF9800"
                title="JavaScript   !!"
                desc="A programming language primarily used to create dynamic and interactive elements"
                />
                </Col>
                    
                <Col xs={24} sm={24} md={12}  lg={6} style={{ display:"flex" }}>
                <TypeBox 
                icon = {<IoLogoReact/>}
                iconBg="#311B92"
                title="React.js   !!"
                desc="A programming language primarily used to create dynamic and interactive elements"
                />
                </Col>

           </Row>
           <Row gutter={[16, 16]} >
                <Col xs={24} sm={24} md={24}  lg={12} style={{ display:"flex" }}>
                <TypeBox 
                icon = {<FaPython/>}
                iconBg="#FF5722"
                title="Python   !!"
                desc="A high-level, versatile programming language known for its simplicity and readability. It's used in web development, data analysis, machine learning, automation, and more."
                />
                </Col>
                <Col xs={24} sm={24} md={24}  lg={12} style={{ display:"flex" }}>
                    <Space 
                        direction="vertical"
                        size="middle"
                        style={{
                        display: 'flex',
                        }}
                    >
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={24} md={24} style={{ display:"flex" }}>
                            <TypeBox 
                            icon = {<DiRuby/>}
                            iconBg="#4CAF50"
                            title="Ruby  !!"
                            desc="A JavaScript library for building user interfaces, particularly for single-page applications. React allows developers to create reusable components and efficiently update the UI when data changes."
                            />
                            </Col>
                        </Row>
                        <Row gutter={[16, 16]}> 
                            
                            <Col xs={24} sm={24} md={12}  lg={12} style={{ display:"flex" }}>
                            <TypeBox 
                            icon = {<FaNodeJs/>}
                            iconBg="#8BC34A"
                            title="Node.js  !!"
                            desc="A JavaScript library for building user interfaces, particularly for single-page applications. React allows developers to create reusable components and efficiently update the UI when data changes."
                            />                            </Col>

                            <Col xs={24} sm={24} md={12}  lg={12} style={{ display:"flex" }}>
                            <TypeBox 
                            icon = {<PiFileSqlFill/>}
                            iconBg="#1DE9B6"
                            title="SQL  !!"
                            desc="A JavaScript library for building user interfaces, particularly for single-page applications. React allows developers to create reusable components and efficiently update the UI when data changes."
                            />
                            </Col>
                        </Row>
                    </Space>
                </Col>
           </Row>
           <Row gutter={[16, 16]}>
           <Col xs={24} sm={24} md={24}   style={{ display:"flex" }}>
           <TypeBox 
                            icon = {<SiPhp/>}
                            iconBg="#2962FF"
                            title="PHP  !!"
                            desc="A JavaScript library for building user interfaces, particularly for single-page applications. React allows developers to create reusable components and efficiently update the UI when data changes."
                            />
             </Col>
           </Row>
        </Space>
    );
};
export default TypeThree;