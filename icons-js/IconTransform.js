import Svg, { Path } from 'react-native-svg';
         
function IconTransform({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-transform" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><Path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" /><Path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" /><Path d="M15 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></Svg>;

}
export default IconTransform;
        