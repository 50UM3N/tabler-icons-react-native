import Svg, { Path } from 'react-native-svg';
                    
function IconPennantFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pennant-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 21l4 0" fill="currentColor" /><Path d="M10 21l0 -18" fill="currentColor" /><Path d="M10 4l9 4l-9 4" fill="currentColor" /></Svg>;

}
export default IconPennantFilled;
                    