import Svg, { Path } from 'react-native-svg';
         
function IconBike({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bike" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M19 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M12 19l0 -4l-3 -3l5 -4l2 3l3 0" /><Path d="M17 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></Svg>;

}
export default IconBike;
        