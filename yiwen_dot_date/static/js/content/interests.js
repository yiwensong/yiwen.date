import React from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

const metadata = {
    page_name: 'interests',
    button_name: 'interests',
    icon: 'weekend',
    title: "yiwen's (not) exciting life",
};

const content = [
    {
        title: 'sportsketball',
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/frisbee-min.jpg',
        content: (
            <React.Fragment>
                I often let my teammates down in sports like basketball and ultimate frisbee.
                <br /><br />
                <Button onClick={
                    function () {
                        var win = window.open('https://www.liusharon.com/blog/ultimate', '_blank');
                        win.focus();
                    }}
                    variant="flat"
                    color="secondary"
                >
                    Photo Credits - Sharon Liu
                    <Icon style={{marginLeft: '.3em'}}>open_in_new</Icon>
                </Button>
            </React.Fragment>
        ),
    },
    {
        title: 'outdoorsy things',
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/nature-min.jpg',
        content: (
            <React.Fragment>
                Less often, I bike and run and do other natury things. 
                I do it under the guise of training for a triathlon, but really I just want to take 
                basic nature photos.
            </React.Fragment>
        ),
    },
];

const page_data = {
    metadata: metadata,
    content: content,
};

export default page_data;
