import Svg, { Path } from 'react-native-svg';
         
function IconPower({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-power" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 6a7.75 7.75 0 1 0 10 0" /><Path d="M12 4l0 8" /></Svg>;

}
export default IconPower;
        