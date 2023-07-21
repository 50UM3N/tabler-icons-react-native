import Svg, { Path, Circle } from 'react-native-svg';
                    
function IconDivide({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-divide" width={size} height={size} viewBox="0 0 24 24" strokeWidth="0" stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx="12" cy="6" r="1" fill={color} /><Circle cx="12" cy="18" r="1" fill={color} /><Path d="M5 12l14 0" /></Svg>;

}
export default IconDivide;
                    