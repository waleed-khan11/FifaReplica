import { useState } from "react";
import "./Fifa.css";
import {Link} from "react-router-dom";
function Fifa(props) {
  // const [data, setdata] = useState();
  // function handleDelete() {

  // }
  const [team, setTeam] = useState([{ id: props.r1, name: props.r1n, Total: props.p1 }
    , { id: props.r2, name: props.r2n, Total: props.p2 },
  { id: props.r3, name: props.r3n, Total: props.p3 }]);

  function handelbutton1(studentid) {

    console.log("delete");

    const filteredData = team.filter((se) => se.id != studentid);
    setTeam(filteredData)

  }
 
  function handleDelete(card2id) {

    console.log("delete");

    const filteredData = card2.filter((se) => se.id != card2id);
    setcard2(filteredData)

  }

  const [card1, setcard1] = useState([{ id: 1, Tital: "Leonel Messi", PA: "Lionel Andrés Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team. ", pic: <img src={require('./avatar.jpg')} alt="" style={{ height: "30vh", width: " 100%" }} /> },
  { id: 2, Tital: "Gareth bale", PA: "Gareth Frank Bale MBE is a Welsh professional footballer who plays as a winger for Major League Soccer club Los Angeles FC and the Wales national team       .  ", pic: <img src={require('./bale.jpg')} alt="" style={{ height: "30vh", width: " 100%" }} /> },
  { id: 3, Tital: "Kareem benzima", PA: "Karim Mostafa Benzema is a French professional footballer who plays as a striker for and captains La Liga club Real Madrid, and the France national team    .", pic: <img src={require('./benzima.jpeg')} alt="" style={{ height: "30vh", width: " 100%" }} /> }]);
  const [card2, setcard2] = useState([
    { id: 1, Tital: "Pakistan team ready to win world cup 2026", PA: "The Pakistan national football team represents Pakistan association football in FIFA-authorized events and is controlled by the Pakistan Football Federation, the governing body for football in Pakistan.", pic: <img src={require('./pak.jpg')} alt="" style={{ height: "30vh", width: " 100%" }} /> },
    { id: 2, Tital: "Ronaldo Died sadly", PA: "Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward and captains the Portugal national team. Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards and four European Golden Shoes, the most by a European player", pic: <img src={require('./Ronaldo.jpg')} alt="" style={{ height: "50vh", width: " 70%" }} /> },
    { id: 3, Tital: "Robert lewondoski flied to pakistan", PA: "Robert Lewandowski is a Polish professional footballer who plays as a striker for La Liga club Barcelona and captains the Poland national team.", pic: <img src={require('./robert.jpg')} alt="" style={{ height: "30vh", width: " 100%" }} /> }]);


  function handelbutton2(studentid) {

    console.log("delete");

    const filteredData = card1.filter((e) => e.id != studentid);
    setcard1(filteredData)

  }

  return (
    <div>
      <div >
        <div class="row" >

          <div>

            <nav>
              <h1 id="logo">FIFA</h1>
              <div class="wrapper">

                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />
                <ul class="nav-links">
                  <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                  <li><a href="#">TOURNAMENTS ON FIFA+</a></li>


                  <li>
                    <a href="#" class="desktop-item" >ABOUT FIFA</a>


                    <div class="mega-box">
                      <div class="content">
                        <div class="row">

                        </div>
                        <div class="row">
                          <header>president</header>
                          <ul class="mega-links">
                            <li><a href="#">Graphics</a></li>
                            <li><a href="#">Vectors</a></li>
                            <li><a href="#">Business cards</a></li>
                            <li><a href="#">Custom logo</a></li>
                          </ul>
                        </div>
                        <div class="row">
                          <header>Email Services</header>
                          <ul class="mega-links">
                            <li><a href="#">Personal Email</a></li>
                            <li><a href="#">Business Email</a></li>
                            <li><a href="#">Mobile Email</a></li>
                            <li><a href="#">Web Marketing</a></li>
                          </ul>
                        </div>
                        <div class="row">
                          <header>Security services</header>
                          <ul class="mega-links">
                            <li><a href="#">Site Seal</a></li>
                            <li><a href="#">VPS Hosting</a></li>
                            <li><a href="#">Privacy Seal</a></li>
                            <li><a href="#">Website design</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#" class="desktop-item">Mega Menu</a>

                    <label for="showMega" class="mobile-item">Mega Menu</label>
                    <div class="mega-box">
                      <div class="content">
                        <div class="row">
                        </div>
                        <div class="row">
                          <header>Dmkdfksdmfk</header>
                          <ul class="mega-links">
                            <li><a href="#">Graphics</a></li>
                            <li><a href="#">Vectors</a></li>
                            <li><a href="#">Business cards</a></li>
                            <li><a href="#">Custom logo</a></li>
                          </ul>
                        </div>
                        <div class="row">
                          <header>Email Services</header>
                          <ul class="mega-links">
                            <li><a href="#">Personal Email</a></li>
                            <li><a href="#">Business Email</a></li>
                            <li><a href="#">Mobile Email</a></li>
                            <li><a href="#">Web Marketing</a></li>
                          </ul>
                        </div>
                        <div class="row">
                          <header>Security services</header>
                          <ul class="mega-links">
                            <li><a href="#">Site Seal</a></li>
                            <li><a href="#">VPS Hosting</a></li>
                            <li><a href="#">Privacy Seal</a></li>
                            <li><a href="#">Website design</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                 
                  <li>
                    <a href="#" class="desktop-item" >Waleed Khan</a>


                    <div class="mega-box">
                      <div class="content">
                        <div class="row">

                        </div>
                        
                        <div class="row">
                          <header>Email Services</header>
                          <ul class="mega-links">
                            <li><a href="#">Personal Email</a></li>
                            <li><a href="#">Business Email</a></li>
                            <li><a href="#">Mobile Email</a></li>
                            <li><a href="#">Web Marketing</a></li>
                          </ul>
                        </div>
                      
                      </div>
                    </div>
                  </li>
                  <li>
                  <a href="#" class="desktop-item" >Feedback</a>


<div class="mega-box">
  <div class="content">
    <div class="row">

    </div>
    
    <div class="row">
      <header>Email Services</header>
      <ul class="mega-links">
        <li><Link to="/Routing">  Personal Email </Link></li>
        <li><a href="#">Business Email</a></li>
        <li><a href="#">Mobile Email</a></li>
        <li><a href="#">Web Marketing</a></li>
      </ul>
    </div>
  
  </div>
</div>
                  </li>
                </ul>
                <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
              </div>
            </nav>





          </div>


        </div>
        <div class="row" >
          <div class="col-lg-10" style={{ width: "300px" }} >
            <div class="row" style={{ height: "50vh" }} id="lt">
              
              <h3>Football unites the world </h3>
              <p>
                Football Unites the World is a global movement to inspire, unite and develop through football.
              </p>
              <h4>More from the topic</h4>
            </div>

            <div class="row" style={{ height: "50vh" }} id="lb">
              <h3>World Ranking</h3>
              <p>The official world rankings of the international mens and womens teams.</p>
            </div>
          </div>

          <div class="col-lg">
            <div class="row" id="mt">
            
            <img src={require('./FIFA23.jpg')} alt=""  /> 

              <div style={{ display: "flex" }}>













                {

                  card1.map((card, key) => (
                    <div>

                      <div class="card" key={card.id} style={{ width: "18rem",margin:"50px" }}>

                        <div class="card-body">
                          <p>{card.pic}</p>
                          <h5 class="card-title">{card.Tital}</h5>

                          <p class="card-text">{card.PA}</p>
                          {/* <a href="#" class="btn btn-primary" onClick={() => handelbutton2(card.id)}>Delete</a> */}
                        </div>
                      </div>











                    </div>



                  ))





                }



              </div>
              <div id="mr">
                <h3>More</h3>
                <h5>---------------------------------------------------------------------------------------------------------------------------------------</h5>
              </div>
              {
                card2.map((card, key) => (
                  <div>
                    <div class="card w-75" key={card.id} style={{marginTop:"40px"}}>
                      <div class="card-body">
                        <h5 class="card-title">{card.Tital}</h5>
                        <p>{card.pic}</p>

                        <p class="card-text">{card.PA}</p>
                        {/* <a href="#" class="btn btn-primary" onClick={()=>handleDelete(card.id)}>Button</a> */}
                      </div>
                    </div>












                  </div>



                ))





              }


            </div>

            <div class="row" style={{ height: "50vh" }}>
                <div class="col">
                <h3>Men</h3>
              <table class="table">
                
                <thead>
                  <tr>
                    <th scope="col">Ranking</th>
                    <th scope="col">Countries</th>
                    <th scope="col">points</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>


                {

                  team.map((t, key) => (




                    <tbody >
                      <tr>
                        <th scope="row">{t.id}</th>
                        <td>{t.name}</td>
                        <td>{t.Total}</td>
                        {/* <td><button className="btn btn-danger" onClick={() => handelbutton1(t.id)}> Delete</button></td> */}
                      </tr>


                    </tbody>

                  ))}
              </table>
            </div>

            <div class="col">
            <h3>Women</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Ranking</th>
                    <th scope="col">Countries</th>
                    <th scope="col">points</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>


                {

                  team.map((t, key) => (




                    <tbody >
                      <tr>
                        <th scope="row">{t.id}</th>
                        <td>{t.name}</td>
                        <td>{t.Total}</td>
                        {/* <td><button className="btn btn-danger" onClick={() => handelbutton1(t.id)}> Delete</button></td> */}
                      </tr>


                    </tbody>

                  ))}
              </table>
            </div>


          </div>
          {/* <div class="col-lg-10" style={{ border: "1px solid black", height: "100vh", width: "300px" }}>
                        <h1>Right-side bar</h1>
                    </div> */}
        </div>
        </div>
        <div class="row" >




          <div id="footer">


            <footer class="site-footer">
              <div>
                {/* <img src={require('./kisspng-world-of-coca-cola-soft-drink-the-coca-cola-compan-coca-cola-logo-5a7531f4c4a922.6731914115176299408055.png')} alt="nolodead" style = {{height: "20vh" , width : " 15vw",marginLeft:"200px"}}/>

<img src={require('./visa-logo-png-2017.png')} alt="nolodead" style = {{height: "20vh" , width : " 15vw",marginLeft:"200px"}}/>
<img src={require('./adidas-logo-png-2362.png')} alt="nolodead" style = {{height: "20vh" , width : " 15vw",marginLeft:"200px"}}/> */}



              </div>
              <div class="container">
                <div class="row">


                  <div class="col-xs-6 col-md-3">
                    <h3>Exploresadsa</h3>
                    <ul class="footer-links">
                      <li><a href="http://scanfcode.com/category/c-language/">Competitions</a></li>
                      <li><a href="http://scanfcode.com/category/front-end-development/">About FIFA</a></li>
                      <li><a href="http://scanfcode.com/category/back-end-development/">Women's Football</a></li>
                      <li><a href="http://scanfcode.com/category/java-programming-language/">Social Impact</a></li>
                      <li><a href="http://scanfcode.com/category/android/">Football Development</a></li>
                      <li><a href="http://scanfcode.com/category/templates/">Technical Legal</a></li>
                      <li><a href="">Compliance FIFA/Coca-Cola World ranking</a> </li>
                    </ul>
                  </div>

                  <div class="col-xs-6 col-md-3">
                    <h6>Also visit</h6>
                    <ul class="footer-links">
                      <li><a href="http://scanfcode.com/about/">About Us</a></li>
                      <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                      <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                      <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                      <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                    </ul>
                  </div>
                </div>
                <hr />
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                      <a href="#">huzaifa sajjad</a>.
                    </p>
                  </div>

                  <div class="col-md-4 col-sm-6 col-xs-12">
                    <ul class="social-icons">
                      <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                      <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>

          </div>



        </div>
      </div>

    </div>);
}

export default Fifa;