import { DislikeOutlined, EyeOutlined, LikeOutlined } from '@ant-design/icons';
import { Card, Col, Row, Space, Tag } from 'antd';
import React from 'react';
import './PostCard.scss';

interface PostProps {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

const PostCard: React.FC<PostProps> = (post: PostProps) => {
  const { title, body, tags, reactions, views } = post;
  return (
    <Card className="post-card" bordered={false} hoverable>
      <div className="post-card__header">
        <h2 className="post-title">{title}</h2>
        <p className="post-body">{body}</p>
      </div>

      <div className="post-tags">
        {tags.map((tag, index) => (
          <Tag key={index} color="blue">{tag}</Tag>
        ))}
      </div>

      <div className="post-card__footer">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Space>
              <LikeOutlined />
              <span>{reactions.likes} Likes</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space>
              <DislikeOutlined />
              <span>{reactions.dislikes} Dislikes</span>
            </Space>
          </Col>
          <Col span={8}>
            <Space>
              <EyeOutlined />
              <span>{views} Views</span>
            </Space>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default PostCard;
