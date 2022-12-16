import api from "../api";

export async function salvarProduto(produto) {
    try {
        const resultado = await api.post('/produtos', produto)
        return resultado.data;
    } catch (erro) {
        console.log(erro)
        return {}
    }
}

export async function pegarProduto() {
    try {
        const resultado = await api.get('/produtos')
        return resultado.data;
    } catch (erro) {
        console.log(erro)
        return []
    }
}

export async function deletaProdutos() {
    try {
        const resultado = await api.delete('/produtos')
        return resultado.data;
    } catch (erro) {
        console.log(erro)
        return []
    }
}