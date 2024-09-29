import { Col, Row, Space } from 'antd';
import React from 'react';

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
                    <div style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.</div>
                </Col>
                    
                <Col xs={24} sm={24} md={12}  lg={6} style={{ display:"flex" }}>
                    <div style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.</div>
                </Col>
                    
                <Col xs={24} sm={24} md={12}  lg={6} style={{ display:"flex" }}>
                    <div style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.</div>
                </Col>
                    
                <Col xs={24} sm={24} md={12}  lg={6} style={{ display:"flex" }}>
                    <div style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.</div>
                </Col>

           </Row>
           <Row gutter={[16, 16]} >
                <Col xs={24} sm={24} md={24}  lg={12} style={{ display:"flex" }}>
                    <div style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.</div>
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
                                <div style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.</div>
                            </Col>
                        </Row>
                        <Row gutter={[16, 16]}> 
                            
                            <Col xs={24} sm={24} md={12}  lg={12} style={{ display:"flex" }}>
                                <div style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.</div>
                            </Col>

                            <Col xs={24} sm={24} md={12}  lg={12} style={{ display:"flex" }}>
                                <div style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.</div>
                            </Col>
                        </Row>
                    </Space>
                </Col>
           </Row>
           <Row gutter={[16, 16]}>
           <Col xs={24} sm={24} md={24}   style={{ display:"flex" }}>
                <div style={style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat sed minima iusto optio distinctio facere animi doloremque aspernatur cumque.</div>
             </Col>
           </Row>
        </Space>
    );
};

export default TypeThree;