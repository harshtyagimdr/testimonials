import React from 'react';
interface Image{
    url?:string
}
const Avatar:React.FunctionComponent<Image>=({url})=>{
    // {url=url?url:"https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"}
    return(
        <div className="flex justify-center md:justify-center -mt-32">
        <img className="w-40 h-40 object-cover rounded-full border-2 " src={url} alt="person img"/>
      </div>
    );
}

Avatar.defaultProps={
    url:"https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
}
export default Avatar;