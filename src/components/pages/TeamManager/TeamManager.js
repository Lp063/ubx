import React,{ Component } from 'react';
import { Row, Col, Table} from 'react-bootstrap';

import PlayerListTableRow from '../../lists/playerList/PlayerListTableRow';

import './TeamManager.css'

class TeamManager extends Component{

    constructor(props){
        super(props);
        this.state={
            teamPlayerList:[]
        };
        
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        var teamPlayers=[
            {
                id:1,
                image:"https://cdn.pixabay.com/photo/2015/10/12/15/23/man-984504_960_720.jpg",
                jerseyNumber:1,
                firstName:"Jason",
                lastName:"Bourne",
                contact:"9876543243",
            },
            {
                id:2,
                image:"https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg",
                jerseyNumber:2,
                firstName:"Timothy",
                lastName:"Olymphant",
                contact:"9876543243",
            },
            {
                id:3,
                image:"https://cdn.pixabay.com/photo/2015/07/20/12/57/man-852766_960_720.jpg",
                jerseyNumber:3,
                firstName:"Jason",
                lastName:"Statham",
                contact:"9876543243",
            },
            {
                id:4,
                image:"https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_960_720.jpg",
                jerseyNumber:4,
                firstName:"Carson",
                lastName:"Clay",
                contact:"9876543243",
            }
        ];

        this.setState({teamPlayerList:teamPlayers});
    }

    renderPlayerList = () => {

    }

    render(){
        return(
            <Row>
                <Col md={12} className="no-padding">
                    <Col lg={12} md={12}> </Col>
                    <Col lg={12} md={12} className="teamDetail-PlayerList-Container">
                        <Row lg={2} md={2} sm={1} xs={1}>
                            <Col lg={3} md={3} sm={12} xs={12} className="team-detail">
                                <div className="team-detail-logo" style={style.teamDetail.logo} ></div>
                                <div className="team-detail-name" ><label>Russian federation</label></div>
                                <div className="team-detail-name" ><label>Manager : Mikhail Belikof</label></div>
                            </Col>
                            <Col lg={9} md={9} sm={12} xs={12}>
                                <Table className="team-detail-players-list" responsive >
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th></th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Contact</th>
                                        <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.teamPlayerList = this.state.teamPlayerList.map((player)=>{
                                                return <PlayerListTableRow key={player.id} playerList={player} />
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        )
    }
}

const style={
    teamDetail:{
        logo:{
            backgroundImage: "url(https://images.freeimages.com/images/large-previews/049/russian-flag-1631600.jpg)",
        }
    }
};
export default TeamManager