import ProductCard from "./ProductCard";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10 },
  { id: 2, name: "Snake Plant", price: 15 }
];

export default function ProductList() {
  return (
    <div>
      {plants.map(p => <ProductCard key={p.id} plant={p} />)}
    </div>
  );
}
