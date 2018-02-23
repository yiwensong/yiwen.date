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
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import CloseIcon from 'material-ui-icons/Close';

const styles = theme => ({
    button: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    },
    close: {
    },
});


class YDButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            email_value: '',
            name_value: '',
            msg_value: "Hi yiwen, I'm single too!",
            snackbar: false,
            snackbarSuccess: true,
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

        const submitSuccess = () => {
            this.setState({snackbar: true, snackbarSuccess: true});
        };

        const submitFail = () => {
            this.setState({snackbar: true, snackbarSuccess: false});
        };

        const snackbarClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }
            this.setState({snackbar: false});
        };

        const handleSubmit = (event) => {
            fetch('/submit_response', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email_value,
                    name: this.state.name_value,
                    message: this.state.msg_value,
                })
            }).then(function (response) {
                if (response.ok) {
                    submitSuccess();
                } else {
                    submitFail();
                }
            });
            handleClose();
        };

        const handle_name_change = (event) => {
            this.setState({name_value: event.target.value});
        };

        const handle_email_change = (event) => {
            this.setState({email_value: event.target.value});
        };

        const handle_msg_change = (event) => {
            this.setState({msg_value: event.target.value});
        };

        const renderSnackbarText = () => {
            if (this.state.snackbarSuccess) {
                return 'Your message has successfully sent!';
            } else {
                return 'Something went wrong! Please try again!';
            }
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
                            value={this.state.name_value}
                            onChange={handle_name_change}
                        />
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            value={this.state.email_value}
                            onChange={handle_email_change}
                        />
                        <TextField
                            multiline
                            margin="dense"
                            id="message"
                            label="Write a message..."
                            type="text"
                            fullWidth
                            rows={4}
                            placeholder="Hi yiwen, I'm single too!"
                            value={this.state.msg_value}
                            onChange={handle_msg_change}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            cancel
                        </Button>
                        <Button onClick={handleSubmit} color="primary">
                            submit
                        </Button>
                    </DialogActions>
                </Dialog>
                <Button variant="fab" color="primary" aria-label="add" className={classes.button} onClick={handleClickOpen}>
                    <Icon>message</Icon>
                </Button>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.snackbar}
                    onClose={snackbarClose}
                    autoHideDuration={6000}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{renderSnackbarText()}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={snackbarClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        );
    }
}

YDButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(YDButton);
