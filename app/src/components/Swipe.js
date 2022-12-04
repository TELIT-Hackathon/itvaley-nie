import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Avatar, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { SpiderChartView } from './SpiderChartView';
import { Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Context } from '../api';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export class Swipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            data: []
        }
    }

    handleClickOpen = () => {
        fetch('http://localhost:8080/api/requests/userMatching', {
            method: 'post',
            body: JSON.stringify(this.props.search),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(data => {
            console.log(data)
            this.setState({ open: true, data: data.map(d => ({
                ...d,
                skills: this.props.search.skills.reduce((pre, cur) => ({
                    ...pre,
                    [cur.id]: [cur.level, (d.skills.find(e => e.id == cur.id) ?? {level: 0}).level]
                }), {})
            })) })
        })
    }
  
    handleClose = () => {
        this.setState({ open: false })
    }

    render() {
        const user = this.state.data[0]

        return <>
            <Button variant="outlined" onClick={this.handleClickOpen}>
                Show matches
            </Button>
            <Dialog
                fullScreen
                open={this.state.open && user}
                onClose={this.handleClose}
                TransitionComponent={Transition}
            >
                {
                    user ? (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={this.handleClose}
                                aria-label="close"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    margin: 2
                                }}
                            >
                                <CloseIcon />
                            </IconButton>

                            <Card sx={{margin: 4, userSelect: 'none', height: '100%'}}>
                                <CardHeader
                                    avatar={<Avatar src={user.avatar}/>}
                                    title={user.name}
                                    subheader={user.location}
                                />
                                <CardContent>
                                    <SpiderChartView data={user.skills}/>
                                    <Typography>Match: {Math.round(user.score.reduce((p, c) => p + c.value, 0) / user.score.length * 100)}%</Typography>
                                </CardContent>
                                <CardActions sx={{ width: '100%' }}>
                                    <IconButton sx={{ marginRight: 'auto' }} size='large' onClick={() => this.setState({data: this.state.data.filter(e => e != user)})}>
                                        <CloseIcon />
                                    </IconButton>
                                    <IconButton size='large' onClick={() => this.setState({data: this.state.data.filter(e => e != user)})}>
                                        <FavoriteIcon sx={{ color: 'red' }}/>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Box>
                    ) : null
                }
            </Dialog>
        </>
    }
}
Swipe.contextType = Context