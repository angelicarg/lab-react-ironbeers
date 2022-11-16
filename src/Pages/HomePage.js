import { Link } from 'react-router-dom';
import imagem1 from '../assets/beers.png';
import imagem2 from '../assets/random-beer.png';
import imagem3 from '../assets/new-beer.png';

function HomePage(allLinks) {
  return (
    <div className="BeersHome">
      <div>
        <img src={imagem1} alt="Foto de Cerveja" />
        <h2>All Beers</h2>
        <div className="numero1">
          <Link to="/beers">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
              dictum arcu ut dignissim varius.
            </p>
          </Link>
        </div>
      </div>
      <div>
        <img src={imagem2} alt="Cerveja Random" />
        <h2>Random Beer</h2>
        <div className="numero1">
          <Link to="/random-beer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
              dictum arcu ut dignissim varius.
            </p>
          </Link>
        </div>
      </div>
      <div>
        <img src={imagem3} alt="Cerveja Nova" />
        <h2>New Beer</h2>
        <div className="numero1">
          <Link to="/new-beer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
              dictum arcu ut dignissim varius.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
