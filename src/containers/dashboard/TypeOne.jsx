import { Col, Row, Space } from 'antd';
import React from 'react';
import TypeoneBox from '../../components/TypeoneBox';
import { FaUsers } from "react-icons/fa6";
import ProductScore from '../../components/ProductScore';
import SimpleTable from '../../components/SimpleTable';
import SimpleList from '../../components/SimpleList';
import ActivitiesChart from '../../components/charts/ActivitiesChart';
import HotelMetrix from '../../components/charts/HotelMetrix';
import BlockCard from '../../components/BlockCard';
import { FaUsersCog } from "react-icons/fa";
import { GiDroplets } from "react-icons/gi";
import { MdFeedback } from "react-icons/md";
import { RiAlarmWarningFill } from "react-icons/ri";
import { HiArrowUpOnSquare } from "react-icons/hi2";


const TypeOne = () => {

    return (
        <Space 
        direction="vertical"
        size="middle"
        style={{
          display: 'flex',
        }}
        >
            <Row gutter={[16, 16]} >
                <Col xs={24} sm={24} md={12} style={{ display:"flex" }} >
                    <div>
                        <Row  gutter={[16, 16]} >
                            <Col xs={24} sm={24} md={24} lg={12}>
                                <TypeoneBox 
                                title = "totl customers"
                                icon = {<FaUsers/>}
                                number= "3124"
                                subtitle="vs Last Quarter 2812"
                                />
                            </Col> 
                            <Col xs={24} sm={24} md={24} lg={12}>
                                <TypeoneBox 
                                title = "active customers"
                                icon = {<FaUsersCog />}
                                number= "3124"
                                subtitle="vs Last Quarter 2812"
                                />
                            </Col> 
                            <Col xs={24} sm={24} md={24} lg={12}>
                                <TypeoneBox 
                                title = "drop-off customers"
                                icon = {<GiDroplets />}
                                number= "3124"
                                subtitle="vs Last Quarter 2812"
                                />
                            </Col> 
                            <Col xs={24} sm={24} md={24} lg={12}>
                                <TypeoneBox 
                                title = "peak feedback"
                                icon = {<MdFeedback />}
                                number= "3124"
                                subtitle="vs Last Quarter 2812"
                                />
                            </Col> 
                        </Row>
                    </div>
                </Col>                
                <Col xs={24} sm={24} md={12} style={{ display:"flex" }} >
                   <ProductScore/>
                </Col>  
            </Row>
            <Row gutter={[16, 16]} >
                <Col xs={24} sm={24} md={12}  lg={10} style={{ display:"flex" }} >
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ display:"flex" }}>
                         <ActivitiesChart/>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ display:"flex" }}>
                            <BlockCard
                            count="82"
                            status="pending dispatach"
                            icon={<RiAlarmWarningFill />}
                            color="#FF9300"
                            total="0.70"
                            />       
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ display:"flex" }}>
                            <BlockCard
                            count="03"
                            status="complete"
                            icon={<HiArrowUpOnSquare />}
                            color="#184D47"
                            total="0.90"
                            />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={14} style={{ display:"flex" }} >
                    <HotelMetrix/>
                </Col>
            </Row>
            <Row gutter={[16, 16]} >
                <Col xs={24} sm={24} md={14} style={{ display:"flex" }} >
                       <SimpleTable/>
                </Col>
                <Col xs={24} sm={24} md={10} style={{ display:"flex" }} >
                   <SimpleList/>
                </Col>
            </Row>


        </Space>
    );
};

export default TypeOne;