import { Button, Card, Col, Image, List, Rate, Row, Tag } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../../state/productSlice';
import { Review } from '../../types/product';
import './DetailedProduct.scss';

const ProductDetailPage = () => {
  const { productId } = useParams();

  const { data: product, isLoading } = useGetSingleProductQuery(productId);

  if (isLoading) return <p>Loading...</p>


  return (
    <div className="container product-detail-container">
      <div className="go-back-link">
        <Link to="/products">
          <Button type="link" className="go-back-button">
            &larr; Go Back
          </Button>
        </Link>
      </div>
      <Card bordered={false} className="product-detail-card">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Image
              className="product-image"
              width="100%"
              src={product.thumbnail}
              alt={product.title}
            />
          </Col>
          <Col xs={24} md={12}>
            <h1 className="product-title">{product.title}</h1>
            <Rate disabled defaultValue={product.rating} allowHalf />
            <p className="product-price">
              ${product.price} <span className="discount">-{product.discountPercentage}%</span>
            </p>
            <p className="availability-status">{product.availabilityStatus}</p>
            <p className="product-description">{product.description}</p>

            <Row className="product-tags">
              {product.tags.map((tag: string, index: number) => (
                <Tag key={index} color="blue">{tag}</Tag>
              ))}
            </Row>

            <Row className="product-info">
              <Col span={12}><b>Brand:</b> {product.brand ? product.brand : "Standard"}</Col>
              <Col span={12}><b>SKU:</b> {product.sku}</Col>
            </Row>

            <Row className="product-info">
              <Col span={12}><b>Weight:</b> {product.weight} g</Col>
              <Col span={12}><b>Warranty:</b> {product.warrantyInformation}</Col>
            </Row>

            <Row className="product-info">
              <Col span={12}><b>Dimensions:</b> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</Col>
              <Col span={12}><b>Shipping:</b> {product.shippingInformation}</Col>
            </Row>

            <Button type="primary" className="buy-button">Buy Now</Button>
          </Col>
        </Row>
      </Card>

      <Card className="reviews-section" title="Customer Reviews">
        <List
          itemLayout="horizontal"
          dataSource={product.reviews}
          renderItem={(review: Review) => (
            <List.Item>
              <List.Item.Meta
                title={<span>{review.reviewerName} - <Rate disabled defaultValue={review.rating} /></span>}
                description={review.comment}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default ProductDetailPage;
