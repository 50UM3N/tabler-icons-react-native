import Svg, { Path } from 'react-native-svg';
         
function IconSoccerField({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-soccer-field" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M3 9h3v6h-3z" /><Path d="M18 9h3v6h-3z" /><Path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><Path d="M12 5l0 14" /></Svg>;

}
export default IconSoccerField;
        