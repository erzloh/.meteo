const apiKey = '1a2bf42014c5309e1130565f1af28e1d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=fr&appid=' + apiKey;

const searchBar = document.querySelector('#searchbar');
const searchBtn = document.querySelector('#submit');

function capitalizeFirstLetter(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.substring(1);
}

async function updateWeather(city) {
	try {
		const response = await fetch(apiUrl + '&q=' + city);
		if (!response.ok) {
			throw new Error('error when fetching weather data');
		}
		const data = await response.json();

		document.querySelector('#city-name').innerHTML = data.name;
		document.querySelector('#temperature').innerHTML = Math.round(data.main.temp) + '°C';
		document.querySelector('#weather').innerHTML = capitalizeFirstLetter(data.weather[0].description);
		document.querySelector('#humidity').innerHTML = 'Humidité : ' + data.main.humidity + ' %';
		document.querySelector('#wind').innerHTML = 'Vent : ' + data.wind.speed + ' km/h';

		switch (data.weather[0].main)
		{
			case 'Thunderstorm':
				document.querySelector('#weather-icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" height="14" width="14"><g id="flash-1--flash-power-connect-charge-electricity-lightning"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M3.9464285714285716 0.4642857142857143 1.8571428571428572 5.395c-0.028897142857142857 0.07033928571428572 -0.04006785714285715 0.1466957142857143 -0.03254642857142857 0.222365 0.007521428571428571 0.07566928571428572 0.03351214285714286 0.14833928571428573 0.07569714285714285 0.21161214285714286 0.04217571428571429 0.06326357142857143 0.099255 0.11520785714285714 0.1662142857142857 0.151255 0.06695 0.03605642857142857 0.14173714285714287 0.05510142857142857 0.21777785714285713 0.055482142857142855h2.5907142857142857l-1.8571428571428572 6.5 7.976428571428571 -7.55857142857143c0.06630000000000001 -0.06384857142857144 0.11207857142857143 -0.1459342857142857 0.13157857142857143 -0.23585714285714288 0.019500000000000003 -0.08991357142857143 0.011885714285714286 -0.18360642857142856 -0.022007142857142857 -0.26917428571428575 -0.033800000000000004 -0.08556785714285714 -0.09230000000000001 -0.15914785714285715 -0.16797857142857145 -0.21141714285714286 -0.07577142857142857 -0.05226 -0.16528571428571429 -0.08085071428571429 -0.2573071428571429 -0.08212285714285715H7.196428571428572l1.8571428571428572 -3.7142857142857144h-5.107142857142858Z" stroke-width="1"></path></g></svg>';
				break;
			case 'Drizzle':
				document.querySelector('#weather-icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" height="14" width="14"><g id="rain-cloud--cloud-rain-rainy-meteorology-precipitation-weather"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m3.7142857142857144 10.678571428571429 0.4642857142857143 -0.9285714285714286" stroke-width="1"></path><path id="Vector_2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m7.892857142857143 10.678571428571429 0.4642857142857143 -0.9285714285714286" stroke-width="1"></path><path id="Vector_3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m5.339285714285714 12.535714285714286 0.4642857142857143 -0.9285714285714286" stroke-width="1"></path><path id="Vector_4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m1.1607142857142858 12.535714285714286 0.4642857142857143 -0.9285714285714286" stroke-width="1"></path><path id="Vector_5" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m9.517857142857142 12.535714285714286 0.4642857142857143 -0.9285714285714286" stroke-width="1"></path><path id="Vector_6" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9.51795 7.428571428571429c0.6156428571428572 0 1.2061214285714286 -0.24457642857142858 1.6414357142857143 -0.6799278571428572 0.4354071428571429 -0.43536071428571427 0.6799928571428571 -1.0258207142857143 0.6799928571428571 -1.6415007142857143 0 -0.61568 -0.24458571428571432 -1.2061492857142857 -0.6799928571428571 -1.6415007142857143C10.724071428571428 3.030290714285714 10.133592857142858 2.7857142857142856 9.51795 2.7857142857142856c-0.5295364285714287 0.0017642857142857143 -1.0430457142857144 0.18165642857142858 -1.4578942857142858 0.5107142857142858 -0.12339785714285716 -0.6494242857142858 -0.42909285714285716 -1.2503121428571429 -0.8813721428571428 -1.7324171428571429 -0.4522792857142857 -0.4821142857142857 -1.0324414285714287 -0.8255213571428571 -1.672672857142857 -0.9900911428571428C4.865779285714286 0.4093505 4.191933571428572 0.43041978571428574 3.5632257142857147 0.6346646428571429c-0.6286985714285714 0.20424578571428573 -1.1862778571428572 0.5832310714285714 -1.6075428571428572 1.0926453571428572 -0.42127428571428577 0.5094235714285715 -0.6888421428571428 1.1282328571428573 -0.7714292857142857 1.7841014285714287 -0.08257785714285715 0.6558685714285714 0.023232857142857145 1.3216914285714285 0.30507285714285715 1.919645s0.7280557142857143 1.1033285714285714 1.2865078571428572 1.4570492857142856c0.5584428571428572 0.35373 1.2060378571428572 0.5411807142857143 1.8670785714285714 0.5404657142857143h4.875037142857143Z" stroke-width="1"></path></g></svg>';
				break;
			case 'Clouds':
				document.querySelector('#weather-icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" height="14" width="14"><g id="cloud--cloud-meteorology-cloudy-overcast-cover-weather"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10.214285714285715 6.035714285714286c-0.5021714285714285 0.0006685714285714286 -0.9907114285714287 0.16351214285714286 -1.3928571428571428 0.4642857142857143 0 -0.8264378571428571 -0.2450685714285714 -1.6343228571428572 -0.7042100000000001 -2.321484285714286 -0.4591507142857143 -0.6871707142857143 -1.1117599999999999 -1.2227428571428571 -1.875287142857143 -1.5390142857142857 -0.7635364285714286 -0.3162621428571429 -1.6037078571428574 -0.39901642857142855 -2.4142671428571427 -0.23777928571428575 -0.8105685714285715 0.16122785714285714 -1.5551157142857142 0.559195 -2.139502857142857 1.1435821428571429C1.1037835714285715 4.129691428571428 0.7058090000000001 4.874238571428571 0.5445774285714285 5.684807142857143 0.3833467857142857 6.495366428571429 0.4660964285714286 7.3355378571428576 0.7823622857142857 8.099074285714286c0.3162677142857143 0.7635271428571428 0.8518398571428571 1.41609 1.5390105714285716 1.8752685714285715C3.0085342857142856 10.43352142857143 3.816419285714286 10.678571428571429 4.642857142857143 10.678571428571429h5.571428571428571c0.6156428571428572 0 1.2061214285714286 -0.24458571428571432 1.6415285714285714 -0.6799 0.4353142857142857 -0.4354071428571429 0.6799 -1.0258485714285714 0.6799 -1.6415285714285714 0 -0.61568 -0.24458571428571432 -1.2061400000000002 -0.6799 -1.6415007142857143C11.420407142857144 6.280290714285715 10.829928571428573 6.035714285714286 10.214285714285715 6.035714285714286v0Z" stroke-width="1"></path></g></svg>';
				break;
			case 'Clear':
				document.querySelector('#weather-icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" height="14" width="14"><g id="brightness-1--bright-adjust-brightness-adjustment-sun-raise-controls"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.500046428571428 8.355202142857143c1.024632142857143 0 1.855267142857143 -0.8306350000000001 1.855267142857143 -1.855267142857143S7.524678571428572 4.644667857142857 6.500046428571428 4.644667857142857s-1.8552578571428573 0.8306350000000001 -1.8552578571428573 1.855267142857143 0.8306257142857143 1.855267142857143 1.8552578571428573 1.855267142857143Z" stroke-width="1"></path><path id="Vector_2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.5 0.4642857142857143v0.9285714285714286" stroke-width="1"></path><path id="Vector_3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.5 11.607142857142858v0.9285714285714286" stroke-width="1"></path><path id="Vector_4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12.535714285714286 6.5h-0.9285714285714286" stroke-width="1"></path><path id="Vector_5" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M1.3928571428571428 6.5h-0.9285714285714286" stroke-width="1"></path><path id="Vector_6" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m10.771428571428572 2.2284785714285715 -0.6592857142857143 0.6592857142857143" stroke-width="1"></path><path id="Vector_7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m2.8878757142857143 10.112050000000002 -0.6592857142857143 0.6592857142857143" stroke-width="1"></path><path id="Vector_8" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m10.771428571428572 10.771335714285714 -0.6592857142857143 -0.6592857142857143" stroke-width="1"></path><path id="Vector_9" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m2.8878757142857143 2.887764285714286 -0.6592857142857143 -0.6592857142857143" stroke-width="1"></path></g></svg>';
				break;
			case 'Rain':
				document.querySelector('#weather-icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" height="14" width="14"><g id="rain-cloud--cloud-rain-rainy-meteorology-precipitation-weather"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m3.7142857142857144 10.678571428571429 0.4642857142857143 -0.9285714285714286" stroke-width="1"></path><path id="Vector_2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m7.892857142857143 10.678571428571429 0.4642857142857143 -0.9285714285714286" stroke-width="1"></path><path id="Vector_3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m5.339285714285714 12.535714285714286 0.4642857142857143 -0.9285714285714286" stroke-width="1"></path><path id="Vector_4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m1.1607142857142858 12.535714285714286 0.4642857142857143 -0.9285714285714286" stroke-width="1"></path><path id="Vector_5" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m9.517857142857142 12.535714285714286 0.4642857142857143 -0.9285714285714286" stroke-width="1"></path><path id="Vector_6" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9.51795 7.428571428571429c0.6156428571428572 0 1.2061214285714286 -0.24457642857142858 1.6414357142857143 -0.6799278571428572 0.4354071428571429 -0.43536071428571427 0.6799928571428571 -1.0258207142857143 0.6799928571428571 -1.6415007142857143 0 -0.61568 -0.24458571428571432 -1.2061492857142857 -0.6799928571428571 -1.6415007142857143C10.724071428571428 3.030290714285714 10.133592857142858 2.7857142857142856 9.51795 2.7857142857142856c-0.5295364285714287 0.0017642857142857143 -1.0430457142857144 0.18165642857142858 -1.4578942857142858 0.5107142857142858 -0.12339785714285716 -0.6494242857142858 -0.42909285714285716 -1.2503121428571429 -0.8813721428571428 -1.7324171428571429 -0.4522792857142857 -0.4821142857142857 -1.0324414285714287 -0.8255213571428571 -1.672672857142857 -0.9900911428571428C4.865779285714286 0.4093505 4.191933571428572 0.43041978571428574 3.5632257142857147 0.6346646428571429c-0.6286985714285714 0.20424578571428573 -1.1862778571428572 0.5832310714285714 -1.6075428571428572 1.0926453571428572 -0.42127428571428577 0.5094235714285715 -0.6888421428571428 1.1282328571428573 -0.7714292857142857 1.7841014285714287 -0.08257785714285715 0.6558685714285714 0.023232857142857145 1.3216914285714285 0.30507285714285715 1.919645s0.7280557142857143 1.1033285714285714 1.2865078571428572 1.4570492857142856c0.5584428571428572 0.35373 1.2060378571428572 0.5411807142857143 1.8670785714285714 0.5404657142857143h4.875037142857143Z" stroke-width="1"></path></g></svg>';
				break;
			case 'Snow':
				document.querySelector('#weather-icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" height="14" width="14"><g id="snow-flake--winter-freeze-snow-freezing-ice-cold-weather-snowflake"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m4.642857142857143 0.4642857142857143 1.8571428571428572 1.8571428571428572 1.8571428571428572 -1.8571428571428572" stroke-width="1"></path><path id="Vector_2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m0.4642857142857143 8.357142857142858 1.8571428571428572 -1.8571428571428572 -1.8571428571428572 -1.8571428571428572" stroke-width="1"></path><path id="Vector_3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m8.357142857142858 12.535714285714286 -1.8571428571428572 -1.8571428571428572 -1.8571428571428572 1.8571428571428572" stroke-width="1"></path><path id="Vector_4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m12.535714285714286 4.642857142857143 -1.8571428571428572 1.8571428571428572 1.8571428571428572 1.8571428571428572" stroke-width="1"></path><path id="Vector_5" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M3.25 3.25 4.642857142857143 4.642857142857143" stroke-width="1"></path><path id="Vector_6" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m4.642857142857143 8.357142857142858 -1.3928571428571428 1.3928571428571428" stroke-width="1"></path><path id="Vector_7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.25 8.357142857142858 4.642857142857143" stroke-width="1"></path><path id="Vector_8" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m8.357142857142858 8.357142857142858 1.3928571428571428 1.3928571428571428" stroke-width="1"></path><path id="Vector_9" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.5 2.3214285714285716v8.357142857142858" stroke-width="1"></path><path id="Vector_10" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M2.3214285714285716 6.5h8.357142857142858" stroke-width="1"></path></g></svg>';
				break;
			case 'Mist':
				document.querySelector('#weather-icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" height="14" width="14"><g id="cloud--cloud-meteorology-cloudy-overcast-cover-weather"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10.214285714285715 6.035714285714286c-0.5021714285714285 0.0006685714285714286 -0.9907114285714287 0.16351214285714286 -1.3928571428571428 0.4642857142857143 0 -0.8264378571428571 -0.2450685714285714 -1.6343228571428572 -0.7042100000000001 -2.321484285714286 -0.4591507142857143 -0.6871707142857143 -1.1117599999999999 -1.2227428571428571 -1.875287142857143 -1.5390142857142857 -0.7635364285714286 -0.3162621428571429 -1.6037078571428574 -0.39901642857142855 -2.4142671428571427 -0.23777928571428575 -0.8105685714285715 0.16122785714285714 -1.5551157142857142 0.559195 -2.139502857142857 1.1435821428571429C1.1037835714285715 4.129691428571428 0.7058090000000001 4.874238571428571 0.5445774285714285 5.684807142857143 0.3833467857142857 6.495366428571429 0.4660964285714286 7.3355378571428576 0.7823622857142857 8.099074285714286c0.3162677142857143 0.7635271428571428 0.8518398571428571 1.41609 1.5390105714285716 1.8752685714285715C3.0085342857142856 10.43352142857143 3.816419285714286 10.678571428571429 4.642857142857143 10.678571428571429h5.571428571428571c0.6156428571428572 0 1.2061214285714286 -0.24458571428571432 1.6415285714285714 -0.6799 0.4353142857142857 -0.4354071428571429 0.6799 -1.0258485714285714 0.6799 -1.6415285714285714 0 -0.61568 -0.24458571428571432 -1.2061400000000002 -0.6799 -1.6415007142857143C11.420407142857144 6.280290714285715 10.829928571428573 6.035714285714286 10.214285714285715 6.035714285714286v0Z" stroke-width="1"></path></g></svg>';
				break;
			default:
				document.querySelector('#weather-icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" height="14" width="14"><g id="synchronize-warning--arrow-fail-notification-sync-warning-failure-synchronize-error"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m10.214285714285715 8.357142857142858 1.8571428571428572 -0.4642857142857143 0.4642857142857143 1.8571428571428572" stroke-width="1"></path><path id="Vector_2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12.071428571428571 7.892857142857143c-0.3948285714285715 1.1796385714285715 -1.139357142857143 2.211207142857143 -2.134507142857143 2.957592857142857 -0.9951871428571428 0.7463857142857143 -2.193926428571429 1.1722285714285714 -3.4369307142857144 1.2209785714285715 -1.143897857142857 0.00018571428571428572 -2.2601335714285717 -0.35165 -3.19709 -1.0078714285714285 -0.9369564285714287 -0.6562214285714286 -1.6492264285714286 -1.5848857142857145 -2.0400528571428573 -2.6599857142857144" stroke-width="1"></path><path id="Vector_3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m2.7857142857142856 4.642857142857143 -1.8571428571428572 0.4642857142857143 -0.4642857142857143 -1.8571428571428572" stroke-width="1"></path><path id="Vector_4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M0.9285714285714286 5.107142857142858c0.4156007142857143 -1.1667221428571428 1.165617142857143 -2.185197857142857 2.15644 -2.9283242857142855C4.0758342857142855 1.4357014285714287 5.263579285714286 1.0008607142857142 6.5 0.9285714285714286c1.1494692857142856 0.0032314285714285717 2.2698 0.36192 3.2073785714285714 1.0268885714285714C10.645050000000001 2.6204285714285716 11.354014285714285 3.5591214285714288 11.737142857142858 4.642857142857143" stroke-width="1"></path><path id="Vector_5" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.5 3.25v3.7142857142857144" stroke-width="1"></path><g id="Group 2626"><path id="Vector_6" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.5 9.517857142857142c-0.12820785714285715 0 -0.23214285714285715 -0.10390714285714286 -0.23214285714285715 -0.23214285714285715 0 -0.12820785714285715 0.103935 -0.23214285714285715 0.23214285714285715 -0.23214285714285715" stroke-width="1"></path><path id="Vector_7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.5 9.517857142857142c0.12820785714285715 0 0.23214285714285715 -0.10390714285714286 0.23214285714285715 -0.23214285714285715 0 -0.12820785714285715 -0.103935 -0.23214285714285715 -0.23214285714285715 -0.23214285714285715" stroke-width="1"></path></g></g></svg>';
				break;
		}
	}
	catch (error) {
		console.error('catching error:', error);
		document.querySelector('#city-name').innerHTML = 'Données non disponibles';
		document.querySelector('#temperature').innerHTML = '- °C';
		document.querySelector('#weather').innerHTML = '-';
		document.querySelector('#humidity').innerHTML = 'Humidité : - %';
		document.querySelector('#wind').innerHTML = 'Vent : - km/h';
		document.querySelector('#weather-icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" height="14" width="14"><g id="synchronize-warning--arrow-fail-notification-sync-warning-failure-synchronize-error"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m10.214285714285715 8.357142857142858 1.8571428571428572 -0.4642857142857143 0.4642857142857143 1.8571428571428572" stroke-width="1"></path><path id="Vector_2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12.071428571428571 7.892857142857143c-0.3948285714285715 1.1796385714285715 -1.139357142857143 2.211207142857143 -2.134507142857143 2.957592857142857 -0.9951871428571428 0.7463857142857143 -2.193926428571429 1.1722285714285714 -3.4369307142857144 1.2209785714285715 -1.143897857142857 0.00018571428571428572 -2.2601335714285717 -0.35165 -3.19709 -1.0078714285714285 -0.9369564285714287 -0.6562214285714286 -1.6492264285714286 -1.5848857142857145 -2.0400528571428573 -2.6599857142857144" stroke-width="1"></path><path id="Vector_3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m2.7857142857142856 4.642857142857143 -1.8571428571428572 0.4642857142857143 -0.4642857142857143 -1.8571428571428572" stroke-width="1"></path><path id="Vector_4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M0.9285714285714286 5.107142857142858c0.4156007142857143 -1.1667221428571428 1.165617142857143 -2.185197857142857 2.15644 -2.9283242857142855C4.0758342857142855 1.4357014285714287 5.263579285714286 1.0008607142857142 6.5 0.9285714285714286c1.1494692857142856 0.0032314285714285717 2.2698 0.36192 3.2073785714285714 1.0268885714285714C10.645050000000001 2.6204285714285716 11.354014285714285 3.5591214285714288 11.737142857142858 4.642857142857143" stroke-width="1"></path><path id="Vector_5" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.5 3.25v3.7142857142857144" stroke-width="1"></path><g id="Group 2626"><path id="Vector_6" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.5 9.517857142857142c-0.12820785714285715 0 -0.23214285714285715 -0.10390714285714286 -0.23214285714285715 -0.23214285714285715 0 -0.12820785714285715 0.103935 -0.23214285714285715 0.23214285714285715 -0.23214285714285715" stroke-width="1"></path><path id="Vector_7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.5 9.517857142857142c0.12820785714285715 0 0.23214285714285715 -0.10390714285714286 0.23214285714285715 -0.23214285714285715 0 -0.12820785714285715 -0.103935 -0.23214285714285715 -0.23214285714285715 -0.23214285714285715" stroke-width="1"></path></g></g></svg>';

	}
}

searchBtn.addEventListener('click', () => {
	updateWeather(searchBar.value);
})

// Make that the enter key presses the button
document.getElementById("searchbar").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    document.getElementById("submit").click();
  }
});

// Get the location of the user
if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(async function(position) {
		try {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			const city = await getCity(latitude, longitude);
			updateWeather(city);
		}
		catch (error) {
			console.error('an error occured when calling getCity()');
		}
	},
    function(error) {
		updateWeather('zurich');
		if (error.code === error.PERMISSION_DENIED) {
			console.log("You denied access to your localization.");
		}
		else {
			console.error("An error occured when fetching your localization: " + error.message);
		}
    }
  );
}
else {
	updateWeather('zurich');
}

async function getCity(latitude, longitude) {
	try {
		const response = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
		if (!response.ok) {
			throw new Error('An error occured when fetching data');
		}
		const data = await response.json();

		if (data.length > 0) {
			return data[0].name;
		}
		else {
			return 'undefined';
		}
	}
	catch (error) {
		console.error('Error', error);
	}
}

// Handle night mode button
let nightMode = false;
const nightModeBtn = document.querySelector('#night-btn');
nightModeBtn.addEventListener('click', () => {

	if (nightMode === false) {
		document.querySelector('body').style.setProperty('--background-color', 'black');
		document.querySelector('body').style.setProperty('--text-color', 'white');
		nightMode = true;
	}
	else {
		document.querySelector('body').style.setProperty('--background-color', 'white');
		document.querySelector('body').style.setProperty('--text-color', 'black');
		nightMode = false;
	}
});