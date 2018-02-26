import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';

import pages from './pages.js';

const styles = theme => ({
    content_base: {
    },
    contentPaperBase: theme.mixins.gutters({
        margin: 'auto',
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    contentPaper: {
        width: '60%',
        'min-width': '400px',
        'text-align': 'left',
        'padding-left': '0px',
        'padding-right': '0px',
    },
    headline: theme.typography.headline,
    title: {
        'margin-top': '16px',
    },
    text: {
        'margin-left': '16px',
    },
    image: {
        width: '100%',
    },
});

class YDContentBoxNoStyle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes, theme} = this.props;
        return (
            <div className={classes.content_base}>
                <Paper className={classNames(classes.contentPaper, classes.contentPaperBase)} elevation={4}>
                    <img src={this.props.img} className={classes.image}/>
                    <Typography className={classNames(classes.headline, classes.text)} variant="headline" component="h3" gutterBottom>
                        {this.props.title}
                    </Typography>
                    <Typography component="div" className={classes.text}>
                        {this.props.content}
                    </Typography>
                </Paper>
            </div>
        );
    }
}

const YDContentBox = withStyles(styles)(YDContentBoxNoStyle);

const cards = new Map(pages.map(function(page){
    return[ page.metadata.page_name, page.content ];
}));

class YDContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes, theme} = this.props;
        return (
            <div>
                {cards.get(this.props.content).map( (x,i) => <YDContentBox 
                    key={i}
                    title={x.title}
                    content={x.content}
                    img={x.url}
                />)}
            </div>
        );
    }
}

YDContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(YDContent);
