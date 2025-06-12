import React from 'react'
import Options from '../icons/Options'

const HistoryTiles = ({text}:{text:string}) => {
  return (
    <div>
        <div>
            {text}
        </div>
        <div>
            <Options />
        </div>
    </div>
  )
}

export default HistoryTiles
