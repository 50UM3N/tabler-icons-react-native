import Svg, { Path } from 'react-native-svg';
         
function IconIcons({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-icons" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6.5 6.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" /><Path d="M2.5 21h8l-4 -7z" /><Path d="M14 3l7 7" /><Path d="M14 10l7 -7" /><Path d="M14 14h7v7h-7z" /></Svg>;

}
export default IconIcons;
        