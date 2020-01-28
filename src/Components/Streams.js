import React, { useState, useEffect } from "react";
import api from "../Api";

export default function Streams() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log(process.env.API_VALUE)
      const result = await api.get(`https://api.twitch.tv/helix/streams`);
      let dataArray = result.data.data;
      console.log(result)
      let gameIDs = dataArray.map(streams => streams.game_id);
      let baseURL = `https://api.twitch.tv/helix/games?`;
      let queryParams = "";
      gameIDs.map(id => {
        return (queryParams += `id=${id}&`);
      });
      let finalURL = baseURL + queryParams;
      let gameNames = await api.get(finalURL);
      let gameNameArray = gameNames.data.data;
      let finalArray = dataArray.map(stream => {
        stream.gameName = "";
        gameNameArray.map(name => {
          if (stream.game_id === name.id) {
            return (stream.gameName = name.name);
          } else {
            return stream.gameName;
          }
        });
        let newURL = stream.thumbnail_url
          .replace("{width}", "300")
          .replace("{height}", "300");
        stream.thumbnail_url = newURL;
        return stream;
      });
      setChannels(finalArray);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center"> Top Streams</h1>
      <div className="row">
        {channels.map(game => (
          <div key={game.id} className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card">
              <img
                className="card-img-top"
                src={game.thumbnail_url}
                alt={game.gameName}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{game.user_name}</h5>
                <h5 className="card-text">{game.gameName}</h5>
                <div className="card-text">
                    {game.viewer_count} live viewers
                </div>
                <button className="btn btn-success ">
                  <a href={"https://twitch.tv/" + game.user_name}>
                      watch {game.user_name}'s channel
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
