import Svg, { Path } from 'react-native-svg';
         
function IconCircleKey({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-key" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" /><Path d="M12.5 11.5l-4 4l1.5 1.5" /><Path d="M12 15l-1.5 -1.5" /></Svg>;

}
export default IconCircleKey;
        