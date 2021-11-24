function FooterGames() {
  return (
    <>
      <footer style={{ backgroundColor: "rgb(2, 85, 85)", marginTop: "40px"}}>
        <div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "15px" }} class="col-sm-12 col-md-6">
              <h6 style={{ color: "rgba(202, 171, 31, 0.473)" }}>About</h6>
              <p style={{color:"white", marginLeft:"30px"}} className="text-justify">
                More than 35 million gamers from over 150 countries visit our websites every single month. Since 2014
                alone, our games have been played more than 19 billion times! We’ve drawn millions of players to
                franchises like Bubble Shooter, MahJongCon, Sara's Cooking Class, and Happy Wheels and have helped them
                become some of the most iconic games on the web. We are also the proud owners of dozens of other
                websites including: Gamesgames, A10, and Mousebreaker along with additional sites in a variety of
                languages.
              </p>
            </div>

            <div style={{ marginTop: "15px", paddingLeft:"70px" }} className="col-6 col-md-3">
              <h6 style={{ color: "rgba(202, 171, 31, 0.473)" }}>Categories</h6>
              <ul style={{ color: "rgba(202, 171, 31, 0.473)" }} className="footer-links ">
                <li>
                  <a style={{ color: "white" }} href="google.com">
                    Website Design
                  </a>
                </li>
                <li>
                  <a style={{ color: "white" }} href="#">
                    UI Design
                  </a>
                </li>
                <li>
                  <a style={{ color: "white" }} href="#">
                    Web Development
                  </a>
                </li>
                <li>
                  <a style={{ color: "white" }} href="#">
                    Video Editor
                  </a>
                </li>
                <li>
                  <a style={{ color: "white" }} href="#">
                    Theme Creator
                  </a>
                </li>
                <li>
                  <a style={{ color: "white" }} href="#">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: "15px" }} className="col-6 col-md-3">
              <h6 style={{ color: "rgba(202, 171, 31, 0.473)" }}>Quick Links</h6>
              <ul style={{ color: "rgba(202, 171, 31, 0.473)" }} className="footer-links">
                <li>
                  <a style={{  color: "white" }} href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a style={{  color: "white" }} href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a style={{  color: "white" }} href="#">
                    Contribute
                  </a>
                </li>
                <li>
                  <a style={{ color: "white" }} href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a style={{  color: "white" }} href="#">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div style={{ textAlign:"center" }} className="col-md-8 col-sm-6 col-12">
              <p style={{ color: "rgba(202, 171, 31, 0.473)" }} className="copyright-text">
                Copyright © 2020 All Rights Reserved by
                <a style={{ color: "white" }} href="#">
                  Code4Education
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterGames
