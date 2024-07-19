class NewController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        console.log(req);
        res.send(``);
    }
}

module.exports = new NewController();
