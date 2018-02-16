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
        // paddingTop: 16,
        margin: 'auto',
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    contentPaper: {
        width: '60%',
        'min-width': '400px',
        'text-align': 'left',
        // 'margin-left': '20%',
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
                    <Typography component="p" className={classes.text}>
                        {this.props.content}
                    </Typography>
                </Paper>
            </div>
        );
    }
}

const YDContentBox = withStyles(styles)(YDContentBoxNoStyle);

const cards = [
    {
        title: 'sloth in the streets; starfish in the sheets',
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/bw-yiwen-1.jpg',
        content: "this line is a lot more effective on girls' tinder bios.",
    },
    {
        title: 'just your typical abg, but like a guy',
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/bw-yiwen-4.jpg',
        content: "enjoys clubbing and boba.",
    },
    {
        title: "I'm an open book but it's about math so you probably don't wanna read it.",
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/bw-yiwen-7.jpg',
        content: "I'm not sure what this means, but I do write some 🔥excel macros.",
    },
];

class YDContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes, theme} = this.props;
        return (
            <div>
                {cards.map( (x,i) => <YDContentBox 
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
