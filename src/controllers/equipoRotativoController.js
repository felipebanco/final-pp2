


const { EquipoRotativo } = require('../data/models')



const controller = {
    // Root - Show all products
    index: async (req, res) => {

        try {

            const equipos = await EquipoRotativo.findAll()
            return res.json(equipos)

            return res.render('lista-equipo', { equipos })
        } catch (error) {
            return res.send(error)``

        }

        // Product.findAll() 
        // 	.then(products => {
        // 		return res.render('products',{ products })
        // 	})
        // 	.catch(error => {
        // 		return res.send(error)
        // 	})


    },

    // Detail - Detail from one product
    detail: async (req, res) => {

        try {

            const { id } = req.params;
            const product = await Product.findByPk(id)
            res.render('detail', { product, toThousand })

        } catch (error) {
            return res.send(error)

        }

        // let id = req.params.id
        // let product = products.find(product => product.id == id)
        // res.render('detail', {
        // 	product,
        // 	toThousand
        // })
    },

    // Create - Form to create
    create: async (req, res) => {

        try {

            return res.render('add-equipo')
        } catch (error) {
            return res.send(error)

        }

    },

    // Create -  Method to store
    store: async (req, res) => {

        console.log(req.body);

        let equipoRotativo = {
            ...req.body,
        };

        //return res.send(equipoRotativo)
        await EquipoRotativo.create(equipoRotativo)
        return res.send('creado con exito')

        return res.redirect('/equipo-rotativo')




    },

    // Update - Form to edit
    edit: async (req, res) => {

        try {
            const { id } = req.query;
            // const categories = await Category.findAll()
            const equipoRotativo = await EquipoRotativo.findByPk(id)

            return res.json(equipoRotativo)
            return res.render('edit-equipo', { equipoRotativo })

        } catch (error) {
            return res.send(error)

        }

        // let id = req.params.id
        // let productToEdit = products.find(product => product.id == id)
        // res.render('product-edit-form', {productToEdit})
    },
    // Update - Method to update
    update: async (req, res) => {
        try {

            const { id } = req.params

            console.log(req.body);

            equipoEdit = {
                ...req.body,
            };

            console.log(equipoEdit);

            await EquipoRotativo.update(equipoEdit, {
                where: { idEquipoRotativo: id }
            })

            return res.redirect('/equipo-rotativo')

        } catch (error) {
            return res.send(error)

        }
    },

    // Delete - Delete one product from DB
    destroy: async (req, res) => {

        try {
            const { id } = req.body

            await EquipoRotativo.destroy({
                where: {idEquipoRotativo: id }
            })
            return res.redirect('/equipo-rotativo')


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