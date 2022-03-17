module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        open: true,
        proxy: {
            '/api': {
                target: "http://localhost:8080/",
                changeOrign = true,
                secure: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}