import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';

const styles = theme => ({
    button: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    },
});

class YDButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    render() {
        const {classes, theme} = this.props;

        const handleClickOpen = () => {
            this.setState({open: true});
        };

        const handleClose = () => {
            this.setState({open: false});
        };

        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Call me, maybe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Hey! I hope you enjoyed looking at my pictures. If you'd like to get in contact,
                            please fill this form out with your info and I'll get back to you as soon as I can!
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="name"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            multiline
                            margin="dense"
                            id="message"
                            label="Write a message..."
                            type="text"
                            fullWidth
                            rows={4}
                            defaultValue="Hi yiwen, I'm single too!"
                            placeholder="Hi yiwen, I'm single too!"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            submit
                        </Button>
                    </DialogActions>
                </Dialog>
                <Button variant="fab" color="primary" aria-label="add" className={classes.button} onClick={handleClickOpen}>
                    <Icon>message</Icon>
                </Button>
            </div>
        );
    }
}

YDButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(YDButton);
