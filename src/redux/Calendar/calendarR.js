const CONTROL_CALENDAR_VIS = 'calendar/CONTROL_CALENDAR_VIS';

let initialState = {
    calendarVis: true,
};

const calendarR = (state = initialState, action) => {
    switch (action.type) {
        case CONTROL_CALENDAR_VIS:
            return {
                ...state,
                calendarVis: action.calendarVis,
            }
        default:
            return state;
    }
}

export const CONTROLCalendarVis = (calendarVis) => ({ type: CONTROL_CALENDAR_VIS, calendarVis });

export default calendarR;