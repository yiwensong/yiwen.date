import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
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
    }

    render() {
        const {classes, theme} = this.props;
        return (
            <div>
                <Button fab color="primary" aria-label="add" className={classes.button}>
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
