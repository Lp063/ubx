import React,{ Component } from 'react';
import { Container, Row, Col, Table, Tabs, Tab} from 'react-bootstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import TeamPwdl from '../../lists/pwdl/TeamPwdl'
import GamesPlayed from '../../lists/gamesPlayedList/GamesPlayed';
import PlayerListTableRow from '../../lists/playerList/PlayerListTableRow';

import './TeamManager.css'

class TeamManager extends Component{

    constructor(props){
        super(props);
        this.state={
            teamStats:{
            },
            teamPlayerList:[],
            games:[]
        };
        
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

        var teamPwdl={
            pwdl:[{
                id:0,
                metric:"played",
                count:7
            },{
                id:1,
                metric:"Won",
                count:4
            },{
                id:2,
                metric:"Drawn",
                count:3
            },{
                id:3,
                metric:"Lost",
                count:0
            }]
        };
        this.setState({teamStats:teamPwdl});

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

        var gamesList=[
            {
                schedualId:0,
                date:"17 September 2019",
                games:[
                    {
                        gameId:0,
                        location:"BVB Stadium, Dortmund",
                        teams:[
                            {
                                name:"Dortmund",
                                teamEmblem:"https://img.uefa.com/imgml/TP/teams/logos/140X140/52758.png",
                                score:0
                            },{
                                name:"Barcelona",
                                teamEmblem:"https://img.uefa.com/imgml/TP/teams/logos/140X140/50080.png",
                                score:0
                            }
                        ],
                        eventMediaUrl:{
                            exist:true,
                            url:"https://www.uefa.com/uefaeuropaleague/video/highlights/0256-0e693c3d4f09-c1509cd0000f-1000--highlights-partizan-0-1-man-united/",
                            text:"Highlights"
                        }
                    }
                ]
            },{
                schedualId:1,
                date:"02 October 2019",
                games:[
                    {
                        gameId:1,
                        location:"Camp Nou, Barcelona",
                        teams:[
                            {
                                name:"Barcelona",
                                teamEmblem:"https://img.uefa.com/imgml/TP/teams/logos/140X140/50080.png",
                                score:2
                            },{
                                name:"Internazionale",
                                teamEmblem:"https://img.uefa.com/imgml/TP/teams/logos/140X140/50138.png",
                                score:2
                            }
                        ],
                        eventMediaUrl:{
                            exist:false,
                            url:"",
                            text:""
                        }
                    }
                ]
            },{
                schedualId:2,
                date:"23 October 2019",
                games:[
                    {
                        gameId:2,
                        location:"Eden Arena, Parague",
                        teams:[
                            {
                                name:"Slavia Praha",
                                teamEmblem:"https://img.uefa.com/imgml/TP/teams/logos/140X140/52498.png",
                                score:1
                            },{
                                name:"Barcelona",
                                teamEmblem:"https://img.uefa.com/imgml/TP/teams/logos/140X140/50080.png",
                                score:2
                            }
                        ],
                        eventMediaUrl:{
                            exist:false,
                            url:"",
                            text:""
                        }
                    }
                ]
            }
        ];
        this.setState({games:gamesList});
    }

    renderPlayerList = () => {

    }

    render(){
        return(
            <Row lg={2} md={2} sm={1} xs={1} style={this.props.pageParentContainerStyle}>
                <Col lg={3} md={3} sm={12} xs={12} className="team-detail" style={{padding:"0px"}}>
                    <div className="team-detail-logo" style={style.teamDetail.logo} ></div>
                    <div className="team-detail-name" ><label>Barcelona</label></div>
                    <div className="team-detail-name" ><label>Manager : Quique Setién</label></div>
                </Col>
                <Col lg={9} md={9} sm={12} xs={12} style={{padding:"0px"}}>
                    <Tabs defaultActiveKey="performance" id="uncontrolled-tab-example" >
                        <Tab eventKey="performance" title="Performance">
                            <Container>
                                <Row lg={4} md={4} sm={1} xs={1} style={{margin: "14px auto"}} >
                                    {
                                        this.state.teamStats.pwdl ? this.state.teamStats.pwdl.map((detail,index)=>{ return <TeamPwdl key={index} card={detail} /> }):""
                                    }
                                </Row>
                                <Row lg={2} md={2} sm={1} xs={1} >
                                    <div className="col-md-12">
                                        <HighchartsReact highcharts={Highcharts} options={teamPerformanceChart} />
                                    </div>
                                    <div className="col-md-6">
                                        <HighchartsReact highcharts={Highcharts} options={baroptions} />
                                    </div>
                                    <div className="col-md-6">
                                        <HighchartsReact highcharts={Highcharts} options={splineoptions} />
                                    </div>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="games" title="Games">
                            <Container>
                                <Row lg={2} md={2} sm={1} xs={1} >
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        {
                                            this.games = this.state.games.map((gamesOnThisDay)=>{
                                                return <GamesPlayed key={gamesOnThisDay.schedualId} gamesInADay={gamesOnThisDay} />
                                            })
                                        }
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="players" title="Players">
                            <Container>
                                <Row lg={2} md={2} sm={1} xs={1} >
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Table className="team-detail-players-list" borderless={true} responsive >
                                            <thead>
                                                <tr>
                                                <th>#</th>
                                                <th></th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th className="d-none d-lg-block">Contact</th>
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
                            </Container>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        )
    }
}

