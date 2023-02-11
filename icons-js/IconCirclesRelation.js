import Svg, { Path } from 'react-native-svg';
                    
function IconCirclesRelation({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circles-relation" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" /><Path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" /></Svg>;

}
export default IconCirclesRelation;
                    