import React from 'react'
import "./PortfolioCard.css"

export default function PortfolioCard() {
  return (
    <div>
      <div id="all">
        <div id="allcontent">
          <div id="maincontent">
            <div className="portfolio">
              <img
                src="http://www.claudiogomboli.com/lab/gallery/imgs/ecomm.jpg"
                alt="Portfolio img"
              />
              <br />
              <span className="txt">eCommerce . iOS Icon.</span>
              <div className="ombra"></div>
            </div>
            <div className="portfolio">
              <img
                src="http://www.claudiogomboli.com/lab/gallery/imgs/speaker.jpg"
                alt="Portfolio img"
              />
              <br />
              <span className="txt">Speaker . iOS Icon.</span>
              <div className="ombra"></div>
            </div>
            <div className="portfolio">
              <img
                src="http://www.claudiogomboli.com/lab/gallery/imgs/graph01.jpg"
                alt="Portfolio img"
              />
              <br />
              <span className="txt">
                Poster . Laperquisa Cinema .
                <a
                  href="http://cargocollective.com/gomboli/Laperquisa-Cinema-Screening-Posters"
                  target="_blank"
                  title="see more"
                >
                  see more
                </a>
                .
              </span>
              <div className="ombra"></div>
            </div>
            <div className="portfolio">
              <img
                src="http://www.claudiogomboli.com/lab/gallery/imgs/web01.jpg"
                alt="Portfolio img"
              />
              <br />
              <span className="txt">
                Alfa Romeo
                <a
                  href="http://www.alfaromeo.com/carconfigurator/IT/159/index.html"
                  target="_blank"
                  title="Alfa Romeo"
                >
                  Car Configurator
                </a>
                .
                <a href="http://wedoo.it" target="_blank" title="WEDOO">
                  @Wedoo
                </a>
                .
              </span>
              <div className="ombra"></div>
            </div>
            <div className="portfolio">
              <img
                src="http://www.claudiogomboli.com/lab/gallery/imgs/illu01.jpg"
                alt="Portfolio img"
              />
              <br />
              <span className="txt">Mac Book Air . Keynote Illustration</span>
              <div className="ombra"></div>
            </div>
          </div>
          <div id="navi"></div>
          <div className="footer">
            <a href="http://theeggs.biz" alt="home">
              c.gomboli
            </a>{" "}
            /
            <a href="http://lab.theeggs.biz" alt="lab">
              lab
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
