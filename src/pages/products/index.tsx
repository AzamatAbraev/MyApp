import { Button, Input, Pagination, Select } from "antd";
import { useEffect, useState } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { useGetFilteredProductsQuery } from "../../state/productSlice";
import Product from "../../types/product";

import { SearchOutlined } from "@ant-design/icons";
import { Option } from "antd/es/mentions";

import "./style.scss";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [limit, setLimit] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('price');
  const [order, setOrder] = useState('asc');

  const skip = (currentPage - 1) * limit;

  const { data, isLoading, error } = useGetFilteredProductsQuery({
    query: searchQuery,
    limit,
    skip,
    sortBy,
    order,
  });


  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setLimit(pageSize);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <section>
      <div className="container products-container">
        <h2 className="products-title">Products ({data.total})</h2>

        <div className="product-control">
          <form onSubmit={handleSearch} className="search-form">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              suffix={<SearchOutlined />}
            />
            <Button type="primary" htmlType="submit" className="search-button">
              Search
            </Button>
          </form>

          <div className="sorting">
            <label className="sorting-label">Sort by:</label>
            <Select
              value={sortBy}
              onChange={(value) => setSortBy(value)}
              className="sorting-select"
            >
              <Option value="price">Price</Option>
              <Option value="title">Title</Option>
            </Select>
            <Select
              value={order}
              onChange={(value) => setOrder(value)}
              className="sorting-select"
            >
              <Option value="asc">Ascending</Option>
              <Option value="desc">Descending</Option>
            </Select>
          </div>
        </div>


        <div className="product__row">
          {products.map((product: Product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>

        <Pagination
          className="pagination"
          current={currentPage}
          pageSize={limit}
          total={data?.total || 0}
          onChange={handlePageChange}
          showSizeChanger
          pageSizeOptions={['5', '10', '20', '50']}
        />
      </div>
    </section>
  );
};

export default ProductPage;
