import Svg, { Path } from 'react-native-svg';
         
function IconWorldBolt({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-bolt" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.985 12.52a9 9 0 1 0 -7.52 8.36" /><Path d="M3.6 9h16.8" /><Path d="M3.6 15h10.9" /><Path d="M11.5 3a17 17 0 0 0 0 18" /><Path d="M12.5 3c2.313 3.706 3.07 7.856 2.27 12" /><Path d="M19 16l-2 3h4l-2 3" /></Svg>;

}
export default IconWorldBolt;
        