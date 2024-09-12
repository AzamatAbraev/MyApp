import { Pagination } from "antd";
import { useEffect, useState } from "react";
import ErrorPage from "../../components/error/ErrorPage";
import LoadingPage from "../../components/loading/Loading";
import TodoCard from "../../components/todo-card/TodoCard";
import { useGetFilteredTodosQuery } from "../../state/todoSlice";
import Todo from "../../types/todo";
import "./style.scss";

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [limit, setLimit] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const skip = (currentPage - 1) * limit;

  const { data, isLoading, error } = useGetFilteredTodosQuery({
    limit,
    skip,
  });

  useEffect(() => {
    if (data) {
      setTodos(data.todos);
    }
  }, [data]);

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setLimit(pageSize);
  };

  if (isLoading) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <section>
      <div className="container todos-container">
        <h2 className="todos-title">Todos ({data.total})</h2>

        <div className="todo__row">
          {todos.map((todo: Todo) => (
            <TodoCard {...todo} key={todo.id} />
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

export default TodoPage;
