import React from 'react';
import Calendar from './Calendar';

class CalendarC extends React.Component {
    componentDidMount(){
        document.title = "Календарь"
    }
    render() {
        return <Calendar {...this.props}/>
    }
};

export default CalendarC;