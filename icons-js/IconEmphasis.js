import Svg, { Path } from 'react-native-svg';
                    
function IconEmphasis({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-emphasis" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 5h-8v10h8m-1 -5h-7" /><Path d="M6 20l0 .01" /><Path d="M10 20l0 .01" /><Path d="M14 20l0 .01" /><Path d="M18 20l0 .01" /></Svg>;

}
export default IconEmphasis;
                    