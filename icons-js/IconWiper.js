import Svg, { Path } from 'react-native-svg';
         
function IconWiper({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wiper" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 18m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M3 9l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" /><Path d="M12 18l-2.2 -12.8" /></Svg>;

}
export default IconWiper;
        