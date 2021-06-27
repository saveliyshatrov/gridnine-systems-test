import React from "react";
import styled from "styled-components";
import LeftSideBarSortBy from "../LeftSideBarSortBy";
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux';


const LeftSideBarStyles = styled.div`
  width: 277px;
  padding: 20px;
  height: 100%;
  top: 34px;
  left: 0;
  box-sizing: border-box;
`
const Input = styled.input`
  width: 70%;
  outline: none;
`
const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`
const Name = styled.div`
  width: 10%;
`

function LeftSideBar(props: any){
    return <LeftSideBarStyles>
        <LeftSideBarSortBy header={'Сортировать'}>
            <div>
                <input type={'radio'}
                       id={'priceUp'}
                       name={'SortBy'}
                       checked={props.state.sortBy === 'priceUp'}
                       onClick={()=>{props.sortBy("priceUp")}}/>
                <label htmlFor={'priceUp'}
                       onClick={()=>{props.sortBy("priceUp")}}> - по возрастанию цены</label>
            </div>
            <div>
                <input type={'radio'}
                       id={'priceDown'}
                       name={'SortBy'}
                       checked={props.state.sortBy === 'priceDown'}
                       onClick={()=>{props.sortBy("priceDown")}}/>
                <label htmlFor={'priceDown'}
                       onClick={()=>{props.sortBy("priceDown")}}> - по убыванию цены</label>
            </div>
            <div>
                <input type={'radio'}
                       id={'timeInFlight'}
                       name={'SortBy'}
                       checked={props.state.sortBy === 'timeInFlight'}
                       onClick={()=>{props.sortBy("timeInFlight")}}/>
                <label htmlFor={'timeInFlight'} onClick={()=>{props.sortBy("timeInFlight")}}> - по времени в пути</label>
            </div>
        </LeftSideBarSortBy>
        <LeftSideBarSortBy header={'Фильтровать'}>
            <div>
                <input type={'checkbox'} id={'1fly'} name={'fly'} checked={props.state.filter[0] === '1'}/>
                <label htmlFor={'1fly'}
                       onClick={()=>{props.filter((props.state.filter[0]==='0'?'1':'0')+props.state.filter[1])}}> - 1 пересадка</label>
            </div>
            <div>
                <input type={'checkbox'} id={'morefly'} name={'fly'} checked={props.state.filter[1] === '1'}/>
                <label htmlFor={'morefly'}
                       onClick={()=>{props.filter(props.state.filter[0]+(props.state.filter[1]==='0'?'1':'0'))}}> - без пересадок</label>
            </div>
        </LeftSideBarSortBy>
        <LeftSideBarSortBy header={'Цена'}>
            <Div>
                <Name>От</Name> <Input type={'number'}
                                       value={props.state.price.from}
                                       onChange={(e)=>{props.priceFrom(parseInt(e.target.value))}}/>
            </Div>
            <Div>
                <Name>До</Name> <Input type={'number'}
                                       value={props.state.price.to}
                                       onChange={(e)=>{props.priceTo(parseInt(e.target.value))}}/>
            </Div>
        </LeftSideBarSortBy>
        <LeftSideBarSortBy header={'Авиакомпании'}>
            {props.children}
        </LeftSideBarSortBy>
    </LeftSideBarStyles>
}

const mapDispatchToProps = (dispatch:any) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(state => ({
    state: state
}), mapDispatchToProps)(LeftSideBar);
