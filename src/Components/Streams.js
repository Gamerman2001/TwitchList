import React, {useState, useEffect} from 'react'
import api from '../Api'

export default function Streams() {
    const [channels, setChannels] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get(`https://api.twitch.tv/helix/streams`)
            let dataArray = result.data.data
            let gameIDs = dataArray.map((streams) => streams.game_id)

            let baseURL = `https://api.twitch.tv/helix/games?`
            let queryParams = ''
            gameIDs.map((id) => {return queryParams + `id=${id}&`})
            
            let finalURL = baseURL + queryParams
        }
       fetchData()
    }, [])

    return (
        <div>
            Stream Component
        </div>
    )
}
