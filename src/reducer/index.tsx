import flights from '../data/flights.json'

type Settings = {
    sortBy: 'priceUp' | 'priceDown' | 'timeInFlight',
    filter: '00' | '01' | '10' | '11',
    price: {
        from: number,
        to: number
    },
    CompanyNames: Array<string>,
    SelectedCompanyNames: Array<string>,
    flights: Array<object>
}

type Card = {
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
    FromToChangeBack: boolean,
    allFlightTime: number
}

const calcTimeFromMinutes = (minutes: number):string => {
    let hours = 0
    let mins = 0
    hours = Math.trunc(minutes/60)
    mins = minutes - hours*60
    return `${hours}ч ${mins}мин`
}
const getDepartureCity = (obj: Array<any>): string => {
    return obj[0].departureAirport.caption
}
const getArrivalCity = (obj: Array<any>): string => {
    if(obj.length === 1){
        return obj[0].arrivalAirport.caption
    }
    return obj[1].arrivalAirport.caption
}
const getDepartureAirPort = (obj: Array<any>): string => {
    return obj[0].departureAirport.caption
}
const getDepartureAirPortCode = (obj: Array<any>): string => {
    return obj[0].departureAirport.uid
}
const getArrivalAirPort = (obj: Array<any>): string => {
    if(obj.length === 1){
        return obj[0].arrivalAirport.caption
    }
    return obj[1].arrivalAirport.caption
}
const getArrivalAirPortCode = (obj: Array<any>): string => {
    if(obj.length === 1){
        return obj[0].arrivalAirport.uid
    }
    return obj[1].arrivalAirport.uid
}
const getDepartureTime = (obj: Array<any>):string => {
    let time = obj[0].departureDate.split('T')[1]
    let arrTime = time.split(':')
    return arrTime[0] + ':' + arrTime[1]
}
const getDepartureDate = (obj: Array<any>):string => {
    let date = obj[0].departureDate.split('T')[0]
    let arrDate = date.split('-')
    return arrDate[2] + getMonth(arrDate[1])
}
const getMonth = (number: string) => {
    let num = parseInt(number);
    let MonthArr = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
    return ` ${MonthArr[num - 1]}`
}
const getArrivalTime = (obj: Array<any>):string => {
    if(obj.length === 1){
        let time = obj[0].arrivalDate.split('T')[1]
        let arrTime = time.split(':')
        return arrTime[0] + ':' + arrTime[1]
    }
    let time = obj[1].arrivalDate.split('T')[1]
    let arrTime = time.split(':')
    return arrTime[0] + ':' + arrTime[1]
}
const getArrivalDate = (obj: Array<any>):string => {
    if(obj.length === 1){
        let date = obj[0].arrivalDate.split('T')[0]
        let arrDate = date.split('-')
        return arrDate[2] + getMonth(arrDate[1])
    }
    let date = obj[1].arrivalDate.split('T')[0]
    let arrDate = date.split('-')
    return arrDate[2] + getMonth(arrDate[1])
}

