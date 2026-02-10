function Cart({title, description, emoji}) {
    return (
        <div className="cart" >
            <h3>{emoji} {title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Cart;