import Svg, { Path } from 'react-native-svg';
                    
function IconHeading({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heading" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 12h10" /><Path d="M7 5v14" /><Path d="M17 5v14" /><Path d="M15 19h4" /><Path d="M15 5h4" /><Path d="M5 19h4" /><Path d="M5 5h4" /></Svg>;

}
export default IconHeading;
                    