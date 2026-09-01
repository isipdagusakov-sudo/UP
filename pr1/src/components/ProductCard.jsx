import { useState } from 'react'
import './ProductCard.css'

function ProductCard({ name, price, image }) {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount((prev) => prev + 1)
  }

  const handleRemove = () => {
    setCount((prev) => Math.max(0, prev - 1))
  }

  return (
    <article className="product-card">
      <img className="product-card__image" src={image} alt={name} />

      <h2 className="product-card__name">{name}</h2>
      <p className="product-card__price">{price.toLocaleString('ru-RU')} ₽</p>

      <button className="product-card__button" onClick={handleAdd}>
        Добавить в корзину
      </button>

      <button
        className="product-card__button product-card__button--remove"
        onClick={handleRemove}
        disabled={count === 0}
      >
        Убрать из корзины
      </button>

      <p className="product-card__count">
        {count > 0 ? `В корзине: ${count} шт.` : 'Товар ещё не в корзине'}
      </p>
    </article>
  )
}

export default ProductCard
