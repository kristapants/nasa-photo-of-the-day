import React from 'react'
import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`
const CalendarExplainer = styled.div`
  padding: 15px;
`


class Calendar extends React.Component {
    state = {
      startDate: new Date()
    };
   
    handleChange = date => {
      this.setState({
        startDate: date
      });
    };
   
    render() {
      return (
        <CalendarContainer>
          <Datepicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            inline
          />
          <CalendarExplainer>
            <h3>Coming Soon!</h3>
            <p>Explore the archive of NASA Photos of the Day by date.</p>
          </CalendarExplainer>
        </CalendarContainer>
      );
    }
  }

export default Calendar;