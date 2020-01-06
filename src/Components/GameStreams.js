import React, {useState, useEffect} from "react";
import api from "../Api";

export default function GameStreams({match, location}) {
  const [streamData, setStreamData] = useState([])
  const [viewers, setViewers] = useState(0)

  useEffect(()=> {
    const fetchData = async () => {
      const result = await api.get(`https://api.twitch.tv/helix/streams?first=20&game_id=${location.state.gameID}`)
        let dataArray = result.data.data
        let finalArray = dataArray.map(stream => {
          let newURL = stream.thumbnail_url
            .replace('{width}','300')
            .replace('{height}','300')
          stream.thumbnail_url = newURL
          return stream
        })
        let totalViews = finalArray.reduce((acc, val)=> {
          return(acc + val.viewer_count)
        }, 0)

        setViewers(totalViews)
        setStreamData(finalArray)
    }
    fetchData()
  },[location.state.gameID])
  return <div>

    <h1 className='text-center'>{match.params.id}</h1>
    <h3 className='text-center'> There are currently 
      <strong className='text-primary'> {viewers}</strong> people watching {match.params.id}
    </h3>
    <div className='row'>
      {streamData.map((stream)=> {
        return <div key={stream.user_name} className='col-lg-4 col-md-6 col-sm-12 mt-5'>
          <div className='card'>
              <img className='card-img-top' src={stream.thumbnail_url} alt={stream.gameName} />
              <div className='card-body'>
                  <h5 className='card-title'>{stream.user_name}</h5>
                  <div className='card-text'>
                    {stream.viewer_count} live viewers
                  </div>
                  <button className='btn btn-success' >
                    <a
                      className='link'
                      href={'https://twitch.tv/' + stream.user_name}
                      target='_blank'
                      rel='noopener noreferrer'
                      > Watch {stream.user_name}'s channel</a>
                    </button>
              </div>
          </div>
        </div>
      })}

    </div>
      </div>;
}
