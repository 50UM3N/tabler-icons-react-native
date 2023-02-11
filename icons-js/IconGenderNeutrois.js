import Svg, { Path } from 'react-native-svg';
                    
function IconGenderNeutrois({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-neutrois" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 10a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" /><Path d="M12 10v-7" /></Svg>;

}
export default IconGenderNeutrois;
                    