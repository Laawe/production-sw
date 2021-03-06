import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { BASE64 } from "./constants/base64";
import { convertToBase64 } from "./utils/base64.utils";

import "./Main.css";

function Main() {
  return (
    <Router baseline="/">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Universo L4</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <NavLink
                activeClassName={"active"}
                exact={true}
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName={"active"}
                className="nav-link"
                to="/historia"
              >
                Historia
              </NavLink>
              <NavLink
                activeClassName={"active"}
                className="nav-link"
                to="/personajes"
              >
                Personajes
              </NavLink>
              <NavLink
                activeClassName={"active"}
                className="nav-link"
                to="/guiones"
              >
                Guiones
              </NavLink>
            </nav>
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/personajes">
            <Characters />
          </Route>
          <Route exact path="/historia">
            <Stories />
          </Route>
          <Route exact path="/season-one">
            <SeasonOne />
          </Route>
          <Route exact path="/guiones">
            <Scripts />
          </Route>
        </Switch>

        <footer className="text-white-50 Footer">
          <p>
            September 2021 Rights Reserved By{" "}
            <a href="https://twitter.com/lawe_e" className="text-white">
              @lawe_e.
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="Home">
      <main className="px-3 Home__main">
        <h1>??Hola!</h1>
        <p className="lead">
          Aqu?? vas a encontrar toda la informaci??n de la historia y de los
          personajes.
        </p>
        <p className="lead">
          <Link
            className="btn btn-lg btn-secondary fw-bold border-white bg-white"
            to="/historia"
          >
            Conocer m??s...
          </Link>
        </p>
      </main>
    </div>
  );
}

