
import React, { ChangeEvent, useState, KeyboardEvent, useContext } from "react";
import styled from "styled-components";
import Checkbox from "../components/Checkbox";
import IconButton from "../components/IconButton";
import Spacer from "../components/Spacer";
import TextButton from "../components/TextButton";
import useTaskStore from "../hooks/use-task-store";
import DeleteIcon from "../Icons/DeleteIcons";
import { Task } from "../types";


const Container = styled.div`
align-items: center;
/* align-self: stretch; */
display: flex;
justify-content: center;
flex-direction: column;
/* flex: 0 1 460px; */
align-items: stretch;
width: 460px;
`

const List = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px; 
  padding: 45px 24px;
  display: flex;
  flex-direction: column;
`
const ListItem = styled.label`
align-items: center;
display: flex;
padding: 4px 0;
font-size: 18px;
`
const DeleteButton = styled(IconButton)`
visibility: hidden;

  ${ListItem}:hover & {
    visibility: visible;
  }
`

const Input = styled.input`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  border: none;
  color: #fff;
  padding: 20px 24px;
`

type Props = {};

const ListScreen: React.FC<Props> = () => {
    // const value = useContext(TaskContext);

    const {
        addTask,
        tasks,
        setTasks,
        updateTaskCompletion,
      } = useTaskStore();
  const [newTaskLabel, setNewTaskLabel] = useState("");

  const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);

  const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    // console.log(e.key);

    if (e.key === "Enter" && newTaskLabel !== "") {
      addTask({ label: newTaskLabel });
      setNewTaskLabel("");
    }
  };

  const handleTaskCompleteChange =
    (task: Task) => (e: ChangeEvent<HTMLInputElement>) => {
      updateTaskCompletion(task.id, e.target.checked);
    };

  const handleTaskDeleteClick = (handledTask: Task) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handledTask.id));
  };

  const handleClearClick = () => {
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));
  };

  console.log("tasks", tasks);

  return (
    <Container>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <Checkbox
              type="checkbox"
              checked={task.isComplete}
              onChange={handleTaskCompleteChange(task)}
            />
            <Spacer width={24} /> 
            {task.label}
            <Spacer flex={1} /> 
            <DeleteButton  onClick={handleTaskDeleteClick(task)}>
              <DeleteIcon />
            </DeleteButton>
          </ListItem>
        ))}
      </List>
      <Spacer height={30} />
      <Input
      placeholder="Add a task"
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
      />
      <Spacer height={45} />
        <TextButton onClick={handleClearClick} style={{alignSelf: 'center '}}>clear completed</TextButton>
     
    </Container>
  );
};

export default ListScreen;
