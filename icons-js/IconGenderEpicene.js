import Svg, { Path } from 'react-native-svg';
                    
function IconGenderEpicene({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-epicene" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15.536 15.536a5 5 0 1 0 -7.072 -7.072a5 5 0 0 0 7.072 7.072z" /><Path d="M15.536 15.535l5.464 -5.535" /><Path d="M3 14l5.464 -5.535" /><Path d="M12 12h.01" /></Svg>;

}
export default IconGenderEpicene;
                    