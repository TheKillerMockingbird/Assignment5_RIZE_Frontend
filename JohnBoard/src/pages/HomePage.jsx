import Hero from '../components/Hero';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <Hero />

      <section className="why-shop">
        <h2>Why Shop with Us?</h2>
        <p>
          At JohnBoard Store we bring you the latest tech products at great prices.
          Fast shipping, quality guarantees, and a simple shopping experience.
        </p>
        <ul>
          <li>✔ Carefully selected products</li>
          <li>✔ Competitive prices</li>
          <li>✔ Easy returns</li>
          <li>✔ Friendly support</li>
        </ul>
      </section>
    </div>
  );
}

export default HomePage;