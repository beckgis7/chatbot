exports.index = (req, res) => {
    // test contents
    let contents = {
        title: 'Get Started',
        body: 'Hell this is contents one.'
    }
    // dashboard view
    res.render("dashboard", { data: contents });
}

exports.send = (req, res) => {
    res.send(`<h1>Welcome My Page ${req.params.id}</h1>`);
}

exports.whatsapp = (req, res) => {
    // test contents
    let contents = {
        title: 'Get Started',
        body: 'Hell this is contents one.'
    }
    res.send(`<h1>Welcome My Page ${req.params.id}</h1>`);
}