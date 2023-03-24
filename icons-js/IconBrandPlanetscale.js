import Svg, { Path } from 'react-native-svg';
                    
function IconBrandPlanetscale({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-planetscale" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.993 11.63a9 9 0 0 1 -9.362 9.362l9.362 -9.362z" /><Path d="M12 3a9.001 9.001 0 0 1 8.166 5.211l-11.955 11.955a9 9 0 0 1 3.789 -17.166z" /><Path d="M12 12l-6 6" /></Svg>;

}
export default IconBrandPlanetscale;
                    