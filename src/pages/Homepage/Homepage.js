import React, { useState } from "react";
import PlayerRenponsive from "../../utils/PlayerResponsive/PlayerResponsive";
import { Youtube, Info, Heart, Instagram, Facebook } from "react-feather";
import "./Homepage.scss";

const Homepage = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    // e.preventDefault();
    // send("SERVICE ID", "TEMPLATE ID", toSend, "User ID")
    //   .then((response) => {
    //     console.log("SUCCESS!", response.status, response.text);
    //   })
    //   .catch((err) => {
    //     console.log("FAILED...", err);
    //   });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

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

      {/* About me */}
      <div className="container container-lg">
        <div className="row">
          <div className="col-12">
            <h2 className="main-title text-left">About me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
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
          <div className="col-md-8 col-12">
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

      <div className="container container-lg contact-me">
        <div className="row">
          <div className="col-12">
            <h2 className="main-title">Contact me</h2>
          </div>
          {/* TODO -  set the service EMailJS */}
          <div className="col-12 col-md-8 order-md-1 order-2">
            <form onSubmit={onSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="emailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Your name</label>
                <input
                  type="text"
                  class="form-control"
                  id="nameInput"
                  aria-describedby="name input"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="messageInput"
                  rows="3"
                ></textarea>
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-4 order-md-1 order-2">
            <div className="contact-me__text-container">
              <p>Do you want to know more?</p>
              <p>Follow me on the Social Networks!</p>

              <div className="pb-2">
                <a href="#facebook">
                  <Facebook></Facebook>
                </a>
                <a href="#instagram">
                  <Instagram></Instagram>
                </a>
              </div>
              <p>You will find my WIPs, sketches, tests and the latest news</p>
              <p>example@gmail.com Milan, Italy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer mt-5 px-3 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <p className="m-0 flex-grow-1 text-center">
                  @Federica Crapanzano minore di tre
                </p>
                <div className="">
                  <a href="#facebook">
                    <Facebook></Facebook>
                  </a>
                  <a href="#instagram">
                    <Instagram></Instagram>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
