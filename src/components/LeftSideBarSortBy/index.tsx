import React from "react";
import styled from "styled-components";

const LeftSideBarSortByStyle = styled.div`
  width: 100%;
  padding: 5px;
`

const Header = styled.h1`
  font-size: 20px;
  font-family: Helvetica;
  font-weight: bold;
  color: black;
`


function LeftSideBarSortBy(props: any){
    return (
        <LeftSideBarSortByStyle>
            <Header>{props.header}</Header>
            {props.children}
        </LeftSideBarSortByStyle>
    )
}

export default LeftSideBarSortBy;
