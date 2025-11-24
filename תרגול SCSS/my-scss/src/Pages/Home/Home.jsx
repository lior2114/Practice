import "./Home.css";
import logo from "../../assets/zscylogo.jpg";

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
            <h2 className="heading_secondery">Exciting tours for adventurous people </h2>
          </div>

          <div className="row">
            <div className="col_1_of_2">
              <h3 className="heading_tertiary">You're going to fall in love with nature</h3>
              <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, facilis.</p>
              
              <h3 className="heading_tertiary">live adventures like you never have before</h3>
              <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fugit!</p>
            </div>
            <div className="col_1_of_2">
              image composition
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
