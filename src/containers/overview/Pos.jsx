import React from 'react';
import PosImage from "../../assets/pos.png"
import FallbackImage from "../../assets/h1.jpg"
import { Col, Image, Row } from 'antd';
import { Link } from 'react-router-dom';

const Pos = () => {
    return (
        <Row gutter={[16, 16]} >
            <Col
             xs={24} sm={24} md={14} style={{ display:"flex" }}>
            <Image
            src={PosImage}
            fallback={FallbackImage}
            style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
            />
            </Col>
            <Col xs={24} sm={24} md={10} style={{ display:"flex", flexDirection:"column" }}>
            <h2>Point of Sale (POS) System</h2>
            <p>This is a Point of Sale (POS) system built using React.js and various libraries including Ant Design, Axios, i18next, PNPM, react-i18next, Context API, React Router v6, TanStack Query, SCSS, and PDF generation. The system allows users to register customers, manage customer lists, maintain product lists, track orders, process payments, and offers ad</p>
            <Link to="https://pos-systems.netlify.app/" target="_blank"> Visite POS </Link>
            </Col>
        </Row>
    );
};

export default Pos;