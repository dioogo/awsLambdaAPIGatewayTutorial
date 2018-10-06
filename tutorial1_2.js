exports.handler = async (event) => {
    const httpMethod = event.context['http-method'];
    if (httpMethod === 'POST') {
        return 'Método chamado é POST';    
    } else if (httpMethod === 'GET') {
        return 'Método chamado é POST';    
    }
};