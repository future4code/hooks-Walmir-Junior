import React from 'react'
import Screen from './Screen'
import BaseChat from './BaseChat'


class BackgroundChat extends React.Component {
    render(){
        return(
            <Screen>
                <BaseChat>
                    <div className="background-chat">
                        

                    </div>
                </BaseChat>
            </Screen>
        );
    }
}

export default BackgroundChat