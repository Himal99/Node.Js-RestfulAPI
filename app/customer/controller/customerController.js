const service = require('../service/customerService');

function customerController() {
    return {
        index: function(req, resp) {
            service.findall((result) => {
                resp.render('customers/index', {
                    name: 'himal',
                    customer: result
                })
            })


        },
        json: function(req, resp) {
            service.findall((result) => {
                resp.send(result);
            })


        },
        create: function(req, resp) {
            resp.render('customers/create');
        },
        edit: function(req, resp) {
            var id = req.params.id;
            service.findById(id, function(result) {

                if (result.length > 0) {
                    resp.render('customers/edit', {
                        customer: result[0]
                    })
                } else {
                    resp.redirect('/customer?error');
                }

            })


        },
        save: (req, resp) => {
            if (req.body.id == null) {
                console.log(req.body);
                service.insert(req.body, (data) => {
                    resp.redirect('/customer?success');
                })
            } else {
                service.update(req.body, (data) => {
                    resp.redirect('/customer?success');
                })
            }

        },
        delete: function(req, resp) {
            var id = req.params.id;

            service.deleteById(id, function(result) {
                resp.redirect('/customer?success');
            })
        }
    }
}

module.exports = customerController();