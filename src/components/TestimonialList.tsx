import  React from 'react';
import Testimonial from './Testimonial';
interface Data{
    id:number,
    img:string,
    name:string,
    desc:string,
}
interface DataProps{
    data:Data[]
}
const TestimonialList:React.FunctionComponent<DataProps>=({data})=>{
    return (
        <div className="container mx-auto">
            <div className="grid grid-rows md:grid-flow-col">
        {data.map(person=>{
            return(
                <Testimonial key={person.id} person={person} />
               
            );
            
        })}
        </div>
      </div>
    );
}
export default TestimonialList;