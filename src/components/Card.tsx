import React from 'react';
interface Card{
  name:string,
  desc:string,
}
const Card:React.FunctionComponent<Card>=({name,desc})=>{
    return (
      <div>
      <h2 className="text-gray-800 text-2xl font-semibold ">{name}</h2>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
    );
}
export default Card;