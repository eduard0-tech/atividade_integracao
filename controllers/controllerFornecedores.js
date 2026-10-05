const supabase = require('../config/supabase');

// Helper
const handleError = (res, msg, error) => 
    res.status(500).json({ erro: msg, detalhes: error.message });

module.exports = {
    async getFornecedores(req, res) {
        const { data, error } = await supabase
            .from('fornecedores')
            .select('*')
            .order('nome');

        if (error) return handleError(res, 'Não foi possível buscar os fornecedores.', error);
        
        return res.status(200).json(data);
    },

    async store(req, res) {
        const { nome, cnpj, email, telefone } = req.body;

        // O operador "?." evita que quebre se "nome" ou "cnpj" vierem como undefined/null/números
        if (!nome?.trim() || !cnpj?.trim()) {
            return res.status(400).json({ erro: 'Os campos nome e cnpj são obrigatórios.' });
        }

        const { data, error } = await supabase
            .from('fornecedores')
            .insert({ 
                nome: nome.trim(), 
                cnpj: cnpj.trim(), 
                email, 
                telefone 
            })
            .select()
            .single();

        if (error) return handleError(res, 'Não foi possível cadastrar o fornecedor.', error);
        
        return res.status(201).json(data);
    },

    async getById(req, res) {
        const { data, error } = await supabase
            .from('fornecedores')
            .select('*')
            .eq('id', req.params.id)
            .maybeSingle();

        if (error) return handleError(res, 'Não foi possível buscar o fornecedor.', error);
        if (!data) return res.status(404).json({ erro: 'Fornecedor não encontrado.' });

        return res.status(200).json(data);
    }
};