import React from 'react';
import { Col } from 'react-bootstrap';

function TeamPwdl(props){
    return(
        <Col lg={3} md={3} sm={12} xs={12} >
            <Col lg={12} md={12} sm={6} xs={6}>
                <label style={style.metric}>{props.card.metric}</label>
            </Col>
            <Col lg={12} md={12} sm={6} xs={6}>
                <label style={style.count}>{props.card.count}</label>
            </Col>
        </Col>
    );
}

const style={
    metric:{
        color: "#768398",
        fontSize:"12px", 
        textTransform: "uppercase"
    },
    count:{
       fontSize:"34px"
    }
};

export default TeamPwdl