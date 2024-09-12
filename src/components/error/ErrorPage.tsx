import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Error.scss';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        }
      />
    </div>
  );
};

export default ErrorPage;
