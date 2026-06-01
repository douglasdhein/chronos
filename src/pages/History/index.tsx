import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { DefaultButton } from '../../components/DefaultButton';
import { TrashIcon } from 'lucide-react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { useMemo, useState } from 'react';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTaks';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import styles from './style.module.css';

type SortConfig = Pick<SortTasksOptions, 'field' | 'direction'>;

export function History() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: 'startDate',
    direction: 'desc',
  });

  const sortedTasks = useMemo(() => {
    return sortTasks({
      tasks: state.tasks,
      field: sortConfig.field,
      direction: sortConfig.direction,
    });
  }, [state.tasks, sortConfig.field, sortConfig.direction]);

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    setSortConfig((prevState) => ({
      field,
      direction: prevState.direction === 'desc' ? 'asc' : 'desc',
    }));
  }

  function handleResetHistory() {
    if (!confirm('Tem certeza que deseja deletar o histórico?')) return;

    dispatch({ type: TaskActionTypes.RESET_STATE });
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>

          {hasTasks && (
            <span className={styles.buttonContainer}>
              <DefaultButton
                color="red"
                icon={<TrashIcon />}
                aria-label="Deletar histórico"
                title="Deletar histórico"
                onClick={handleResetHistory}
              ></DefaultButton>
            </span>
          )}
        </Heading>
      </Container>

      <Container>
        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    onClick={() => handleSortTasks({ field: 'name' })}
                    className={styles.thSort}
                  >
                    Tarefa ↕
                  </th>

                  <th
                    onClick={() => handleSortTasks({ field: 'duration' })}
                    className={styles.thSort}
                  >
                    Duração ↕
                  </th>

                  <th
                    onClick={() => handleSortTasks({ field: 'startDate' })}
                    className={styles.thSort}
                  >
                    Data ↕
                  </th>

                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {sortedTasks.map((task) => {
                  const taskTypeTranslate = {
                    workTime: 'Foco',
                    shortBreakTime: 'Descanso curto',
                    longBreakTime: 'Descanso longo',
                  };

                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration} minutos</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeTranslate[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {!hasTasks && (
          <p className={styles.p}>Ainda não existem tarefas criadas.</p>
        )}
      </Container>
    </MainTemplate>
  );
}
