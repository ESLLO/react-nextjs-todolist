import React, { useState } from 'react';
import { Fragment } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const TodoList = () => {
  const [textField, setTextField] = useState('');
  const [todoList, setTodoList] = useState([
    { checked: true, text: 'hello-world' },
    { checked: false, text: 'react + nextjs' },
    { checked: false, text: '@material-ui' },
  ]);
  const toggleItem = value => () => {
    const copy = [...todoList];
    copy[value].checked = !copy[value].checked;
    setTodoList(copy);
  };
  const deleteItem = value => () => {
    const copy = [...todoList];
    copy.splice(value, 1);
    setTodoList(copy);
  };
  const addItem = value => {
    const data = { checked: false, text: textField };
    const copy = [...todoList];
    copy.push(data);
    setTodoList(copy);
    setTextField('');
  };
  const setText = e => {
    setTextField(e.target.value);
  };
  return (
    <Fragment>
      <List>
        {todoList.map((value, index) => {
          return (
            <ListItem key={index} button onClick={toggleItem(index)}>
              <ListItemIcon>
                <Checkbox disableRipple edge="start" checked={value.checked} />
              </ListItemIcon>
              <ListItemText
                primary={
                  value.checked ? (
                    <b>
                      <strike>{value.text}</strike>
                    </b>
                  ) : (
                    value.text
                  )
                }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={deleteItem(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
        <ListItem key={'input'} button disableRipple>
          <TextField
            fullWidth={true}
            id="standard-basic"
            label="Add "
            value={textField}
            onChange={setText}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={addItem}>
              <AddIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Fragment>
  );
};

export default TodoList;
