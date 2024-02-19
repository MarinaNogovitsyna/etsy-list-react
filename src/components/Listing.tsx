import React, { FC } from 'react'
import { Item } from '../ts/types';

interface ListingProps  {
    item: Item[]
}

export const Listing:FC<ListingProps> = ({ item = []}) => {
    console.log(item);
    
    
    const getTitle = (title: string) => {
        if(title.length > 50){
            return `${title.slice(0, 50)}...`
        }
        return title
    }

    const getLevel = (level: number) => {
        if (level < 10) {
            return 'level-low'
        } else if (level < 20){
            return 'level-medium'
        } return 'level-high'
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
                    { el.title ? <p className="item-title">{getTitle(el.title)}</p> : null}
                    {el.price && el.currency_code
                        ? <p className="item-price">{
                            el.currency_code === 'USD' 
                            ? `$${el.price}`
                            : el.currency_code === 'EUR'
                            ? `€${el.price}`
                            : `${el.price} ${el.currency_code}`
                            }</p>
                        : null}
                    {el.quantity 
                    ? <p className={`item-quantity ${getLevel(el.quantity)}`}>{el.quantity}</p>
                    : null}
                </div>
            </div>
        ))}
    </div>
  )
}
