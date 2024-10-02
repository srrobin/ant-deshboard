import { Col, Row, Space } from 'antd';
import React from 'react';
import TypeBox from '../../components/TypeBox';
import { AiOutlineCoffee } from "react-icons/ai";
import { PiHamburgerFill } from "react-icons/pi";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa6";
import { GiSandwich } from "react-icons/gi";
import { GiTacos } from "react-icons/gi";
import { GiFrenchFries } from "react-icons/gi";
const TypeTwo = () => {

    return (
        <Space
        direction="vertical"
        size="middle"
        style={{
          display: 'flex',
        }}
        >
            <Row gutter={[16, 16]} > 
                <Col xs={24} sm={24} md={24} lg={16} style={{ display:"flex" }}>
                   <Space
                    direction="vertical"
                    size="middle"
                    style={{
                    display: 'flex',
                    }}  
                   >
                    <Row gutter={[16, 16]} >
                        <Col  xs={24} sm={24} md={24} lg={8} style={{ display:"flex" }}>
                        <Space
                            direction="vertical"
                            size="middle"
                            style={{
                            display: 'flex',
                            }}
                        >
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={24} md={8}  lg={24} style={{ display:"flex" }}>
                               <TypeBox 
                                 icon = {<AiOutlineCoffee/>}
                                 iconBg="#38220f"
                                 title="Coffee !!"
                                 desc="Coffee is a beverage brewed from roasted coffee beans"
                               />
                            </Col>
                            <Col xs={24} sm={24} md={8}  lg={24} style={{ display:"flex" }}>
                            <TypeBox 
                                 icon = {<FaPizzaSlice />}
                                 iconBg="#38220f"
                                 title="Pizza !!"
                                 desc=" popular Italian dish consisting of a round, flat base of dough topped with tomato sauce"
                               />
                            </Col>
                            <Col xs={24} sm={24} md={8}  lg={24} style={{ display:"flex" }}>
                            <TypeBox 
                                 icon = {<FaHotdog/>}
                                 iconBg="#38220f"
                                 title="Hot Dog !!"
                                 desc="A grilled or steamed sausage (usually beef or pork) served in a sliced bun"
                               />
                            </Col>
                        </Row>
                        </Space>
                        </Col>
                        <Col  xs={24} sm={24} md={24} lg={16} style={{ display:"flex" }}>
                        <TypeBox 
                                 icon = {<PiHamburgerFill />}
                                 iconBg="#C70039"
                                 title="Burger"
                                 desc="A classic sandwich made with a ground beef patty, typically grilled or pan-fried, and served in a bun. It's often topped with lettuce, tomato, cheese, onions, and condiments like ketchup, mustard, or mayonnaise."
                               />
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} >
                        <Col  xs={24} sm={24} md={24} lg={12} style={{ display:"flex" }}>
                        <TypeBox 
                                 icon = {<GiFrenchFries/>}
                                 iconBg="#9a7d0a"
                                 title="French Fries !!"
                                 desc="A popular side dish made from potatoes that are cut into strips and deep-fried until crispy "
                               />
                        </Col>
                        <Col  xs={24} sm={24} md={24} lg={12} style={{ display:"flex" }}>
                        <TypeBox 
                                 icon = {<GiTacos/>}
                                 iconBg="#1b4f72"
                                 title="Taco !!"
                                 desc="A popular side dish made from potatoes that are cut into strips and deep-fried until crispy "
                               />
                        </Col>
                    </Row>
                </Space>
                </Col> 
                <Col xs={24} sm={24} md={24} lg={8} style={{ display:"flex" }}>
                <TypeBox 
                    icon = {<GiSandwich />}
                    iconBg="#1A237E"
                    title="Sandwich"
                    desc=" A versatile dish made with two slices of bread filled with a combination of ingredients such as meats, cheeses, vegetables, and spreads like mayo or mustard. Common types include ham sandwiches, turkey clubs, and BLTs. A versatile dish made with two slices of bread filled with a combination of ingredients such as meats, cheeses, vegetables, and spreads like mayo or mustard. Common types include ham sandwiches, turkey clubs, and BLTs.A classic sandwich made with a ground beef patty, typically grilled or pan-fried, and served in a bun. It's often topped with lettuce, tomato, cheese, onions, and condiments like ketchup, mustard, or mayonnaise."
                    />
                </Col> 
            </Row>
        </Space>
    );
};


export default TypeTwo;