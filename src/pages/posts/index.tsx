import { Button, Input, Pagination, Select } from "antd";
import { useEffect, useState } from "react";
import PostCard from "../../components/post-card/PostCard";
import { useGetFilteredPostsQuery } from "../../state/postSlice";

import { SearchOutlined } from "@ant-design/icons";
import { Option } from "antd/es/mentions";

import ErrorPage from "../../components/error/ErrorPage";
import LoadingPage from "../../components/loading/Loading";
import Post from "../../types/post";
import "./style.scss";

const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [limit, setLimit] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('title');
  const [order, setOrder] = useState('asc');

  const skip = (currentPage - 1) * limit;

  const { data, isLoading, error } = useGetFilteredPostsQuery({
    query: searchQuery,
    limit,
    skip,
    sortBy,
    order,
  });

  useEffect(() => {
    if (data) {
      setPosts(data.posts);
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

  if (isLoading) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <section>
      <div className="container posts-container">
        <h2 className="posts-title">Posts ({data.total})</h2>

        <div className="post-control">
          <form onSubmit={handleSearch} className="search-form">
            <Input
              placeholder="Search posts..."
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
              <Option value="title">Title</Option>
              <Option value="views">Views</Option>
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

        <div className="post__row">
          {posts.map((post: Post) => (
            <PostCard {...post} key={post.id} />
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

export default PostPage;
