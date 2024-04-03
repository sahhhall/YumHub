

export const RestaurantCard = ( { restaurant } : any ) => {
    const km = (restaurant.distance / 1000).toFixed(1) as unknown;
    const estimatedDelivery = km as any* restaurant.openingHours;
    return (
        <div>
            <img src={restaurant.imageUrl} alt="" />
            <h1 >{restaurant.restaurantName}</h1>
            <div>
                <p>{estimatedDelivery}</p>
            </div>
            <p>{(restaurant.distance / 1000).toFixed(1)} km</p>
            <p>{restaurant.location.coordinates}</p>
        </div>
    )
}