const teamPerformanceChart = {
    title: {
        text: 'Performance chart'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'March', 'April', 'May']
    },
    labels: {
        items: [{
            html: 'Player Contributions',
            style: {
                left: '50px',
                top: '18px',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Bourne',
        data: [3, 2, 1, 3, 4]
    }, {
        type: 'column',
        name: 'Olymphant',
        data: [2, 3, 5, 7, 6]
    }, {
        type: 'column',
        name: 'Statham',
        data: [4, 3, 3, 9, 1]
    }, {
        type: 'column',
        name: 'Clay',
        data: [5, 4, 3, 6, 2]
    }, {
        type: 'spline',
        name: 'Average',
        data: [3, 2.67, 3, 6.33, 3.33],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Performance Contribution',
        data: [{
            name: 'Bourne',
            y: 13,
            color: Highcharts.getOptions().colors[0]
        }, {
            name: 'Olymphant',
            y: 23,
            color: Highcharts.getOptions().colors[1] 
        }, {
            name: 'Statham',
            y: 19,
            color: Highcharts.getOptions().colors[2] 
        }, {
            name: 'Clay',
            y: 10,
            color: Highcharts.getOptions().colors[3] 
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
};

const baroptions = { 
    chart: {
        type: 'column'
    },
    title: {
        text: 'Merchandise Sales By Country'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent Sales'
        }
  
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },
  
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
        {
            name: "Country",
            colorByPoint: true,
            data: [
                {
                    name: "UK",
                    y: 62.74,
                    drilldown: "UK"
                },
                {
                    name: "USA",
                    y: 10.57,
                    drilldown: "USA"
                },
                {
                    name: "Australia",
                    y: 7.23,
                    drilldown: "Australia"
                },
                {
                    name: "India",
                    y: 5.58,
                    drilldown: "India"
                },
                {
                    name: "UAE",
                    y: 4.02,
                    drilldown: "UAE"
                },
                {
                    name: "Brazil",
                    y: 1.92,
                    drilldown: "Brazil"
                },
                {
                    name: "Other",
                    y: 7.62,
                    drilldown: null
                }
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: "UK",
                id: "UK",
                data: [
                    [
                        "v65.0",
                        0.1
                    ],
                    [
                        "v64.0",
                        1.3
                    ],
                    [
                        "v63.0",
                        53.02
                    ],
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ],
                    [
                        "v60.0",
                        0.56
                    ],
                    [
                        "v59.0",
                        0.45
                    ],
                    [
                        "v58.0",
                        0.49
                    ],
                    [
                        "v57.0",
                        0.32
                    ],
                    [
                        "v56.0",
                        0.29
                    ],
                    [
                        "v55.0",
                        0.79
                    ],
                    [
                        "v54.0",
                        0.18
                    ],
                    [
                        "v51.0",
                        0.13
                    ],
                    [
                        "v49.0",
                        2.16
                    ],
                    [
                        "v48.0",
                        0.13
                    ],
                    [
                        "v47.0",
                        0.11
                    ],
                    [
                        "v43.0",
                        0.17
                    ],
                    [
                        "v29.0",
                        0.26
                    ]
                ]
            },
            {
                name: "USA",
                id: "USA",
                data: [
                    [
                        "v58.0",
                        1.02
                    ],
                    [
                        "v57.0",
                        7.36
                    ],
                    [
                        "v56.0",
                        0.35
                    ],
                    [
                        "v55.0",
                        0.11
                    ],
                    [
                        "v54.0",
                        0.1
                    ],
                    [
                        "v52.0",
                        0.95
                    ],
                    [
                        "v51.0",
                        0.15
                    ],
                    [
                        "v50.0",
                        0.1
                    ],
                    [
                        "v48.0",
                        0.31
                    ],
                    [
                        "v47.0",
                        0.12
                    ]
                ]
            },
            {
                name: "Australia",
                id: "Australia",
                data: [
                    [
                        "v11.0",
                        6.2
                    ],
                    [
                        "v10.0",
                        0.29
                    ],
                    [
                        "v9.0",
                        0.27
                    ],
                    [
                        "v8.0",
                        0.47
                    ]
                ]
            },
            {
                name: "India",
                id: "India",
                data: [
                    [
                        "v11.0",
                        3.39
                    ],
                    [
                        "v10.1",
                        0.96
                    ],
                    [
                        "v10.0",
                        0.36
                    ],
                    [
                        "v9.1",
                        0.54
                    ],
                    [
                        "v9.0",
                        0.13
                    ],
                    [
                        "v5.1",
                        0.2
                    ]
                ]
            },
            {
                name: "UAE",
                id: "UAE",
                data: [
                    [
                        "v16",
                        2.6
                    ],
                    [
                        "v15",
                        0.92
                    ],
                    [
                        "v14",
                        0.4
                    ],
                    [
                        "v13",
                        0.1
                    ]
                ]
            },
            {
                name: "Brazil",
                id: "Brazil",
                data: [
                    [
                        "v50.0",
                        0.96
                    ],
                    [
                        "v49.0",
                        0.82
                    ],
                    [
                        "v12.1",
                        0.14
                    ]
                ]
            }
        ]
    }
  };
  
const splineoptions = {
chart: {
    type: 'line'
},
title: {
    text: 'Monthly Average Temperature'
},
subtitle: {
    text: 'Source: WorldClimate.com'
},
xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
},
yAxis: {
    title: {
        text: 'Temperature (°C)'
    }
},
plotOptions: {
    line: {
        dataLabels: {
            enabled: true
        },
        enableMouseTracking: false
    }
},
series: [{
    name: 'Tokyo',
    data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
}, {
    name: 'London',
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
}]
};

const style={
    teamDetail:{
        logo:{
            backgroundImage: "url(https://img.uefa.com/imgml/TP/teams/logos/140X140/50080.png)",
        }
    }
};
export default TeamManager