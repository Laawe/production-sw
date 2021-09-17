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
        <h1>¡Hola!</h1>
        <p className="lead">
          Aquí vas a encontrar toda la información de la historia y de los
          personajes.
        </p>
        <p className="lead">
          <Link
            className="btn btn-lg btn-secondary fw-bold border-white bg-white"
            to="/historia"
          >
            Conocer más...
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
                    <strong>Película favorita: </strong> Goodfellas
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
              <h5 className="card-title">María</h5>
              <span className="card-text">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>MBTI: </strong> INFJ
                  </li>
                  <li className="list-group-item">
                    <strong>Vestimenta: </strong> Pantalón de vestir beige/caqui, blusa blanca, tenis blancos, bolsa de mano negra, suéter amarillo.
                  </li>
                  <li className="list-group-item">
                    <strong>Color: </strong> Amarillo
                  </li>
                  <li className="list-group-item">
                    <strong>Película favorita: </strong> Sleepless in Seattle
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
                    <strong>Vestimenta: </strong> Pantalón de vestir negro, zapatillas café, abrigo, aretes, maquillaje, bolsa de mano color negro
                  </li>
                  <li className="list-group-item">
                    <strong>Color: </strong> Café
                  </li>
                  <li className="list-group-item">
                    <strong>Película favorita: </strong> Mean Girls
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
              <h5 className="card-title">Lucía</h5>
              <span className="card-text">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>MBTI: </strong> INFP
                  </li>
                  <li className="list-group-item">
                    <strong>Vestimenta: </strong> Traje azul marino (una talla más grande), blusa blanca, tenis blancos, mascada naranja, sin aretes
                  </li>
                  <li className="list-group-item">
                    <strong>Color: </strong> Naranja
                  </li>
                  <li className="list-group-item">
                    <strong>Película favorita: </strong> Cléo 5 à 7
                  </li>
                  <li className="list-group-item">
                    <strong>Objeto: </strong> Libro Una habitación propia de V. Woolf, regalo de su abuela
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
          eventos sociales, laborales, comunitarios, así como el contexto
          social, económico y temporal mientras intentan sortear cada evento
          ayudándose entre sí.
        </span>
        <span className="lead">
          <p>El contexto:</p> Latinoamérica desde 90s hasta actualidad, todas
          tienen entre 30 y 27 años en el 2020. Todas son oriundas de El Valle
          una pequeña ciudad de México, que se dedica al turismo gracias a las
          altas montañas que rodean la ciudad. María, Adriana, Lucía y Ana viven
          en El Fortín, un barrio de El Valle.
        </span>
      </section>
      <section className="Stories__content">
        <h3>Contenido</h3>
        <p className="lead">
          El "Universo" se divide en el cortometraje y la serie web, aquí abajo
          están los detalles de cada producción:
        </p>
        <div className="card-group Stories__cards .col-md-12">
          <div className="card text-white bg-dark Stories__cards--short">
            <div className="card-body">
              <h5 className="card-title">Cortometraje</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Título:</strong> Quemado
                </li>
                <li className="list-group-item">
                  <strong>Género:</strong> Comedia dramática.
                </li>
                <li className="list-group-item">
                  <strong>Sinopsis:</strong> María, Adriana y su hermana Lucía
                  van a salir a una plaza comercial de su ciudad, están en casa
                  de María maquillándose, peinándose y cambiándose, sólo que en
                  esta ocasión la casa de María apesta a quemado, a cenizas, a
                  humo; la noche anterior un grupo delincuencial quemó varios
                  autos incluido el del vecino de enfrente de dónde vive María.
                  Esto detona una discusión entre las amigas.
                </li>
                <li className="list-group-item">
                  <strong>Duración:</strong> 4 minutos
                </li>
                <li className="list-group-item">
                  <strong>Tema:</strong> Violencia social, amistad
                </li>
                <li className="list-group-item">
                  <strong>Tono:</strong> Cómico
                </li>
              </ul>
              <p className="card-text bg-white Stories__cards--short__link">
                <Link className="btn btn-lg btn-primary" to="/guiones">
                  Leer guión
                </Link>
              </p>
            </div>
          </div>
          <div className="card text-white bg-dark Stories__cards--series .col-md-12">
            <div className="card-body">
              <h5 className="card-title">Serie web</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Título:</strong> Las Cuatro
                </li>
                <li className="list-group-item">
                  <strong>Género:</strong> Sitcom.
                </li>
                <li className="list-group-item">
                  <strong>Sinopsis/Outline:</strong> Las Cuatro es una sitcom
                  que muestra a Lucía, Adriana, María y Ana tratando de lidiar
                  con la vida adulta de formas muy absurdas pero hay que
                  resaltar que cada problema lo resuelven entre todas; se podría
                  decir que incluso tienen una relación codependiente, pero dado
                  que tienen años de amistad, lazos familiares y amorosos, se
                  justifica. Básicamente la sitcom se divide en cinco episodios.
                  En el piloto conocemos a Las Cuatro, como se hacen llamar,
                  visitando a una pitonisa y queriendo conocer su futuro más
                  próximo, el resto de los episodios se centra en alguna de
                  ellas, donde se plantea el problema o la necesidad de la
                  protagonista en ese momento. En cada episodio es bastante
                  notorio que necesitan ayuda entre ellas y necesitan ayudar a
                  la otra, su dinámica les ha funcionado hasta ahora, pero ¿por
                  qué son tan unidas? Bueno, Lucía y Adriana son hermanas, claro
                  que pelean mucho pero eso no impide que se relacionen. María
                  es la mejor amiga de Adriana desde la escuela primaria, por lo
                  que conoce a Lucía desde muy pequeña y también la ve como una
                  hermana menor. Ana se añadió a su grupo después, pero ahora
                  que es novia de Lucía es evidente que tiene que ser parte del
                  grupo, además que al tener un carácter bastante divertido y
                  aventurero no fue difícil incluirla en la dinámica. A
                  diferencia de lo que usualmente existe en los catálogos de
                  streaming, esta serie no se desarrolla en una gran metrópoli,
                  si no en una ciudad ficticia llamada El Valle, es una ciudad
                  pequeña dónde la principal fuente de trabajo es el turismo,
                  podría ser cualquier ciudad de cualquier país latinoamericano.
                </li>
                <li className="list-group-item">
                  <strong>Duración:</strong> Entre 8 y 15 minutos por episodio.
                </li>
                <li className="list-group-item">
                  <strong>Tema:</strong> Relaciones de amistad y amor entre
                  mujeres jóvenes-adultas latinoamericanas, que buscan mantener
                  sus trabajos, cambiar de carrera, ganar más dinero y llevar
                  una vida social.
                </li>
                <li className="list-group-item">
                  <strong>Tono:</strong> Absurdo, divertido, empático, emotivo.
                </li>
                <li className="list-group-item">
                  <strong>Logline:</strong> Cuatro mujeres que han compartido
                  muchos años juntas se enfrentan a nuevas etapas de su vida
                  adulta de forma singular y ayudándose entre sí.
                </li>
                <li className="list-group-item">
                  <strong>Audiencia/Demografía:</strong> Jóvenes adultos a
                  adultos, de 28 a 38 años que están pasando por nuevas etapas
                  de la adultez, como preocupaciones por los ahorros para la
                  vejez, nuevos trabajos, sueños frustrados, ascensos en sus
                  trabajos actuales y falta de dinero en general...Pero que
                  tengan un grupo de amigos desde hace años que siempre están
                  ahí para ayudarse. Que gusten de sitcoms como; Community,
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
            encuentran con una pitonisa llamada "Videntis", que les dirá cosas
            interesantes sobre el futuro.
          </p>
          <Link className="btn btn-lg btn-primary" to="/guiones">
            Leer guión
          </Link>
        </div>
      </div>
      <div className="card text-center text-white bg-dark col-sm-12 SeasonOne__otherEpisodes">
        <div className="card-body">
          <h5 className="card-title">Episodio 2</h5>
          <h5 className="card-title">Las Cuatro: María</h5>
          <p className="card-text">
            <strong>Sinopsis:</strong> María decide llevar a cabo un plan para
            cubrir sus gastos y las demás le ayudan.
          </p>
        </div>
      </div>
      <div className="card text-center text-white bg-dark col-sm-12 SeasonOne__otherEpisodes">
        <div className="card-body">
          <h5 className="card-title">Episodio 3</h5>
          <h5 className="card-title">Las Cuatro: Adriana</h5>
          <p className="card-text">
            <strong>Sinopsis:</strong> En plena crisis, Adriana decide tomar una
            decisión que afectará al resto.
          </p>
        </div>
      </div>
      <div className="card text-center text-white bg-dark col-sm-12 SeasonOne__otherEpisodes">
        <div className="card-body">
          <h5 className="card-title">Episodio 4</h5>
          <h5 className="card-title">Las Cuatro: Lucía</h5>
          <p className="card-text">
            <strong>Sinopsis:</strong> Lucía debe recuperar la copia de su libro
            por lo que se embarca junto con Adriana, María y Ana en una travesía
            para poder obtenerlo.
          </p>
        </div>
      </div>
      <div className="card text-center text-white bg-dark col-sm-12 SeasonOne__otherEpisodes">
        <div className="card-body">
          <h5 className="card-title">Episodio 5</h5>
          <h5 className="card-title">Las Cuatro: Ana</h5>
          <p className="card-text">
            <strong>Sinopsis:</strong> Lucía, Adriana y María ayudan a Ana con
            la búsqueda de su némesis de videojuego, pero en la vida real.
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
      <p className="lead">Aquí puedes descargar un previo de los guiones.</p>
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
