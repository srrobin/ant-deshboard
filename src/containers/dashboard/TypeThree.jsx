import { Col, Row, Space } from 'antd';
import React from 'react';
 import TypeBox from '../../components/TypeBox';
 import { FaHtml5 } from "react-icons/fa";
 import { FaCss3Alt } from "react-icons/fa";
 import { SiJavascript } from "react-icons/si";
 import { FaPython } from "react-icons/fa6";
 import { RiReactjsLine } from "react-icons/ri";
const TypeThree = () => {
    const style = {
        background: '#0092ff',
        padding: '8px 0',
      };
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
                iconBg="#9a7d0a"
                title="HTML  !!"
                desc="A standard markup language used to create and structure content on the web."
                />                      
                </Col>
                    
                <Col xs={24} sm={24} md={12}  lg={6} style={{ display:"flex" }}>
                <TypeBox 
                icon = {<FaCss3Alt/>}
                iconBg="#9a7d0a"
                title="CSS   !!"
                desc="A stylesheet language used to describe the presentation of a web page"
                /> 
                </Col>
                    
                <Col xs={24} sm={24} md={12}  lg={6} style={{ display:"flex" }}>
                <TypeBox 
                icon = {<SiJavascript/>}
                iconBg="#9a7d0a"
                title="JavaScript   !!"
                desc="A programming language primarily used to create dynamic and interactive elements"
                />
                </Col>
                    
                <Col xs={24} sm={24} md={12}  lg={6} style={{ display:"flex" }}>
                <TypeBox 
                icon = {<SiJavascript/>}
                iconBg="#9a7d0a"
                title="JavaScript   !!"
                desc="A programming language primarily used to create dynamic and interactive elements"
                />
                </Col>

           </Row>
           <Row gutter={[16, 16]} >
                <Col xs={24} sm={24} md={24}  lg={12} style={{ display:"flex" }}>
                <TypeBox 
                icon = {<FaPython/>}
                iconBg="#9a7d0a"
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
                            icon = {<RiReactjsLine/>}
                            iconBg="#9a7d0a"
                            title="React  !!"
                            desc="A JavaScript library for building user interfaces, particularly for single-page applications. React allows developers to create reusable components and efficiently update the UI when data changes."
                            />
                            </Col>
                        </Row>
                        <Row gutter={[16, 16]}> 
                            
                            <Col xs={24} sm={24} md={12}  lg={12} style={{ display:"flex" }}>
                            <TypeBox 
                            icon = {<RiReactjsLine/>}
                            iconBg="#9a7d0a"
                            title="React  !!"
                            desc="A JavaScript library for building user interfaces, particularly for single-page applications. React allows developers to create reusable components and efficiently update the UI when data changes."
                            />                            </Col>

                            <Col xs={24} sm={24} md={12}  lg={12} style={{ display:"flex" }}>
                            <TypeBox 
                            icon = {<RiReactjsLine/>}
                            iconBg="#9a7d0a"
                            title="React  !!"
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
                            icon = {<RiReactjsLine/>}
                            iconBg="#9a7d0a"
                            title="React  !!"
                            desc="A JavaScript library for building user interfaces, particularly for single-page applications. React allows developers to create reusable components and efficiently update the UI when data changes."
                            />
             </Col>
           </Row>
        </Space>
    );
};

export default TypeThree;