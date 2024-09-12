import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Card, Checkbox } from 'antd';

import './TodoCard.scss';

interface TodoProps {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

const TodoCard = (props: TodoProps) => {
  const { todo, completed, userId } = props;
  return (
    <Card className="todo-card" bordered={false} hoverable>
      <div className="todo-card__header">
        <Checkbox checked={completed} className="todo-checkbox">
          <span className={`todo-text ${completed ? 'completed' : ''}`}>{todo}</span>
        </Checkbox>
      </div>

      <div className="todo-card__footer">
        <p className="todo-user">Assigned to User ID: {userId}</p>
        {completed ? (
          <CheckCircleOutlined className="todo-status todo-completed" />
        ) : (
          <CloseCircleOutlined className="todo-status todo-pending" />
        )}
      </div>
    </Card>
  );
};

export default TodoCard;
