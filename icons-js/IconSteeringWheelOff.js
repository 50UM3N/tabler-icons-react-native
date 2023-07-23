import Svg, { Path } from 'react-native-svg';
         
function IconSteeringWheelOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-steering-wheel-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.04 16.048a9 9 0 0 0 -12.083 -12.09m-2.32 1.678a9 9 0 1 0 12.737 12.719" /><Path d="M10.595 10.576a2 2 0 1 0 2.827 2.83" /><Path d="M12 14v7" /><Path d="M10 12l-6.75 -2" /><Path d="M15.542 11.543l5.208 -1.543" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconSteeringWheelOff;
        