import Svg, { Path } from 'react-native-svg';
         
function IconNetwork({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-network" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0" /><Path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" /><Path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" /><Path d="M6 9h12" /><Path d="M3 20h7" /><Path d="M14 20h7" /><Path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M12 15v3" /></Svg>;

}
export default IconNetwork;
        