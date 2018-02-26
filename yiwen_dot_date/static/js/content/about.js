import React from 'react';

const metadata = {
    page_name: 'about',
    button_name: 'about',
    icon: 'person_pin',
    title: 'about yiwen',
};

const content = [
    {
        title: 'my life is mostly together',
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/yiwen05-web.jpg',
        content: (
            <React.Fragment>
                I live in San Francisco (not on the streets), 
                I make software,
                and I feed myself with free snacks from the office.
            </React.Fragment>
        ),
    },
    {
        title: "reasons why I'm great",
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/yiwen13-web.jpg',
        content: (
            <React.Fragment>
                - I'm 6'2"
            </React.Fragment>
        ),
    },
];

const page_data = {
    metadata: metadata,
    content: content,
};

export default page_data;
