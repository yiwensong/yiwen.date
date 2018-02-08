import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';


const styles = theme => ({
    content_base: {
    },
    contentPaperBase: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    contentPaper: {
        width: '75%',
        'min-width': '400px',
        'text-align': 'center',
        'margin-left': '11%',
    },
    headline: theme.typography.headline,
});

class YDContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes, theme} = this.props;
        return (
            <div className={classes.content_base}>
                <Paper className={classNames(classes.contentPaper, classes.contentPaperBase)} elevation={4}>
                    <Typography className={classes.headline} variant="headline" component="h3" gutterBottom>
                        This is some paper.
                    </Typography>
                    <Typography component="p">
                      Paper can be used to build surface or other elements for your application.
                    </Typography>
                </Paper>
            </div>
        );
    }
}

YDContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(YDContent);
