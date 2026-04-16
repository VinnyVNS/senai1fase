programa {
  funcao inicio() {
    inteiro relatorios_pf = 40, relatorios_pj = 33, total_relatorios, tempo_pf = 12, tempo_pj = 42, tempo_total
    real valor_pf = 2350, valor_pj = 8900, media_valorpf, media_valorpj, media_tempopf, media_tempopj, valor_total, relacaoPf, relacaoPj

    total_relatorios = relatorios_pf + relatorios_pj
    tempo_total = tempo_pf + tempo_pj
    valor_total = valor_pf + valor_pj
    media_valorpf = valor_pf / relatorios_pf
    media_valorpj = valor_pj / relatorios_pj
    media_tempopf = tempo_pf / relatorios_pf
    media_tempopj = tempo_pj / relatorios_pj
    relacaoPf = media_valorpf / media_tempopf
    relacaoPj = media_valorpj / media_tempopj

    escreva("---Relatório---\n\n","Quantidade total de relatórios: ",total_relatorios,"\nTempo total trabalhado: ",tempo_total," horas\nValor total recebido: R$",valor_total,"\nMédia de valor recebido para relatórios PF: R$",media_valorpf,"\nMédia de valor recebido para relatórios PJ: R$",media_valorpj,"\nMédia de tempo gasto por relatório PF: ",media_tempopf," horas.\nMédia de tempo gasto por relatório PJ: ",media_tempopj," horas.","\nRelação valor/hora PF: R$",relacaoPf,"\nRelação valor/hora PJ: R$",relacaoPj,"\n")
  }
}
