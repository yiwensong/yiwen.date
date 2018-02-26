import React from 'react';

const metadata = {
    page_name: 'home',
    button_name: 'home',
    icon: 'home',
    title: 'yiwen song (is single)',
};

const content = [
    {
        title: 'sloth in the streets; starfish in the sheets',
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/bw-yiwen-1-web.jpg',
        content: (
            <React.Fragment>
                this line is a lot more effective on girls' tinder bios.
            </React.Fragment>
        ),
    },
    {
        title: 'just your typical abg, but like a guy',
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/bw-yiwen-4-web.jpg',
        content: (
            <React.Fragment>
                enjoys boba, avocado toast, and barefoot moscato.
            </React.Fragment>
        ),
    },
    {
        title: "I'm an open book but it's about math so you probably don't wanna read it.",
        url: 'https://storage.googleapis.com/yiwen_dot_date_img/bw-yiwen-7-web.jpg',
        content: (
            <React.Fragment>
                I'm not sure what this means, but I do write some 🔥excel macros.
            </React.Fragment>
        ),
    },
];

const page_data = {
    metadata: metadata,
    content: content,
};

export default page_data;
