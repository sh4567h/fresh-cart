export interface productI{
brand: brandI,
category
:brandI,
createdAt: string
description: 
string
id: string,
imageCover: string,
images: string[],
price: number,

priceAfterDiscount:number,

quantity:number,
ratingsAverage:number,
ratingsQuantity:number,
slug:string,
sold:number,
subcategory: brandI,
title:string,
updatedAt:string,
_id:string,

review:review[]

}
export  interface brandI{
    image :string,
    name :string,
    slug : string,
    _id:string,
    createdAt:string
}

export interface review{
    createdAt
: 
string
product
: 
string
rating
: 
number
review
: 
string
updatedAt
:string,
user
: 
{_id: string, name: string}
__v
: 
number
_id
: 
string
} 
export interface subCateI{
     category
: 
string,
createdAt
: 
string,
name
: 
string,
slug
: 
string,
updatedAt
: 
string,
_id
: 
string
}