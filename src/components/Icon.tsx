import React from 'react';
import cs from 'classnames';

//引入文件中全部svg
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {requireAll(require.context('icons', true, /\.svg$/))}catch(err){console.log(err);}

type Props = {
  name?: string,
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) =>{
  const {name,className,children, ...rest} = props
  return (
    <svg className={cs('icon',className)} {...rest}>
      {name && <use xlinkHref={'#' + name}/>}
    </svg>
  )
}

export default Icon