import { Button, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Welcome to MyApp</h1>
          <p className="hero-subtitle">The best place to manage your tasks, products, posts, and more!</p>
          <Link to="/products">
            <Button type="primary" size="large">Explore Products</Button>
          </Link>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Our Features</h2>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Card className="feature-card" hoverable>
                <p>Keep track of your posts and stay updated.</p>
                <Link to="/posts">
                  <Button type="link">View Posts</Button>
                </Link>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="feature-card" hoverable>
                <p>Browse through our products and find what you need.</p>
                <Link to="/products">
                  <Button type="link">View Products</Button>
                </Link>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="feature-card" hoverable>
                <p>Keep your tasks organized with our todo manager.</p>
                <Link to="/todos">
                  <Button type="link">View Todos</Button>
                </Link>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to get started?</h2>
          <p className="cta-text">Join us today and take control of your projects and tasks with MyApp.</p>
          <Link to="/users">
            <Button type="primary" size="large">Join Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
