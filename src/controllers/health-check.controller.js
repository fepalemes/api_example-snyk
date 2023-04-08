exports.healthCheck = function (req, res) {

    console.info('---> Call on health-check endpoint')

    res.send({
        status: true,
        message: 'Service running normally!'
    });
}