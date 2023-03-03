const mongoose = require('mongoose');
const Article = require('./models/article');



const DUMMY_ARTICLE = [
    {
        name: 'Article1',
        date:'',
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system"
    },
    {
        name: 'Article1',
        date:'',
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system",
        markdown:"Lorem jnoinfpsf iuhfbsugggdhisoowps jhfbus"
    },
    {
        name: 'Article1',
        date:'',
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system",
        markdown:"Lorem jnoinfpsf iuhfbsugggdhisoowps jhfbus"

    },
    {
        name: 'Article1',
        date:'',
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system",
        markdown:"Lorem jnoinfpsf iuhfbsugggdhisoowps jhfbus"
    },
    
];

async function seedDB() {
    await Article.deleteMany({});
    
    await Article.insertMany(DUMMY_ARTICLE);
    console.log('DB Seeded');
}

module.exports = seedDB;