export interface NoticiasPaginadas {
    count?: number,
    page?: number,
    totalPages?: number,
    nextPage?: number,
    previousPage?: number,
    showingFrom?: number,
    showingTo?: number,
    items?: Noticia[]
}

export interface Noticia {
    id?: number,
    tipo?: string,
    titulo?: string,
    introducao?: string,
    data_publicacao?: string,
    produto_id?: number,
    produtos?: string,
    editorias?: string,
    imagens?: string,
    destaque?: boolean,
    link?: string
}