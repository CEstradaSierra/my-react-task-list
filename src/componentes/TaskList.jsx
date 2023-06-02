import { TaskCard } from './TaskCard';

export const TaskList = (props) => {
  const { tasks } = props;

  return (
    <>
      {tasks.map((item) => {
        return (<div key={item.id}>
          <ul className="tl-body-ul">
            <TaskCard taskName={item.taskName}  />
          </ul>
        </div>
        );
      })}
    </>
  );
};
