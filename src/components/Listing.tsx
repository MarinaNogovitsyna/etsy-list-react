import React, { FC } from 'react'
import { Item } from '../ts/types'

type ListingProps = {
    item: Item[]
}

export const Listing:FC<ListingProps> = ({ item = []}) => {
    const getTitle = (title: string) => {
        if(title.length > 50){
            return `${title.slice(0, 50)}...`
        }
        return title
    }
  return (
    <div className="item-list">
        {item.map(el => (
            <div className="item" key={el.listing_id}>
                <div className="item-image">
                <a href={el.url}>
                    <img src={el.image} />
                </a>
                </div>
                <div className="item-details">
                    {/* <p className="item-title">{getTitle(el.title)}</p> */}
                    <p className="item-title">{el.title}</p>
                    <p className="item-price">{
                        el.currency_code === 'USD' 
                        ? `$${el.price}`
                        : el.currency_code === 'EUR'
                        ? `€${el.price}`
                        : `${el.price} ${el.currency_code}`
                    }</p>
                    {/* <p className={`item-quantity ${el.quantity < 10 ? 'level-low' : el.quantity < 20 ? 'level-medium' : 'level-high'}`}>
                        {el.quantity}
                    </p> */}
                    <p className="item-quantity level-medium">{el.quantity}</p>
                </div>
            </div>
        ))}
    </div>
  )
}
