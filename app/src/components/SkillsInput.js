import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import { List, ListItem, IconButton, ListItemText, Paper, Modal, Rating } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemTag } from './requestForm';

export class SkillsInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      searchValue: ''
    };
  }

  handleDelete = id => {
    this.setState({
      value: this.state.value.filter(e => e.id != id)
    }, () => this.props.onChange(this.state.value));
  };

  handleAdd = id => {
    if (!Object.values(this.props.options).includes(id)) {
      this.setState({
        searchValue: ''
      });
      return;
    }

    this.setState({
      value: [...this.state.value, { id: Object.keys(this.props.options)[Object.values(this.props.options).indexOf(id)], value: 3 }],
      searchValue: ''
    }, () => this.props.onChange(this.state.value));
  };

  handleValueUpdate = (id, value) => {
    this.setState({
      value: this.state.value.map(e => e.id == id ? { id, value } : e)
    }, () => this.props.onChange(this.state.value));
  };

  render() {
    return (
      <>
        <Modal
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}>
            <Autocomplete
              disablePortal
              options={Object.keys(this.props.options).filter(e => !this.state.value.some(ee => ee.id == e)).map(e => this.props.options[e])}
              fullWidth
              renderInput={(params) => <TextField {...params} label="Search" />}
              value={this.state.searchValue}
              onChange={(_, value) => this.handleAdd(value)} />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {this.props.value.map(tag => (
                <ListItem
                  secondaryAction={<IconButton edge="end" aria-label="delete" onClick={() => this.handleDelete(tag.id)}>
                    <DeleteIcon />
                  </IconButton>}
                >
                  <ListItemText
                    primary={this.props.options[tag.id]} />
                  <Rating value={tag.value} onChange={(_, value) => this.handleValueUpdate(tag.id, value)} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Modal>

        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            p: 0.5,
            m: 0,
          }}
          component="ul"
          onClick={() => this.setState({ open: true })}
        >
          {this.props.value.length > 0 ? (
            this.props.value.map(tag => (
              <ListItemTag key={tag.id}>
                <Chip
                  label={this.props.options[tag.id]} />
              </ListItemTag>
            ))
          ) : (
            <Typography>Click to add</Typography>
          )}
        </Paper>
      </>
    );
  }
}
