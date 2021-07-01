import React from 'react';
import Calendar from './Calendar';

class CalendarC extends React.Component {
    componentDidMount(){
        document.title = "Календарь"
        window.scrollTo(0, 0);
    }
    render() {
        return <Calendar {...this.props}/>
    }
};

export default CalendarC;