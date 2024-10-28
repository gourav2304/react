import React from 'react'
import { userContext ,channelContext} from '../App1';

function ComponentF() {
  return (
    <div>
        <userContext.Consumer>
            
            {
                user => {
                    return(
                        <channelContext.Consumer>
                        {
                            source=>{
                                return <div>{user} is a {source} </div>
                                }
                        }
                        </channelContext.Consumer>
                    ) 
                }
            }
            
        </userContext.Consumer>
    </div>
  )
}

export default ComponentF