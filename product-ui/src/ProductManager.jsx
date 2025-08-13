import React, { useState, useEffect } from 'react';

const API_URL = 'https://localhost:44331/produto';

export function ProductManager() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            setError("Falha ao carregar produtos. A API está rodando?");
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleCreateProduct = async (e) => {
        e.preventDefault();
        const newProduct = { name, price: parseFloat(price), category };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct),
            });
            if (!response.ok) throw new Error('Failed to create product');

            setName('');
            setPrice('');
            setCategory('');
            fetchProducts(); 
        } catch (error) {
            console.error("Erro ao criar produto:", error);
            setError("Falha ao criar produto.");
        }
    };

    return (
        <div>
            <h1>Product Management</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleCreateProduct}>
                <div>
                    <label>Nome do Produto</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Ex: Notebook" 
                        required 
                    />
                </div>
                <div>
                    <label>Preço</label>
                    <input 
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        placeholder="Ex: 4500.00" 
                        step="0.01"
                        required 
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <input 
                        type="text" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        placeholder="Ex: Eletrônicos" 
                        required 
                    />
                </div>
                <button type="submit">Adicionar</button>
            </form>

            <h2>Lista de Produtos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                       <span>{product.name} ({product.category})</span>
                       <span>R$ {product.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}