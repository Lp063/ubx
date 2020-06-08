import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import './GamesPlayed.css'

function GamesPlayed(props){
    return(
        <Col md={12}>
            <Col md={12} style={style.dateForGames}>{props.gamesInADay.date}</Col>
            {
                props.gamesInADay.games.map((game,index)=>(
                   <Col key={index} md={12} sm={12} xs={12} style={style.singleGame.container}>
                        <Col md={3} sm={12} xs={12} className="hidden-sm hidden-xs" >{ game.location }</Col>
                        <Col md={6} sm={12} xs={12} style={style.singleGame.teamScoreContainer}>
                            <Col md={5} sm={12} xs={12} style={style.singleGame.team.container}>
                                <label style={style.singleGame.team.name}>{game.teams[0].name} </label>
                                <Image style={style.singleGame.team.emblemImage} src={game.teams[0].teamEmblem} />
                            </Col>
                            <Col md={2} sm={3} xs={3} style={style.singleGame.score}>
                                {game.teams[0].score} - {game.teams[1].score}
                            </Col>
                            <Col md={5} sm={12} xs={12} style={style.singleGame.team.container}>
                                <Image style={style.singleGame.team.emblemImage} src={game.teams[1].teamEmblem} />
                                <label style={style.singleGame.team.name}>{game.teams[1].name}</label>
                            </Col>
                        </Col>
                        <Col md={3} sm={12} xs={12}>
                            {
                                game.eventMediaUrl.exist?<div style={style.singleGame.highlights.circleAnchorTag}> <a href={game.eventMediaUrl.url} title={game.eventMediaUrl.text} style={style.singleGame.highlights.anchorTag}> <FontAwesomeIcon icon={faCamera} /> </a></div>:""
                            }
                        </Col>
                    </Col>
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
            display:"flex",
            alignItems:"center"
        },
        score:{
            textAlign:"center",
            display:"flex"
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