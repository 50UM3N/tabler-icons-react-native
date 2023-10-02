import Svg, { Path } from 'react-native-svg';
         
function IconWheelchair({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wheelchair" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 16m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><Path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 17a3 3 0 0 0 -3 -3h-3.4" /><Path d="M3 3h1a2 2 0 0 1 2 2v6" /><Path d="M6 8h11" /><Path d="M15 8v6" /></Svg>;

}
export default IconWheelchair;
        