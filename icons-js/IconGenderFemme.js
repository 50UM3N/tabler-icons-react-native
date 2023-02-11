import Svg, { Path } from 'react-native-svg';
                    
function IconGenderFemme({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-femme" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><Path d="M12 14v7" /><Path d="M7 18h10" /></Svg>;

}
export default IconGenderFemme;
                    