function Characters() {
  return (
    <main className="Characters px-3">
      <h1>Personajes</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4 text-black Characters__cards">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Ana</h5>
              <span className="card-text">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>MBTI: </strong> ESFP
                  </li>
                  <li className="list-group-item">
                    <strong>Vestimenta: </strong> Blusa naranja (grande), short azul marino, tenis, lentes de sol
                  </li>
                  <li className="list-group-item">
                    <strong>Color: </strong> Azul
                  </li>
                  <li className="list-group-item">
                    <strong>Pel??cula favorita: </strong> Goodfellas
                  </li>
                  <li className="list-group-item">
                    <strong>Objeto: </strong> Gorra de la suerte
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Mar??a</h5>
              <span className="card-text">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>MBTI: </strong> INFJ
                  </li>
                  <li className="list-group-item">
                    <strong>Vestimenta: </strong> Pantal??n de vestir beige/caqui, blusa blanca, tenis blancos, bolsa de mano negra, su??ter amarillo.
                  </li>
                  <li className="list-group-item">
                    <strong>Color: </strong> Amarillo
                  </li>
                  <li className="list-group-item">
                    <strong>Pel??cula favorita: </strong> Sleepless in Seattle
                  </li>
                  <li className="list-group-item">
                    <strong>Objeto: </strong> Cajita musical
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Adriana</h5>
              <span className="card-text">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>MBTI: </strong> ESTJ
                  </li>
                  <li className="list-group-item">
                    <strong>Vestimenta: </strong> Pantal??n de vestir negro, zapatillas caf??, abrigo, aretes, maquillaje, bolsa de mano color negro
                  </li>
                  <li className="list-group-item">
                    <strong>Color: </strong> Caf??
                  </li>
                  <li className="list-group-item">
                    <strong>Pel??cula favorita: </strong> Mean Girls
                  </li>
                  <li className="list-group-item">
                    <strong>Objeto: </strong> Primeras zapatillas
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Luc??a</h5>
              <span className="card-text">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>MBTI: </strong> INFP
                  </li>
                  <li className="list-group-item">
                    <strong>Vestimenta: </strong> Traje azul marino (una talla m??s grande), blusa blanca, tenis blancos, mascada naranja, sin aretes
                  </li>
                  <li className="list-group-item">
                    <strong>Color: </strong> Naranja
                  </li>
                  <li className="list-group-item">
                    <strong>Pel??cula favorita: </strong> Cl??o 5 ?? 7
                  </li>
                  <li className="list-group-item">
                    <strong>Objeto: </strong> Libro Una habitaci??n propia de V. Woolf, regalo de su abuela
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Stories() {
  return (
    <main className="Stories px-3">
      <h1>Historia</h1>
      <section className="Stories__description">
        <span className="lead">
          <p>El concepto:</p> Las Cuatro (L4) comparten amistad, amor, familia,
          eventos sociales, laborales, comunitarios, as?? como el contexto
          social, econ??mico y temporal mientras intentan sortear cada evento
          ayud??ndose entre s??.
        </span>
        <span className="lead">
          <p>El contexto:</p> Latinoam??rica desde 90s hasta actualidad, todas
          tienen entre 30 y 27 a??os en el 2020. Todas son oriundas de El Valle
          una peque??a ciudad de M??xico, que se dedica al turismo gracias a las
          altas monta??as que rodean la ciudad. Mar??a, Adriana, Luc??a y Ana viven
          en El Fort??n, un barrio de El Valle.
        </span>
      </section>
      <section className="Stories__content">
        <h3>Contenido</h3>
        <p className="lead">
          El "Universo" se divide en el cortometraje y la serie web, aqu?? abajo
          est??n los detalles de cada producci??n:
        </p>
        <div className="card-group Stories__cards .col-md-12">
          <div className="card text-white bg-dark Stories__cards--short">
            <div className="card-body">
              <h5 className="card-title">Cortometraje</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>T??tulo:</strong> Quemado
                </li>
                <li className="list-group-item">
                  <strong>G??nero:</strong> Comedia dram??tica.
                </li>
                <li className="list-group-item">
                  <strong>Sinopsis:</strong> Mar??a, Adriana y su hermana Luc??a
                  van a salir a una plaza comercial de su ciudad, est??n en casa
                  de Mar??a maquill??ndose, pein??ndose y cambi??ndose, s??lo que en
                  esta ocasi??n la casa de Mar??a apesta a quemado, a cenizas, a
                  humo; la noche anterior un grupo delincuencial quem?? varios
                  autos incluido el del vecino de enfrente de d??nde vive Mar??a.
                  Esto detona una discusi??n entre las amigas.
                </li>
                <li className="list-group-item">
                  <strong>Duraci??n:</strong> 4 minutos
                </li>
                <li className="list-group-item">
                  <strong>Tema:</strong> Violencia social, amistad
                </li>
                <li className="list-group-item">
                  <strong>Tono:</strong> C??mico
                </li>
              </ul>
              <p className="card-text bg-white Stories__cards--short__link">
                <Link className="btn btn-lg btn-primary" to="/guiones">
                  Leer gui??n
                </Link>
              </p>
            </div>
          </div>
          <div className="card text-white bg-dark Stories__cards--series .col-md-12">
            <div className="card-body">
              <h5 className="card-title">Serie web</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>T??tulo:</strong> Las Cuatro
                </li>
                <li className="list-group-item">
                  <strong>G??nero:</strong> Sitcom.
                </li>
                <li className="list-group-item">
                  <strong>Sinopsis/Outline:</strong> Las Cuatro es una sitcom
                  que muestra a Luc??a, Adriana, Mar??a y Ana tratando de lidiar
                  con la vida adulta de formas muy absurdas pero hay que
                  resaltar que cada problema lo resuelven entre todas; se podr??a
                  decir que incluso tienen una relaci??n codependiente, pero dado
                  que tienen a??os de amistad, lazos familiares y amorosos, se
                  justifica. B??sicamente la sitcom se divide en cinco episodios.
                  En el piloto conocemos a Las Cuatro, como se hacen llamar,
                  visitando a una pitonisa y queriendo conocer su futuro m??s
                  pr??ximo, el resto de los episodios se centra en alguna de
                  ellas, donde se plantea el problema o la necesidad de la
                  protagonista en ese momento. En cada episodio es bastante
                  notorio que necesitan ayuda entre ellas y necesitan ayudar a
                  la otra, su din??mica les ha funcionado hasta ahora, pero ??por
                  qu?? son tan unidas? Bueno, Luc??a y Adriana son hermanas, claro
                  que pelean mucho pero eso no impide que se relacionen. Mar??a
                  es la mejor amiga de Adriana desde la escuela primaria, por lo
                  que conoce a Luc??a desde muy peque??a y tambi??n la ve como una
                  hermana menor. Ana se a??adi?? a su grupo despu??s, pero ahora
                  que es novia de Luc??a es evidente que tiene que ser parte del
                  grupo, adem??s que al tener un car??cter bastante divertido y
                  aventurero no fue dif??cil incluirla en la din??mica. A
                  diferencia de lo que usualmente existe en los cat??logos de
                  streaming, esta serie no se desarrolla en una gran metr??poli,
                  si no en una ciudad ficticia llamada El Valle, es una ciudad
                  peque??a d??nde la principal fuente de trabajo es el turismo,
                  podr??a ser cualquier ciudad de cualquier pa??s latinoamericano.
                </li>
                <li className="list-group-item">
                  <strong>Duraci??n:</strong> Entre 8 y 15 minutos por episodio.
                </li>
                <li className="list-group-item">
                  <strong>Tema:</strong> Relaciones de amistad y amor entre
                  mujeres j??venes-adultas latinoamericanas, que buscan mantener
                  sus trabajos, cambiar de carrera, ganar m??s dinero y llevar
                  una vida social.
                </li>
                <li className="list-group-item">
                  <strong>Tono:</strong> Absurdo, divertido, emp??tico, emotivo.
                </li>
                <li className="list-group-item">
                  <strong>Logline:</strong> Cuatro mujeres que han compartido
                  muchos a??os juntas se enfrentan a nuevas etapas de su vida
                  adulta de forma singular y ayud??ndose entre s??.
                </li>
                <li className="list-group-item">
                  <strong>Audiencia/Demograf??a:</strong> J??venes adultos a
                  adultos, de 28 a 38 a??os que est??n pasando por nuevas etapas
                  de la adultez, como preocupaciones por los ahorros para la
                  vejez, nuevos trabajos, sue??os frustrados, ascensos en sus
                  trabajos actuales y falta de dinero en general...Pero que
                  tengan un grupo de amigos desde hace a??os que siempre est??n
                  ah?? para ayudarse. Que gusten de sitcoms como; Community,
                  Seinfeld, Malcolm in the middle, Will and Grace, Friends. Que
                  tengan suscripciones a plataformas de streaming pero que igual
                  busquen contenido interesante en Youtube o alguna otra
                  plataforma gratuita.
                </li>
                <li className="list-group-item">
                  <strong>Similares:</strong> Community, Derry Girls.
                </li>
              </ul>
              <p className="card-text bg-white Stories__cards--series__link">
                <Link className="btn btn-lg btn-primary" to="/season-one">
                  Temporada Uno
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SeasonOne() {
  return (
    <main className="SeasonOne px-3">
      <h1>Temporada Uno</h1>
      <div className="card text-center text-white bg-dark col-sm-12">
        <div className="card-body">
          <h5 className="card-title">Episodio 1</h5>
          <h5 className="card-title">Las Cuatro: Piloto</h5>
          <p className="card-text">
            <strong>Sinopsis:</strong> Las Cuatro van a una feria y se
            encuentran con una pitonisa llamada "Videntis", que les dir?? cosas
            interesantes sobre el futuro.
          </p>
          <Link className="btn btn-lg btn-primary" to="/guiones">
            Leer gui??n
          </Link>
        </div>
      </div>
      <div className="card text-center text-white bg-dark col-sm-12 SeasonOne__otherEpisodes">
        <div className="card-body">
          <h5 className="card-title">Episodio 2</h5>
          <h5 className="card-title">Las Cuatro: Mar??a</h5>
          <p className="card-text">
            <strong>Sinopsis:</strong> Mar??a decide llevar a cabo un plan para
            cubrir sus gastos y las dem??s le ayudan.
          </p>
        </div>
      </div>
      <div className="card text-center text-white bg-dark col-sm-12 SeasonOne__otherEpisodes">
        <div className="card-body">
          <h5 className="card-title">Episodio 3</h5>
          <h5 className="card-title">Las Cuatro: Adriana</h5>
          <p className="card-text">
            <strong>Sinopsis:</strong> En plena crisis, Adriana decide tomar una
            decisi??n que afectar?? al resto.
          </p>
        </div>
      </div>
      <div className="card text-center text-white bg-dark col-sm-12 SeasonOne__otherEpisodes">
        <div className="card-body">
          <h5 className="card-title">Episodio 4</h5>
          <h5 className="card-title">Las Cuatro: Luc??a</h5>
          <p className="card-text">
            <strong>Sinopsis:</strong> Luc??a debe recuperar la copia de su libro
            por lo que se embarca junto con Adriana, Mar??a y Ana en una traves??a
            para poder obtenerlo.
          </p>
        </div>
      </div>
      <div className="card text-center text-white bg-dark col-sm-12 SeasonOne__otherEpisodes">
        <div className="card-body">
          <h5 className="card-title">Episodio 5</h5>
          <h5 className="card-title">Las Cuatro: Ana</h5>
          <p className="card-text">
            <strong>Sinopsis:</strong> Luc??a, Adriana y Mar??a ayudan a Ana con
            la b??squeda de su n??mesis de videojuego, pero en la vida real.
          </p>
        </div>
      </div>
    </main>
  );
}

function Scripts() {
  return (
    <main className="Scripts px-3">
      <h1>Guiones</h1>
      <p className="lead">Aqu?? puedes descargar un previo de los guiones.</p>
      <div className="row Scripts__buttons">
        <div className="col-sm-12 col-md-6 Scripts__buttons--short">
          <button
            className="btn btn-lg btn-primary"
            onClick={() => {
              convertToBase64(BASE64.SHORT, "quemado_guion");
            }}
            type="button"
          >
            Cortometraje
          </button>
        </div>
        <div className="col-sm-12 col-md-6">
          <button
            className="btn btn-lg btn-primary"
            onClick={() => {
              convertToBase64(BASE64.SERIES, "piloto_guion");
            }}
            type="button"
          >
            Web Series
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