const generateDataToCards = (data: any = flights) => {
    let arrayOfCards:Array<Card> = []
    for(let i = 0; i < data.result.flights.length; i++){
        let obj:Card = {
            AirCompany: data.result.flights[i].flight.carrier.caption,
            price: data.result.flights[i].flight.price.total.amount,
            timeInFlight: calcTimeFromMinutes(data.result.flights[i].flight.legs[0].duration),
            cityFrom: getDepartureCity(data.result.flights[i].flight.legs[0].segments),
            airPortFrom: getDepartureAirPort(data.result.flights[i].flight.legs[0].segments),
            airPortCodeFrom: getDepartureAirPortCode(data.result.flights[i].flight.legs[0].segments),
            cityTo: getArrivalCity(data.result.flights[i].flight.legs[0].segments),
            airPortTo: getArrivalAirPort(data.result.flights[i].flight.legs[0].segments),
            airPortCodeTo: getArrivalAirPortCode(data.result.flights[i].flight.legs[0].segments),
            FromToChange: data.result.flights[i].flight.legs[0].segments.length !== 1,
            timeFrom: getDepartureTime(data.result.flights[i].flight.legs[0].segments),
            dateFrom: getDepartureDate(data.result.flights[i].flight.legs[0].segments),
            timeTo: getArrivalTime(data.result.flights[i].flight.legs[0].segments),
            dateTo: getArrivalDate(data.result.flights[i].flight.legs[0].segments),
            fromToAirLines: data.result.flights[i].flight.legs[0].segments[0].airline.caption,
            timeInFlightBack: calcTimeFromMinutes(data.result.flights[i].flight.legs[1].duration),
            cityFromBack: getDepartureCity(data.result.flights[i].flight.legs[1].segments),
            airPortFromBack: getDepartureAirPort(data.result.flights[i].flight.legs[1].segments),
            airPortCodeFromBack: getDepartureAirPortCode(data.result.flights[i].flight.legs[1].segments),
            cityToBack: getArrivalCity(data.result.flights[i].flight.legs[1].segments),
            airPortToBack: getArrivalAirPort(data.result.flights[i].flight.legs[1].segments),
            airPortCodeToBack: getArrivalAirPortCode(data.result.flights[i].flight.legs[1].segments),
            FromToChangeBack: data.result.flights[i].flight.legs[1].segments.length !== 1,
            timeFromBack: getDepartureTime(data.result.flights[i].flight.legs[1].segments),
            dateFromBack: getDepartureDate(data.result.flights[i].flight.legs[1].segments),
            timeToBack: getArrivalTime(data.result.flights[i].flight.legs[1].segments),
            dateToBack: getArrivalDate(data.result.flights[i].flight.legs[1].segments),
            fromToAirLinesBack: data.result.flights[i].flight.legs[1].segments[0].airline.caption,
            allFlightTime: data.result.flights[i].flight.legs[0].duration + data.result.flights[i].flight.legs[1].duration
        }
        arrayOfCards.push(obj)
    }
    return arrayOfCards
}

let InitialState: Settings = {
    sortBy: 'priceUp',
    filter: '00',
    price: {
        from: 0,
        to: 1000000
    },
    CompanyNames: [],
    SelectedCompanyNames: [],
    flights: generateDataToCards()
}

type Action = {
    type: 'sortBy' | 'filter' | 'priceFrom' | 'priceTo' | 'addSelectedCompanyName' | 'removeSelectedCompanyName' | 'addCompanyName' | 'removeCompanyName' | 'clearCompanyNames'
    sortBy: 'priceUp' | 'priceDown' | 'timeInFlight',
    filter: '00' | '01' | '10' | '11',
    priceFrom: number,
    priceTo: number,
    addCompanyName: string,
    removeCompanyName: string,
    addSelectedCompanyName: string,
    removeSelectedCompanyName: string
}

export const reducer = (state: Settings = InitialState, action: Action) => {
    switch (action.type) {
        case "sortBy":
            return {
                ...state,
                sortBy: action.sortBy
            }
        case "filter":
            return {
                ...state,
                filter: action.filter
            }
        case "priceFrom":
            return {
                ...state,
                price: {
                    ...state.price,
                    from: action.priceFrom
                }
            }
        case "priceTo":
            return {
                ...state,
                price: {
                    ...state.price,
                    to: action.priceTo
                }
            }
        case "addSelectedCompanyName":
            return {
                ...state,
                SelectedCompanyNames: [...state.SelectedCompanyNames, action.addCompanyName]
            }
        case "removeSelectedCompanyName":
            return {
                ...state,
                SelectedCompanyNames: state.SelectedCompanyNames.filter(e => e !== action.removeCompanyName)
            }
        case "addCompanyName":
            return {
                ...state,
                CompanyNames: [...state.SelectedCompanyNames, action.addCompanyName]
            }
        case "removeCompanyName":
            return {
                ...state,
                CompanyNames: state.SelectedCompanyNames.filter(e => e !== action.removeCompanyName)
            }
        case "clearCompanyNames":
            return {
                ...state,
                CompanyNames: []
            }
        default:
            return state
    }
}
