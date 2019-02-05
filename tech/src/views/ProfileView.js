import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getUsers, getItems, deleteItem}  from '../actions';

const StyledProfileContainer = styled.div`{
    border: solid slategray 2px;
    display: flex;
    flex-direction: column;
    padding-left: 2%;
    // justify-content: space-around;
    width: 80%;
    margin-left: 6%;
    height: 1300px;
    margin-bottom: 5%;
        img {
            border-radius: 50%;
            height: 300px;
            margin-top: 4%;
        };
    
}`;

const StyledUserDetails = styled.div`{
    // border: solid purple 2px;
    width: 300px;
    height: 200px;
    margin-top: 10%;
    padding-left: 10%;
    font-size: 18px;

}`;

const StyledTopDiv = styled.div`{
    // border-bottom: solid slategray 1px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-right: 5%;
    height: 400px;
}`;

const StyledUserItemsContainer = styled.div`{
    display: flex;
    flex-direction: row;
    border: solid slategray 1px;
    margin-right: 2.5%;
    justify-content: space-between;
    min-height: 350px;
    min-width: 90%;
    overflow-x: auto;
}`;

const StyledUserItem = styled.div`{
    min-width: 25%;
    min-height: 240px;
    border: dashed slategray 1px
    margin-top: 1%;
    margin-left: 15px;
    margin-bottom: 1%;
    text-align: center;    
}`;
class ProfileView extends React.Component {

    // display user items, requests, and reviews
    // if profile belongs to user, have edit profile option

    componentDidMount() {
        this.props.getUsers();
        this.props.getItems();
    };

    render() {
        const data = this.props.location.state.user[0];
        return (
            <div>
                <StyledProfileContainer>
                    <StyledTopDiv>
                        <img src={data.image} alt='avatar' />
                        <StyledUserDetails>
                            <h2>{data.username}</h2>
                            <p>name: {data.firstName} {data.lastName}</p>
                            <p>email: {data.email}</p>
                            <p>phone number: {data.phone}</p>
                        </StyledUserDetails>
                    </StyledTopDiv>
                    <StyledUserItemsContainer>
                        {this.props.items.map(item => {
                            if (item.owner === data.userId) {return (
                                <StyledUserItem>
                                    <h3> {item.title} </h3>
                                    <img src={item.image} alt='item'/>
                                    <p> {item.brand} {item.model} {item.label} </p>
                                    <p> daily price: ${item.dailyPrice} <br/> Weekly price: ${item.weeklyPrice} </p>
                                </StyledUserItem>
                            );}
                        })}
                    </StyledUserItemsContainer>
                </StyledProfileContainer>

            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        users: state.users,
        items: state.items
    };
};

export default connect(mapStateToProps, {getUsers, getItems, deleteItem})(ProfileView);

// test