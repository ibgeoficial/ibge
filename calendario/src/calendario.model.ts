export interface DivulgacoesPaginadas {
    count?: number,
    page?: number,
    totalPages?: number,
    nextPage?: number,
    previousPage?: number,
    showingFrom?: number,
    showingTo?: number,
    items?: Divulgacao[]
}

export interface Divulgacao {
    id: number,
    titulo?: string,
    descricao?: string,
    data_divulgacao?: string,
    produto_id?: number,
    nome_produto?: string,
    alias_produto?: string,
    descricao_produto?: string,
    ano_referencia_inicio?: number,
    mes_referencia_inicio?: number,
    ano_referencia_fim?: number,
    mes_referencia_fim?: number
}