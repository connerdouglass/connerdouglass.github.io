var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/connerdouglass/connerdouglass.github.io.git',
        user: {
            name: 'connerdouglass',
            email: 'conner.douglass@gmail.com',
        },
    },
    () => console.log('Deploy Complete!'),
);
