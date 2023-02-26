// para enxergar o carroService
const CarroService = require('../services/CarroService');

module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let carros = await CarroService.buscarTodos();

        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });
        }

        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo; //para pegar o parametro
        let carro = await CarroService.buscarUm(codigo);

        if(carro){
            json.result = carro; //se tiver nota ele joga no json
        }

        res.json(json);
    }


}