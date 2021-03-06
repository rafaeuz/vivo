import axios from 'axios'

const CLIENTES_REST_API_URL = 'https://teste-vivo-back.herokuapp.com/clientes';

class ClienteService {
    
    getClientes() {
        return axios.get(CLIENTES_REST_API_URL);
    }

    getCliente(cpf) {
        return axios.get(CLIENTES_REST_API_URL+'/cpf?cpf='+cpf);
    }

    postCliente(cliente) {
        return axios.post(CLIENTES_REST_API_URL, cliente, { Headers: { 'Content-Type': 'application/json' } } );
    }

}

export default new ClienteService();