import  React,{useState} from 'react';
import TestimonialList from './TestimonialList';

const TestimonialConatiner=()=>{
    const data=[
        {id:1,img:"https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg",name:"Harsh Tyagi",desc:"loreEst et enim duis occaecat. Non enim qui excepteur ut officia Lorem ipsum fugiat nostrud laborum nulla velit velit. Eiusmod ex ea veniam id cillum elit ex adipisicing eiusmod cupidatat commodo."},
        {id:2,img:"https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",name:"Shivam",desc:"loreEst et enim duis occaecat. Non enim qui excepteur ut officia Lorem ipsum fugiat nostrud laborum nulla velit velit. Eiusmod ex ea veniam id cillum elit ex adipisicing eiusmod cupidatat commodo."},
        {id:3,img:"https://i.imgur.com/zLCYdR9.jpg",name:"Arun",desc:"loreEst et enim duis occaecat. Non enim qui excepteur ut officia Lorem ipsum fugiat nostrud laborum nulla velit velit. Eiusmod ex ea veniam id cillum elit ex adipisicing eiusmod cupidatat commodo."},
        {id:4,img:"https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",name:"Ram",desc:"loreEst et enim duis occaecat. Non enim qui excepteur ut officia Lorem ipsum fugiat nostrud laborum nulla velit velit. Eiusmod ex ea veniam id cillum elit ex adipisicing eiusmod cupidatat commodo."},
    ]
    
    return (
        <div  style={{"backgroundColor":"#ededed"}}>
        <div className="container mx-auto">
            <h1 className="text-4xl py-10" style={{"color":"#3498DB"}}>Testimonials</h1>
            <TestimonialList data={data}/>
  
      </div>
      </div>
    );
}
export default TestimonialConatiner;