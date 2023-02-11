import Svg, { Path } from 'react-native-svg';
                    
function IconCone({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cone" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 14c3.866 0 7 1.343 7 3s-3.134 3 -7 3s-7 -1.343 -7 -3s3.134 -3 7 -3z" /><Path d="M19 17v-.5l-7 -12.5l-7 12.5v.5" /></Svg>;

}
export default IconCone;
                    