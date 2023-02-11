import Svg, { Path } from 'react-native-svg';
                    
function IconSkateboardOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-skateboard-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M15 15a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" /><Path d="M3 9c0 .552 .895 1 2 1h5m4 0h5c1.105 0 2 -.448 2 -1" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconSkateboardOff;
                    