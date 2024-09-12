import { Spin } from 'antd';
import './Loading.scss';

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <Spin size="large" />
      <h1>Loading, please wait...</h1>
    </div>
  );
};

export default LoadingPage;
