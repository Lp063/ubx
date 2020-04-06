import React,{ Component } from 'react';
import { Image} from 'react-bootstrap';
//import Image from 'react-bootstrap/Image';

import './PlayerListTableRow.css'

class PlayerListTableRow extends Component{

    constructor(props){
        super(props);
        /* this.state={
            teamPlayerList:[]
        }; */
    }

    componentDidMount(){
        
    }

    

    render(){
        const { id, image,jerseyNumber, firstName, lastName, contact } = this.props.playerList;
        return(<tr>
            <td><label>{jerseyNumber}</label></td>
            <td>
                <div className="player-list-detail-image" style={{backgroundImage:"url("+image+")"}}>
                    <Image  style={{display:"none"}} src={image} roundedCircle />
                </div>
            </td>
            <td><label>{firstName}</label></td>
            <td><label>{lastName}</label></td>
            <td><label>{contact}</label></td>
            <td><label>x</label></td>
        </tr>        
        )
    }
}

export default PlayerListTableRow