import React, {useState} from 'react';
import './App.css';
import LeftSideBar from "./components/LeftSideBar";
import styled from "styled-components";
import { FieldForCards } from "./components/FieldForCards";
import FlightCard from "./components/FlightCard";
import { connect } from 'react-redux'
import * as actions from './actions'
import { bindActionCreators } from 'redux';

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`



function App(props: any):JSX.Element{
    const [airCompanies, setAirCompanies] = useState<Array<string>>([])
    const addAirCompanies = (info: string) => {
        setAirCompanies([...airCompanies, info])
    }
    const replaceAirCompany = (info: string) => {
        setAirCompanies([...airCompanies.filter(e => e !== info)])
    }
    const makeCard = (data: any):JSX.Element => {
        return (<FlightCard AirCompany={data.AirCompany}
                                   price={data.price}
                                   cityFrom={data.cityFrom}
                                   airPortFrom={data.airPortFrom}
                                   airPortCodeFrom={data.airPortCodeFrom}
                                   cityTo={data.cityTo}
                                   airPortTo={data.airPortTo}
                                   airPortCodeTo={data.airPortCodeTo}
                                   timeFrom={data.timeFrom}
                                   dateFrom={data.dateFrom}
                                   timeTo={data.timeTo}
                                   dateTo={data.dateTo}
                                   timeInFlight={data.timeInFlight}
                                   fromToAirLines={data.fromToAirLines}
                                   FromToChange={data.FromToChange}
                                   cityFromBack={data.cityFromBack}
                                   airPortFromBack={data.airPortFromBack}
                                   airPortCodeFromBack={data.airPortCodeFromBack}
                                   cityToBack={data.cityToBack}
                                   airPortToBack={data.airPortToBack}
                                   airPortCodeToBack={data.airPortCodeToBack}
                                   timeFromBack={data.timeFromBack}
                                   dateFromBack={data.dateFromBack}
                                   timeToBack={data.dateFromBack}
                                   dateToBack={data.dateToBack}
                                   timeInFlightBack={data.timeInFlightBack}
                                   fromToAirLinesBack={data.fromToAirLinesBack}
                                   FromToChangeBack={data.FromToChangeBack}/>)
    }
    const generateCards = (data: any):JSX.Element[] => {
        if(props.state.sortBy === 'priceUp'){
            data = [...data.sort(function(a:any, b:any){
                return a.price - b.price
            })]
        }
        if(props.state.sortBy === 'priceDown'){
            data = [...data.sort(function(a:any, b:any){
                return a.price - b.price
            }).reverse()]
        }
        if(props.state.sortBy === 'timeInFlight'){
            data = [...data.sort(function(a:any, b:any){
                return a.allFlightTime - b.allFlightTime
            })]
        }
        data = data.filter((elem:any) => props.state.price.from < elem.price && props.state.price.to > elem.price)
        data = data.filter((elem: any) => airCompanies.includes(elem.AirCompany) || airCompanies.length === 0)
        if(props.state.filter === '00' || props.state.filter === '11'){
            data = data.filter((elem:any) => (props.state.filter === '00' || props.state.filter === '11') && (elem.FromToChange === elem.FromToChangeBack))
        }
        if(props.state.filter === '10'){
            data = data.filter((elem:any) => (props.state.filter === '10' && (elem.FromToChange || elem.FromToChangeBack)))
        }
        if(props.state.filter === '01'){
            data = data.filter((elem:any) => (props.state.filter === '01' && !(elem.FromToChange || elem.FromToChangeBack)))
        }
        return data.map((elem: any) => makeCard(elem))
    }
    const generateCompanyList = (data:any) => {
        let arr:Array<string> = []
        if(props.state.sortBy === 'priceUp'){
            data = [...data.sort(function(a:any, b:any){
                return a.price - b.price
            })]
        }
        if(props.state.sortBy === 'priceDown'){
            data = [...data.sort(function(a:any, b:any){
                return a.price - b.price
            }).reverse()]
        }
        if(props.state.sortBy === 'timeInFlight'){
            data = [...data.sort(function(a:any, b:any){
                return a.allFlightTime - b.allFlightTime
            })]
        }
        data = data.filter((elem:any) => props.state.price.from < elem.price && props.state.price.to > elem.price)
        if(props.state.filter === '00' || props.state.filter === '11'){
            data = data.filter((elem:any) => (props.state.filter === '00' || props.state.filter === '11') && (elem.FromToChange === elem.FromToChangeBack))
        }
        if(props.state.filter === '10'){
            data = data.filter((elem:any) => (props.state.filter === '10' && (elem.FromToChange || elem.FromToChangeBack)))
        }
        if(props.state.filter === '01'){
            data = data.filter((elem:any) => (props.state.filter === '01' && !(elem.FromToChange || elem.FromToChangeBack)))
        }
        for(let i = 0; i < data.length; i++){
            if(!(arr.includes(data[i].AirCompany))){
                arr.push(data[i].AirCompany)
            }
        }
        return arr.map(elem =>
            <div>
                <input type={'checkbox'} id={elem} checked={airCompanies.includes(elem)}/>
                <label htmlFor={elem} onClick={()=>{
                    if(!airCompanies.includes(elem)){
                        addAirCompanies(elem)
                    } else {
                        replaceAirCompany(elem)
                    }
                }
                }>{elem}</label>
            </div>
        )
    }
    return (
        <Main>
            <LeftSideBar>
                {generateCompanyList(props.state.flights)}
            </LeftSideBar>
            <FieldForCards>
                {generateCards(props.state.flights)}
            </FieldForCards>
        </Main>
    );
}

const mapDispatchToProps = (dispatch:any) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(state => ({
    state: state
}), mapDispatchToProps)(App);
