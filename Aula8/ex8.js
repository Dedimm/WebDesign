const produto = {
    Nome: "Celular",
    Preço: 1200,
    Quantidade: 6,
    CalcularTotal: function() {
        return this.Preço * this.Quantidade;
    }
};

const total = produto.CalcularTotal();
console.log(`Total: R$ ${total}`);
