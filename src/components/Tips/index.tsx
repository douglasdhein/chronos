import { Fragment } from 'react/jsx-runtime';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCyclyeType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCyclyeType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime} minutos.</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime} minutos.</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Descanse por <b>{state.config.longBreakTime} minutos.</b>
      </span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        O próximo ciclo será de <b>{state.config.workTime} minutos.</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        O próximo descanso será de <b>{state.config.shortBreakTime} minutos.</b>
      </span>
    ),
    longBreakTime: (
      <span>
        O próximo descanso será de <b>{state.config.longBreakTime} minutos.</b>
      </span>
    ),
  };

  return (
    <Fragment>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </Fragment>
  );
}
