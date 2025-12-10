import "./Home.css";
import "./icon-font.css";
import logo from "../../assets/zscylogo.jpg";
import nature_composition_1 from "../../assets/nature_composition_1.png";
import nature_composition_2 from "../../assets/nature_composition_2.png";
import nature_composition_3 from "../../assets/nature_composition_3.png";
import nature_composition_8 from "../../assets/nat-8.jpg";
import nature_composition_9 from "../../assets/nat-9.jpg";
import video_background from "../../assets/video.mp4";
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
          <button
            className="btn btn__White btn__Animated"
            onClick={() => window.open("https://unsplash.com/", "_blank")}
          >
            Click to Discover more pictures
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
        <section className="section_tours">
          <div className="u_center_text u_margin_buttom_8">
            <h2 className="heading_secondery">Most puplar tours</h2>
          </div>

          <div className="row">
            {/* card 1 */}
            <div className="col_1_of_3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      Explore caves
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>3 day tour</li>
                      <li>up to 40 people</li>
                      <li>2 tour guys</li>
                      <li>sleep in cozy hotels</li>
                      <li>difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back  card__side--back-1 ">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">only</p>
                      <p className="card__price-value">$100</p>
                    </div>
                    <button className="btn btn__White btn__Animated">
                      Book now!
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="col_1_of_3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      the forests Explorer
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>3 day tour</li>
                      <li>up to 40 people</li>
                      <li>2 tour guys</li>
                      <li>sleep in cozy hotels</li>
                      <li>difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back  card__side--back-2 ">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">only</p>
                      <p className="card__price-value">$497</p>
                    </div>
                    <button className="btn btn__White btn__Animated">
                      Book now!
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="col_1_of_3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      the snow adventure
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>3 day tour</li>
                      <li>up to 40 people</li>
                      <li>2 tour guys</li>
                      <li>sleep in cozy hotels</li>
                      <li>difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back  card__side--back-3 ">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">only</p>
                      <p className="card__price-value">$800</p>
                    </div>
                    <button className="btn btn__White btn__Animated">
                      Book now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u_center_text u_margin_top_huge">
            <button className="btn btn__green">dicover all tours</button>
          </div>
        </section>

        <section className="section-stories">
          <div className="u_center_text u_margin_buttom_8">
            <h2 className="heading_secondery">we make people happy</h2>
          </div>
          <div className="row">
            <div className="story">
              {/* 
                מה זה figure?
                תגית figure ב-HTML משמשת להקיף תוכן גרפי (כגון תמונה, איור, דיאגרמה וכו'), כך שיהיה אפשר לתת לו כיתוב (בדרך כלל עם figcaption). 
                זה עוזר גם למשמעות הסמנטית והנגשת הדף.
              */}
              <figure className="story__shape">
                <img className="story__img" src={nature_composition_8} alt="" />
                <figcaption className="story__caption"> woman </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading_tertiary">
                  i had the best week ever with my family
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit.sfdfsddsfdfs Ullam, rem. Lorem ipsum dolor, sit amet
                  consectetursfdsfdsfd adipisicing elit. Ullam, rem. Lorem ipsum
                  dolor, sit ametfsdfsdsfdsfd consectetur adipisicing elit.
                  Ullam, rem.dsfdfssfdsfd
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="story">
              {/* 
                מה זה figure?
                תגית figure ב-HTML משמשת להקיף תוכן גרפי (כגון תמונה, איור, דיאגרמה וכו'), כך שיהיה אפשר לתת לו כיתוב (בדרך כלל עם figcaption). 
                זה עוזר גם למשמעות הסמנטית והנגשת הדף.
              */}
              <figure className="story__shape">
                <img className="story__img" src={nature_composition_9} alt="" />
                <figcaption className="story__caption"> man </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading_tertiary">i had the best week</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime delectus est doloribus eaque modi harum voluptatibus
                  tempore placeat. Doloribus cum, sit officia perspiciatis
                  beatae corrupti cupiditate, possimus eveniet soluta neque
                  temporibus? Corporis assumenda id dolore vitae voluptatibus,
                  animi incidunt inventore reprehenderit mollitia a eum
                  repudiandae nam, nihil rem ducimus expedita.
                </p>
              </div>
            </div>
          </div>
          <div className="u_center_text">
            <a href="#" className="btn-text btn-text__bigger ">
              read all stories &rarr;
            </a>
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
