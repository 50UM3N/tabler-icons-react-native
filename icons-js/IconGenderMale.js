import Svg, { Path } from 'react-native-svg';
                    
function IconGenderMale({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-male" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><Path d="M19 5l-5.4 5.4" /><Path d="M19 5h-5" /><Path d="M19 5v5" /></Svg>;

}
export default IconGenderMale;
                    