import Svg, { Path } from 'react-native-svg';
                    
function IconBrandSnowflake({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-snowflake" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 21v-5.5l4.5 2.5" /><Path d="M10 21v-5.5l-4.5 2.5" /><Path d="M3.5 14.5l4.5 -2.5l-4.5 -2.5" /><Path d="M20.5 9.5l-4.5 2.5l4.5 2.5" /><Path d="M10 3v5.5l-4.5 -2.5" /><Path d="M14 3v5.5l4.5 -2.5" /><Path d="M12 11l1 1l-1 1l-1 -1z" /></Svg>;

}
export default IconBrandSnowflake;
                    