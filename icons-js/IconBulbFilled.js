import Svg, { Path } from 'react-native-svg';
                    
function IconBulbFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bulb-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-3.405 10.7a3.5 3.5 0 0 0 -.295 2a2 2 0 1 1 -4 0a3.5 3.5 0 0 0 -.295 -2m2.295 -10a5 5 0 0 1 3 9a3.498 3.498 0 0 0 -.706 1h-4.588a3.498 3.498 0 0 0 -.706 -1a5 5 0 0 1 3 -9z" fill="currentColor" /></Svg>;

}
export default IconBulbFilled;
                    