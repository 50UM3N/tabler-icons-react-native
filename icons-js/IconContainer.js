import Svg, { Path } from 'react-native-svg';
                    
function IconContainer({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-container" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 4v.01" /><Path d="M20 20v.01" /><Path d="M20 16v.01" /><Path d="M20 12v.01" /><Path d="M20 8v.01" /><Path d="M8 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><Path d="M4 4v.01" /><Path d="M4 20v.01" /><Path d="M4 16v.01" /><Path d="M4 12v.01" /><Path d="M4 8v.01" /></Svg>;

}
export default IconContainer;
                    