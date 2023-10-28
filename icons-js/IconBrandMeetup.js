import Svg, { Path } from 'react-native-svg';
         
function IconBrandMeetup({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-meetup" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5.455 10.82c.935 -2.163 3.045 -3.82 5.545 -3.82c2.104 0 2.844 1.915 2 4l-2 6" /><Path d="M6.981 7l-3.981 9.914" /><Path d="M13 11c.937 -2.16 3.071 -3.802 5.42 -3.972c2.104 0 3.128 1.706 2.284 3.792l-2.454 6.094c-.853 1.676 .75 2.586 2.75 2.086" /></Svg>;

}
export default IconBrandMeetup;
        