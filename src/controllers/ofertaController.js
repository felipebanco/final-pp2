


const {Oferta} = require('../data/models');


const controller = {
    
    // Root - Show all products
    index: async (req, res) => {

        try{
            const ofertas = await Oferta.findAll()
            /* console.log(ofertas); */
            return res.render('lista-oferta', { ofertas })
        
        }catch (error) {
            return res.send(error)
        }
    },

    // Detail - Detail from one product
    detail: async (req, res) => {

        try {

            const { id } = req.params;
            const oferta = await Oferta.findByPk(id)
            return res.json(oferta)
            //return res.render({oferta});

        } catch (error) {
            return res.send(error)

        }

    },

    // Create - Form to create
    create: async (req, res) => {
        console.log('jdfhfdsfgdsgd')

        return res.render('add-oferta')
        
      /*   try {
            
            return res.render('add-oferta')
        } catch (error) {
            return res.send(error)
            
        }
         */
    },

    // Create -  Method to store
    store: async (req, res) => {

        

        let oferta = {
            ...req.body,
        };

        await Oferta.create(oferta)
        return res.redirect('/oferta')

    },

    // Update - Form to edit
    edit: async (req, res) => {

        try {
            const { id } = req.query;
            const oferta = await Oferta.findByPk(id);
            return res.json(oferta)
            return res.render('edit-oferta', { oferta })

        } catch (error) {
            return res.send(error)

        }
        
    },
    // Update - Method to update
    update: async (req, res) => {
        try {

            const { id } = req.params

            console.log(req.body);

            ofertaEdit = {
                ...req.body,
            };

            console.log(ofertaEdit);

            await Oferta.update(ofertaEdit, {
                where: { IdOferta: id }
            })

            return res.redirect('/oferta')

        } catch (error) {
            return res.send(error)

        }
    },

    // Delete - Delete one product from DB
    destroy: async (req, res) => {

        try {
            const { id } = req.body

            await Oferta.destroy({
                where: {IdOferta: id }
            })
            return res.redirect('/oferta')


        } catch (error) {
            return res.send(error)

        }

        // let id = req.params.id;
        // let finalProducts = products.filter(product => product.id != id);
        // fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
        // res.redirect('/');
    }
};

module.exports = controller;