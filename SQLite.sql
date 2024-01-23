CREATE TABLE IF NOT EXISTS relatorio_vendas (
    id SERIAL PRIMARY KEY,
    data DATE,
    marca_id INT,
    marca_nome VARCHAR(255),
    quant_vendas INT,
  	valor_venda INT,
    modelo_carro VARCHAR(255)
);

INSERT INTO relatorio_vendas (id, data,
    marca_id, marca_nome, quant_vendas, 
    valor_venda,modelo_carro)
SELECT
	  v.id,
    v.data,
    v.marca_id,
    m.Nome AS marca_nome,
    v.quant_vendas,
    v.valor AS valor_venda,
    v.modelo AS modelo_carro
FROM Vendas v
JOIN Marcas m ON v.marca_id = m.id;