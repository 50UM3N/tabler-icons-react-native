import Svg, { Path } from 'react-native-svg';
                    
function IconRecharging({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-recharging" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" /><Path d="M3.186 10.209a9 9 0 0 0 0 3.508" /><Path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" /><Path d="M10.209 20.814a9 9 0 0 0 3.5 0" /><Path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" /><Path d="M20.814 13.791a9 9 0 0 0 0 -3.508" /><Path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" /><Path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" /><Path d="M12 8l-2 4h4l-2 4" /><Path d="M12 21a9 9 0 0 0 0 -18" /></Svg>;

}
export default IconRecharging;
                    