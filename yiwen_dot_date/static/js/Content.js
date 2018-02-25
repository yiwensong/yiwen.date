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
                    <Typography component="div" className={classes.text}>
                        {this.props.content}
                    </Typography>
                </Paper>
            </div>
        );
    }
}

const YDContentBox = withStyles(styles)(YDContentBoxNoStyle);

const main_content = [
    {
        title: 'sloth in the streets; starfish in the sheets',
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/bw-yiwen-1-web.jpg',
        content: (
            <div>
                this line is a lot more effective on girls' tinder bios.
            </div>
        ),
    },
    {
        title: 'just your typical abg, but like a guy',
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/bw-yiwen-4-web.jpg',
        content: (
            <div>
                enjoys boba, avocado toast, and barefoot moscato.
            </div>
        ),
    },
    {
        title: "I'm an open book but it's about math so you probably don't wanna read it.",
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/bw-yiwen-7-web.jpg',
        content: (
            <div>
                I'm not sure what this means, but I do write some 🔥excel macros.
            </div>
        ),
    },
];

const about_content = [
    {
        title: 'my life is mostly together',
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/yiwen05-web.jpg',
        content: (
            <div>
                I live in San Francisco (not on the streets), 
                I make software,
                and I feed myself with free snacks from the office.
            </div>
        ),
    },
    {
        title: "reasons why I'm great",
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/yiwen13-web.jpg',
        content: (
            <div>
                - I'm 6'2"
            </div>
        ),
    },
];

const interests_content = [
    {
        title: 'sportsketball',
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/frisbee-min.jpg',
        content: (
            <div>
                I often let my teammates down in sports like basketball and ultimate frisbee.
                <br /><br />
                <Button onClick={
                    function () {
                        var win = window.open('https://www.liusharon.com/blog/ultimate', '_blank');
                        win.focus();
                    }}
                    color="secondary"
                >
                    Photo Credits - Sharon Liu
                </Button>
            </div>
        ),
    },
    {
        title: 'outdoorsy things',
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/nature-min.jpg',
        content: (
            <div>
                Less often, I bike and run and do other natury things. 
                I do it under the guise of training for a triathlon, but really I just want to take 
                basic nature photos.
            </div>
        ),
    },
];

const cards = {
    home: main_content,
    about: about_content,
    interests: interests_content,
};

class YDContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes, theme} = this.props;
        return (
            <div>
                {cards[this.props.content].map( (x,i) => <YDContentBox 
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
