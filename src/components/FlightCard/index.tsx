import React from "react";
import styled from "styled-components";

const FlightCardStyles = styled.div`
  width: 100%;
  margin-top: 10px;
`

const CardHeader = styled.div`
  height: 60px;
  background-color: #0087C9;
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  flex-direction: row;
  box-sizing: border-box;
`

const Logo = styled.div`
  text-size-adjust: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 50%;
  height: 100%;
  color: white;
`

const Price = styled.div`
  display: flex;
  width: 50%;
  height: 60px;
  padding: 5px 0px;
  flex-direction: column;
  justify-content: right;
  box-sizing: border-box;
`

const TotalCost = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: 20px;
  height: 30px;
`

const ForOnePassenger = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 15px;
  font-size: 12px;
  color: white;
`

const FromTo = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  align-items: center;
`
const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 100%;
  color: black;
`
const Arrow = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`
const BlueText = styled.span`
  color: #0087C9;
  margin-left: 5px;
`
const Date = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`
const BlockDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
`
const TimeInFlight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`

const BlockOfThree = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Line = styled.div`
  width: 80%;
  height: 1px;
  background-color: gray;
`

const OrangeText = styled.div`
  color: #FFB168;
`

const OneOfThreeSegments = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BlueLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #0087C9;
`

const ButtonToChoose = styled.div`
  width: 100%;
  height: 40px;
  background-color: #FFB168;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

type props = {
    AirCompany: string,
    price: number,
    cityFrom: string,
    airPortFrom: string,
    airPortCodeFrom: string
    cityTo: string,
    airPortTo: string,
    airPortCodeTo: string,
    timeFrom: string,
    dateFrom: string,
    timeTo: string,
    dateTo: string,
    timeInFlight: string,
    fromToAirLines: string,
    FromToChange: boolean,
    cityFromBack: string,
    airPortFromBack: string,
    airPortCodeFromBack: string
    cityToBack: string,
    airPortToBack: string,
    airPortCodeToBack: string,
    timeFromBack: string,
    dateFromBack: string,
    timeToBack: string,
    dateToBack: string,
    timeInFlightBack: string,
    fromToAirLinesBack: string,
    FromToChangeBack: boolean
}

function FlightCard({AirCompany, price,
                        cityFrom, airPortFrom, airPortCodeFrom,
                        cityTo, airPortTo, airPortCodeTo,
                        timeFrom, dateFrom,
                        timeTo, dateTo,
                        timeInFlight,
                        fromToAirLines, FromToChange,
                        cityFromBack, airPortFromBack, airPortCodeFromBack,
                        cityToBack, airPortToBack, airPortCodeToBack,
                        timeFromBack, dateFromBack,
                        timeToBack, dateToBack,
                        timeInFlightBack,
                        fromToAirLinesBack, FromToChangeBack
                    }: props){
    return (
        <FlightCardStyles>
            <CardHeader>
                <Logo>{AirCompany}</Logo>
                <Price>
                    <TotalCost>{price}₽</TotalCost>
                    <ForOnePassenger>Стоимость для одного взрослого пассажира</ForOnePassenger>
                </Price>
            </CardHeader>
            <FromTo>
                <Block>{cityFrom}<BlueText>({airPortCodeFrom})</BlueText></Block>
                <Arrow>→</Arrow>
                <Block>{cityTo}<BlueText>({airPortCodeTo})</BlueText></Block>
            </FromTo>
            <Date>
                <BlockDate>{timeFrom}<BlueText>{dateFrom}</BlueText></BlockDate>
                <TimeInFlight>🕑{timeInFlight}</TimeInFlight>
                <BlockDate>{timeTo}<BlueText>{dateTo}</BlueText></BlockDate>
            </Date>
            {FromToChange?<BlockOfThree>
                <OneOfThreeSegments><Line/></OneOfThreeSegments>
                <OneOfThreeSegments><OrangeText>1 Пересадка</OrangeText></OneOfThreeSegments>
                <OneOfThreeSegments><Line/></OneOfThreeSegments>
            </BlockOfThree>:<></>}
            <BlockOfThree>
                <OneOfThreeSegments>Рейс выполняет: {fromToAirLines}</OneOfThreeSegments>
                <OneOfThreeSegments/>
                <OneOfThreeSegments/>
            </BlockOfThree>
            <BlueLine/>
            <FromTo>
                <Block>{cityFromBack}<BlueText>({airPortCodeFromBack})</BlueText></Block>
                <Arrow>→</Arrow>
                <Block>{cityToBack}<BlueText>({airPortCodeToBack})</BlueText></Block>
            </FromTo>
            <Date>
                <BlockDate>{timeFromBack}<BlueText>{dateFromBack}</BlueText></BlockDate>
                <TimeInFlight>🕑{timeInFlightBack}</TimeInFlight>
                <BlockDate>{timeToBack}<BlueText>{dateToBack}</BlueText></BlockDate>
            </Date>
            {FromToChangeBack?<BlockOfThree>
                <OneOfThreeSegments><Line/></OneOfThreeSegments>
                <OneOfThreeSegments><OrangeText>1 Пересадка</OrangeText></OneOfThreeSegments>
                <OneOfThreeSegments><Line/></OneOfThreeSegments>
            </BlockOfThree>:<></>}
            <BlockOfThree>
                <OneOfThreeSegments>Рейс выполняет: {fromToAirLinesBack}</OneOfThreeSegments>
                <OneOfThreeSegments/>
                <OneOfThreeSegments/>
            </BlockOfThree>
            <ButtonToChoose>Выбрать</ButtonToChoose>
        </FlightCardStyles>
    )
}

export default FlightCard
