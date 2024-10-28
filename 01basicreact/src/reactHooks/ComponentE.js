import React,{useContext}from 'react'
import ComponentF from './ComponentF'
import { channelContext, userContext } from '../App1'


function ComponentE() {
    const user = useContext(userContext)
    const channel = useContext(channelContext)
  return (
    <div>
        {user} is a  {channel}
    </div>
  )
}

export default ComponentE