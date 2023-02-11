import Svg, { Path } from 'react-native-svg';
                    
function IconColumnsOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-columns-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 6h2" /><Path d="M4 10h5.5" /><Path d="M4 14h5.5" /><Path d="M4 18h5.5" /><Path d="M14.5 6h5.5" /><Path d="M14.5 10h5.5" /><Path d="M18 14h2" /><Path d="M14.5 18h3.5" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconColumnsOff;
                    