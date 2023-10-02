const express = require('express');

const router = express.Router();

router.post('/postagem', async (req, res) =>{
   try{ 
        const {username, productName, productLink, productDescription } = req.body;
        const publicacao = await mongoose.model('publicacao',PubSchema);

        publicacao.create({
            user: username, productName: productName, productLink: productLink, productDescription: productDescription
        });
        res.status(201).json({message: 'Publicação criada com sucesso', publicacao});
    }catch (error) {
        res.status(500).json({message:'Erro ao criar publicação', message: error.message});
    }
})

