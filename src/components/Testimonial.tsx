import React from 'react';
import Avatar from './Avatar';
import Card from './Card';

interface PersonProps{
  person:{
    id:number,
    img:string,
    name:string,
    desc:string,
  }
}

const Testimonial:React.FunctionComponent<PersonProps>=({person})=>{
  
    return(
      <div className="row-start ">
        <div className="max-w-20 mx-4 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          
         <Avatar url={person.img}/>
         <div className="flex justify-start mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={48} height={48} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10}  strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#3498db"><path d="M25.08333,122.55c0,3.58333 2.86667,6.45 6.45,6.45h36.90833c3.58333,0 6.45,-2.86667 6.45,-6.45v-37.26667c0,-3.58333 -2.86667,-6.45 -6.45,-6.45h-21.85833c0,-10.03333 7.88333,-17.91667 17.91667,-17.91667v-21.5c-21.85833,0 -39.41667,17.55833 -39.41667,39.41667c0,1.43333 0,3.225 0.35833,4.65833c-0.35833,0.71667 -0.35833,1.43333 -0.35833,1.79167zM103.2,129h36.90833c3.58333,0 6.45,-2.86667 6.45,-6.45v-37.26667c0,-3.58333 -2.86667,-6.45 -6.45,-6.45h-21.85833c0,-10.03333 7.88333,-17.91667 17.91667,-17.91667v-21.5c-21.85833,0 -39.41667,17.55833 -39.41667,39.41667c0,1.43333 0,3.225 0.35833,4.65833c-0.35833,0.71667 -0.35833,1.43333 -0.35833,1.79167v36.90833c0,3.94167 2.86667,6.80833 6.45,6.80833z" /></g></g></svg>

          </div>
          <Card name={person.name} desc={person.desc}/>
          <div className="flex justify-end mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={48} height={48} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#3498db"><path d="M146.91667,45.86667c0,-3.58333 -2.86667,-6.45 -6.45,-6.45h-37.26667c-3.58333,0 -6.45,2.86667 -6.45,6.45v36.90833c0,3.58333 2.86667,6.45 6.45,6.45h22.21667c0,10.03333 -7.88333,17.91667 -17.91667,17.91667v21.5c21.85833,0 39.41667,-17.55833 39.41667,-39.41667c0,-1.43333 0,-3.225 -0.35833,-4.65833c0.35833,-0.71667 0.35833,-1.075 0.35833,-1.79167zM68.8,39.41667h-37.26667c-3.58333,0 -6.45,2.86667 -6.45,6.45v36.90833c0,3.58333 2.86667,6.45 6.45,6.45h22.21667c0,10.03333 -7.88333,17.91667 -17.91667,17.91667v21.5c21.85833,0 39.41667,-17.55833 39.41667,-39.41667c0,-1.43333 0,-3.225 -0.35833,-4.65833c0.35833,-0.71667 0.35833,-1.075 0.35833,-1.79167v-36.90833c0,-3.58333 -2.86667,-6.45 -6.45,-6.45z" /></g></g></svg>

          </div>
        </div>
        </div>
    );
}
export default Testimonial;