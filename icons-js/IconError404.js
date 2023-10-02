import Svg, { Path } from 'react-native-svg';
         
function IconError404({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-error-404" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 7v4a1 1 0 0 0 1 1h3" /><Path d="M7 7v10" /><Path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z" /><Path d="M17 7v4a1 1 0 0 0 1 1h3" /><Path d="M21 7v10" /></Svg>;

}
export default IconError404;
        