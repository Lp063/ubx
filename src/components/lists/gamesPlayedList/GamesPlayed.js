import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import './GamesPlayed.css'

function GamesPlayed(props){
    return(
        <Col md={12}>
            <Col md={12} style={style.dateForGames}>{props.gamesInADay.date}</Col>
            {
                props.gamesInADay.games.map((game,index)=>(
                   <Row key={index} lg={3} md={3} sm={1} xs={1} style={style.singleGame.container}>
                        <Col lg={3} md={3} sm={12} xs={12} >
                            <label>{ game.location }</label>
                        </Col>
                        <Col md={6} sm={12} xs={12} >
                            <Row lg={3} md={3} sm={1} xs={1} style={style.singleGame.teamScoreContainer}>
                                <Col lg={4} md={4} sm={4} xs={12} style={style.singleGame.team.container}>
                                    <label style={style.singleGame.team.name}>{game.teams[0].name} </label>
                                    <Image style={style.singleGame.team.emblemImage} src={game.teams[0].teamEmblem} />
                                </Col>
                                <Col lg={4} md={4} sm={4} xs={3} style={style.singleGame.score}>
                                    <label style={style.singleGame.score.label}>{game.teams[0].score} - {game.teams[1].score}</label>
                                </Col>
                                <Col lg={4} md={4} sm={4} xs={12} style={style.singleGame.team.container}>
                                    <Image style={style.singleGame.team.emblemImage} src={game.teams[1].teamEmblem} />
                                    <label style={style.singleGame.team.name}>{game.teams[1].name}</label>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3} sm={12} xs={12}>
                            {
                                game.eventMediaUrl.exist?<div style={style.singleGame.highlights.circleAnchorTag}> <a href={game.eventMediaUrl.url} title={game.eventMediaUrl.text} style={style.singleGame.highlights.anchorTag}> <FontAwesomeIcon icon={faCamera} /> </a></div>:""
                            }
                        </Col>
                    </Row>
                ))
            }
        </Col>
    );
}

const style={
    dateForGames:{
        marginTop:"20px",
        fontSize: "14px",
        lineHeight: "17px",
        padding:"0px"
    },
    singleGame:{
        container:{
            display:"flex",
            alignItems:"center",
            borderTop:"1px solid #eaeaea",
            paddingTop:"21px"
        },
        teamScoreContainer:{
            width:"unset"
        },
        score:{
            textAlign:"center",
            margin:"auto",
            label:{
                margin:"auto"
            }
        },
        team:{
            container:{
                alignItems: "center",
                display:"flex"
            },
            name:{
                margin:"auto auto"
            },
            emblemImage:{
                height: "40px"
            }
        },
        highlights:{
            circleAnchorTag:{
                border: "1px solid blue",
                borderRadius: "35px",
                margin:"auto",
                width: "43px",
                height: "41px"
            },
            anchorTag:{
                position: "relative",
                left: "12px",
                top: "7px"
            }
        }
    }
};

export default GamesPlayed