import  React from 'react';
import BaseChat from './BaseChat'

class Screen extends React.Component {
    render(){
        return(
            <>
            <div className="screen">
                <BaseChat/>
            </div>
            </>
        );
    }
}

export default Screen