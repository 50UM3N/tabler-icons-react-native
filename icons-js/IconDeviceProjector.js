import Svg, { Path } from 'react-native-svg';
         
function IconDeviceProjector({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-projector" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 9a5 5 0 1 0 10 0a5 5 0 0 0 -10 0" /><Path d="M9 6h-4a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-2" /><Path d="M6 15h1" /><Path d="M7 18l-1 2" /><Path d="M18 18l1 2" /></Svg>;

}
export default IconDeviceProjector;
        