import Svg, { Path } from 'react-native-svg';
         
function IconRoute({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-route" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4z" /><Path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" /></Svg>;

}
export default IconRoute;
        