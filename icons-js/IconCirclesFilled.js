import Svg, { Path } from 'react-native-svg';
                    
function IconCirclesFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circles-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0m-1.5 10m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0m15 0m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" fill="currentColor" /></Svg>;

}
export default IconCirclesFilled;
                    