import React from "react";
import PlayerRenponsive from "../../utils/PlayerResponsive/PlayerResponsive";
import { Youtube, Info, Heart } from "react-feather";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mt-5">
              <PlayerRenponsive
                // light={
                //   "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                // }
                // playIcon={
                //   <div className="youtube-player-icon-container">
                //     <Youtube className="youtube-player-icon" />
                //   </div>
                // }
                url={"https://www.youtube.com/watch?v=ysz5S6PUM-U"}
                height="541px"
                width="100%"
              ></PlayerRenponsive>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5" id="portfolio">
        <div className="row">
          <div className="col-12">
            <h2 className="main-title">Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <a href="#" className="col-4">
            <div className="img-container">
              <div className="img-overlay px-5">
                <Info></Info>
                <span>
                  Best waifu, 2021Lorem ipsum dolor sit amet, consectetur
                  adipiscing eli...
                </span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80"
                className="img-element"
              ></img>
            </div>
          </a>
          <div className="col-8">
            <div className="img-container">
              <img src="https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></img>
            </div>
          </div>

          <div className="col-4">
            <div className="img-container">
              <img src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></img>
            </div>
          </div>

          <div className="col-4">
            <div className="img-container">
              <img src="https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></img>
            </div>
          </div>

          <div className="col-4">
            <div className="img-container">
              <img src="https://images.unsplash.com/photo-1590796583326-afd3bb20d22d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <h2 className="main-title text-left">About me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img
              src="https://randomuser.me/api/portraits/women/20.jpg"
              alt="..."
              className="img-thumbnail"
            />

            <div className="skill-section mt-4">
              <h4>SKILLS</h4>
              <div className="mt-4">
                <p>Touch design</p>
                <div className="d-flex flex-row justiy-content-between gap-1">
                  <Heart className="heart-active"></Heart>
                  <Heart className="heart-active"></Heart>
                  <Heart className="heart-active"></Heart>
                  <Heart className="heart-active"></Heart>
                  <Heart className=""></Heart>
                </div>
              </div>

              <div className="mt-4">
                <p>Tutt' e cos'</p>
                <div className="d-flex flex-row justiy-content-between gap-1">
                  <Heart className="heart-active"></Heart>
                  <Heart className="heart-active"></Heart>
                  <Heart className="heart-active"></Heart>
                  <Heart className="heart-active"></Heart>
                  <Heart className=""></Heart>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <h3 className="section-title">Hello!</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.<b>Nemo enim</b> ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit,
            </p>
            <p>
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi{" "}
              <a href="#" className="link-about">
                consequatur
              </a>
              ?
            </p>
            <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
