import Svg, { Path } from 'react-native-svg';
         
function IconRewindForward5({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rewind-forward-5" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 18a6 6 0 1 1 0 -12h11" /><Path d="M13 20h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" /><Path d="M17 9l3 -3l-3 -3" /></Svg>;

}
export default IconRewindForward5;
        