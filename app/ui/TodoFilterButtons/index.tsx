import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import { Filter } from "../../lib/interfaces";

const TodoFilterButtons = observer(() => {
  const todoStore = useStore("todoStore");

  const handleChangeFilter = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: Filter
  ) => {
    newAlignment && todoStore.changeFilter(newAlignment);
  };
  return (
    <ToggleButtonGroup
      color="info"
      value={todoStore.filter}
      exclusive
      aria-label="toggle todo filter"
      fullWidth
      onChange={handleChangeFilter}
    >
      <ToggleButton value={Filter.ALL}>{Filter.ALL}</ToggleButton>
      <ToggleButton value={Filter.UPCOMING}>{Filter.UPCOMING}</ToggleButton>
      <ToggleButton value={Filter.COMPLETED}>{Filter.COMPLETED}</ToggleButton>
    </ToggleButtonGroup>
  );
});

export default TodoFilterButtons;
