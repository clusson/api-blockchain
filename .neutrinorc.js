module.exports = {
    options:{
        source: "./"
    },
    use: [
        'neutrino-preset-node',
        ['neutrino-preset-mocha',{
            verbose:true,
            require:'./bootstrap.test.js',
            reporter:'spec',
            '':'src/**/*.test.js'
        }]
    ]
};
