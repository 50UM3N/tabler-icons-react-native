import Svg, { Path } from 'react-native-svg';
                    
function IconLollipop({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lollipop" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><Path d="M21 10a3.5 3.5 0 0 0 -7 0" /><Path d="M14 10a3.5 3.5 0 0 1 -7 0" /><Path d="M14 17a3.5 3.5 0 0 0 0 -7" /><Path d="M14 3a3.5 3.5 0 0 0 0 7" /><Path d="M3 21l6 -6" /></Svg>;

}
export default IconLollipop;
                    