import { Link } from 'react-router-dom';

function HomePage(allLinks) {
  return (
    <div>
      <div>
        <img src="../assets/beers.png" alt="Foto de Cerveja" />
        <p>All Beers</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </div>
      <div>
        <img src="../assets/random-beer.png" alt="Cerveja Random" />
        <p>Random Beer</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </div>
      <div>
        <img src="../assets/new-beer.png" alt="Cerveja Nova" />
        <p>Random Beer</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
