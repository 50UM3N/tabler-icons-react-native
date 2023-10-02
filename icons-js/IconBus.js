import Svg, { Path } from 'react-native-svg';
         
function IconBus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" /><Path d="M16 5l1.5 7l4.5 0" /><Path d="M2 10l15 0" /><Path d="M7 5l0 5" /><Path d="M12 5l0 5" /></Svg>;

}
export default IconBus;
        