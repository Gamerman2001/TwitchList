import React, { useState, useEffect } from "react";

import api from "../Api";

export default function Streams() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`https://api.twitch.tv/helix/streams`);
      let dataArray = result.data.data;
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
          .replace("width", "300")
          .replace("height", "300");
        stream.thumbnail_url = newURL;
        return stream;
      });
      setChannels(finalArray);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center"> Popular Games</h1>
      <div className="row">
        {channels.map(game => (
          <div key={game.id} className="col-4">
            <div className="card mt-5">
              <img
                className="card-img-top"
                src={game.box_art_url}
                alt={game.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{game.name}</h5>
                <button className="btn btn-success ">
                  <Link
                    className="link"
                    to={{
                      pathname: "game/" + game.name,
                      state: {
                        gameID: game.id
                      }
                    }}
                  >
                    {game.name} streams{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
