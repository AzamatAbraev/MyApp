import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './DevelopmentPage.scss';

const DevelopmentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="development-page">
      <Result
        icon={<i className="fas fa-tools"></i>}
        title="This Site is Under Development"
        subTitle="We are working hard to bring you the best experience. Please check back later."
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        }
      />
    </div>
  );
};

export default DevelopmentPage;
