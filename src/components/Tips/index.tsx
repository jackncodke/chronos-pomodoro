import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime} minutos</span>,
    shortBreakTime: (
      <span>Descanse por {state.config.shortBreakTime} minutos</span>
    ),
    longBreakTime: (
      <span>Descanse por {state.config.longBreakTime} minutos</span>
    ),
  };
  const tipsForNoActiveTask = {
    workTime: (
      <span>Próximo ciclo será de {state.config.workTime} minutos</span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanso será de {state.config.shortBreakTime} minutos
      </span>
    ),
    longBreakTime: (
      <span>Próximo descanso será de {state.config.longBreakTime} minutos</span>
    ),
  };

  return (
    <>
      {state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}{' '}
    </>
  );
}
