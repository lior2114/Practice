import "./Home.css";
import "./icon-font.css";
import logo from "../../assets/zscylogo.jpg";
import nature_composition_1 from "../../assets/nature_composition_1.png";
import nature_composition_2 from "../../assets/nature_composition_2.png";
import nature_composition_3 from "../../assets/nature_composition_3.png";

export function Home() {
  return (
    <>
      <div className="header">
        <div className="header__logo_Box">
          <img className="header__logo" src={logo} />
        </div>

        <div className="headPrimary">
          <h1 className="headPrimary__text_Box">
            <span className="headPrimary__header_Main">OutDoors</span>
            <span className="headPrimary__buttom_Head">Hello everyone</span>
          </h1>
          <button className="btn btn__White btn__Animated">
            Click to Discover
          </button>
        </div>
      </div>

      <main>
        <section className="section_about">
          <div className="u_center_text u_margin_buttom_8">
            <h2 className="heading_secondery">
              Exciting tours for adventurous people{" "}
            </h2>
          </div>

          <div className="row">
            <div className="col_1_of_2">
              <h3 className="heading_tertiary">
                You're going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                facilis.
              </p>

              <h3 className="heading_tertiary">
                live adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                fugit!
              </p>
              <a href="#" className="btn-text">
                Learn More &rarr;
              </a>
            </div>
            <div className="col_1_of_2">
              <div className="composition">
                <img
                  src={nature_composition_1}
                  alt=""
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src={nature_composition_2}
                  alt=""
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src={nature_composition_3}
                  alt=""
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section_features">
          <div className="row">
            <div className="col_1_of_4">
              <div className="feature_box">
                <i className="feature_box__icon icon-basic-world"></i>
                <h3 className="heading_tertiary u_margin_buttom_3">
                  Explore the world
                </h3>
                <p className="feature_box__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus, adipisci!
                </p>
              </div>
            </div>
            <div className="col_1_of_4">
              <div className="feature_box">
                <i className="feature_box__icon icon-basic-spread-text"></i>
                <h3 className="heading_tertiary u_margin_buttom_3">
                  Explore the world
                </h3>
                <p className="feature_box__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus, adipisci!
                </p>
              </div>
            </div>
            <div className="col_1_of_4">
              <div className="feature_box">
                <i className="feature_box__icon icon-basic-signs"></i>
                <h3 className="heading_tertiary u_margin_buttom_3">
                  Explore the world
                </h3>
                <p className="feature_box__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus, adipisci!
                </p>
              </div>
            </div>
            <div className="col_1_of_4">
              <div className="feature_box">
                <i className="feature_box__icon icon-basic-postcard-multiple"></i>
                <h3 className="heading_tertiary u_margin_buttom_3">
                  Explore the world
                </h3>
                <p className="feature_box__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus, adipisci!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* //section 5 class  34 33:01
      רק דוגמא לשימוש ב _grid ב sass
      <section className="grid_test">
        <div className="row">
          <div className="col_1_of_2">col 1 of 2</div>
          <div className="col_1_of_2">col 1 of 2</div>
        </div>

        <div className="row">
          <div className="col_1_of_3">col 1 of 3</div>
          <div className="col_1_of_3">col 1 of 3</div>
          <div className="col_1_of_3">col 1 of 3</div>
        </div>

        <div className="row">
          <div className="col_1_of_3">col 1 of 3</div>
          <div className="col_2_of_3">col 2 of 3</div>
        </div>

        <div className="row">
          <div className="col_1_of_4">col 1 of 4</div>
          <div className="col_1_of_4">col 1 of 4</div>
          <div className="col_1_of_4">col 1 of 4</div>
          <div className="col_1_of_4">col 1 of 4</div>
        </div>

        <div className="row">
          <div className="col_1_of_4">col 1 of 4</div>
          <div className="col_1_of_4">col 1 of 4</div>
          <div className="col_2_of_4">col 2 of 4</div>
        </div>

        <div className="row">
          <div className="col_1_of_4">col 1 of 4</div>
          <div className="col_3_of_4">col 3 of 4</div>
        </div>
      </section> */}
    </>
  );
}
