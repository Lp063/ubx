import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';

import './GamesPlayed.css'

function GamesPlayed(props){
    return(
        <Col md={12}>
            <Col md={12} style={style.dateForGames}>{props.gamesInADay.date}</Col>
            {
                props.gamesInADay.games.map((game,index)=>(
                   <Col key={index} md={12} sm={12} xs={12} style={style.singleGame.container}>
                        <Col md={3} sm={12} xs={12}>{ game.location }</Col>
                        <Col md={6} sm={12} xs={12} style={style.singleGame.teamScoreContainer}>
                            <Col md={5} sm={12} xs={12} style={style.singleGame.team.container}>
                                <text style={style.singleGame.team.name}>{game.teams[0].name} </text>
                                <Image style={style.singleGame.team.emblemImage} src={game.teams[0].teamEmblem} />
                            </Col>
                            <Col md={2} sm={3} xs={3} style={style.singleGame.score}>
                                {game.teams[0].score} - {game.teams[1].score}
                            </Col>
                            <Col md={5} sm={12} xs={12} style={style.singleGame.team.container}>
                                <Image style={style.singleGame.team.emblemImage} src={game.teams[1].teamEmblem} />
                                <text style={style.singleGame.team.name}>{game.teams[1].name}</text>
                            </Col>
                        </Col>
                        <Col md={3} sm={12} xs={12}>
                            <a href={game.eventMediaUrl.url}> {game.eventMediaUrl.text} </a>
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
        }
    }
};

export default GamesPlayed