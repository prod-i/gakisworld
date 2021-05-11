import   React        from 'react';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';
import Admin from './Admin';

class AdminC extends React.Component {

    render() {
        return <Admin />
    }
};



let mapStateToProps = (state) => ({

});

export default compose
(
    connect(mapStateToProps, {}),
    withRouter,
)   (AdminC);