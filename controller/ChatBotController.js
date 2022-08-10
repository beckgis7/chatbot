exports.index = (req, res) => {
    // test contents
    let contents = {
        date: '2023'
    }
    req.params.id == null ? res.send(`<h1>Hello ${contents.date}</h1>`) : res.send(`<h1>Welcome My Page ${req.params.id}</h1>`);
}
exports.send = (req, res) => {
    res.send(`<h1>Welcome My Page ${req.params.id}</h1>`);
}