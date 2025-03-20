import React from "react";
import { Link } from "react-router-dom";

type AnchorProps = {
    title: any;
    href?: string;
  };

const Anchor:React.FC<AnchorProps> = ({ title , href = "#"}) => {
  return (
    <div>
      <Link to={href} className='hover:text-amber-200 text-sm'>{title}</Link>
    </div>
  )
}

export default Anchor
