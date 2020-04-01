// Testing data grabbed from actual call to Open Weather API
const testData = {
	"list": 
		[
			{
				"dt": 1585677600,
				"sunrise": 1585655402,
				"sunset": 1585700293,
				"temp": {
					"day": 78.96,
					"min": 57.4,
					"max": 80.26,
					"night": 57.4,
					"eve": 68.56,
					"morn": 77.47
				},
				"feels_like": {
					"day": 72.03,
					"night": 48.29,
					"eve": 59.45,
					"morn": 76.19
				},
				"pressure": 1011,
				"humidity": 61,
				"weather": [
					{
						"id": 501,
						"main": "Rain",
						"description": "moderate rain",
						"icon": "10d"
					}
				],
				"speed": 21.21,
				"deg": 316,
				"clouds": 46,
				"rain": 3.51
			},
			{
				"dt": 1585764000,
				"sunrise": 1585741730,
				"sunset": 1585786728,
				"temp": {
					"day": 68.85,
					"min": 54.75,
					"max": 71.89,
					"night": 63.1,
					"eve": 67.75,
					"morn": 54.75
				},
				"feels_like": {
					"day": 63.81,
					"night": 61.74,
					"eve": 63.73,
					"morn": 47.53
				},
				"pressure": 1018,
				"humidity": 38,
				"weather": [
					{
						"id": 800,
						"main": "Clear",
						"description": "sky is clear",
						"icon": "01d"
					}
				],
				"speed": 5.77,
				"deg": 39,
				"clouds": 6
			},
			{
				"dt": 1585850400,
				"sunrise": 1585828058,
				"sunset": 1585873164,
				"temp": {
					"day": 75.24,
					"min": 61,
					"max": 75.42,
					"night": 65.89,
					"eve": 70.09,
					"morn": 61
				},
				"feels_like": {
					"day": 70.36,
					"night": 63.93,
					"eve": 67.01,
					"morn": 57.06
				},
				"pressure": 1018,
				"humidity": 45,
				"weather": [
					{
						"id": 803,
						"main": "Clouds",
						"description": "broken clouds",
						"icon": "04d"
					}
				],
				"speed": 10,
				"deg": 100,
				"clouds": 72
			},
			{
				"dt": 1585936800,
				"sunrise": 1585914386,
				"sunset": 1585959599,
				"temp": {
					"day": 78.55,
					"min": 63.54,
					"max": 80.28,
					"night": 69.21,
					"eve": 73.13,
					"morn": 63.54
				},
				"feels_like": {
					"day": 74.03,
					"night": 67.51,
					"eve": 69.3,
					"morn": 60.94
				},
				"pressure": 1017,
				"humidity": 36,
				"weather": [
					{
						"id": 803,
						"main": "Clouds",
						"description": "broken clouds",
						"icon": "04d"
					}
				],
				"speed": 7.85,
				"deg": 122,
				"clouds": 67
			},
			{
				"dt": 1586023200,
				"sunrise": 1586000715,
				"sunset": 1586046035,
				"temp": {
					"day": 73.24,
					"min": 65.5,
					"max": 73.69,
					"night": 66.99,
					"eve": 65.5,
					"morn": 68.34
				},
				"feels_like": {
					"day": 71.2,
					"night": 66.92,
					"eve": 62.26,
					"morn": 68.85
				},
				"pressure": 1017,
				"humidity": 63,
				"weather": [
					{
						"id": 501,
						"main": "Rain",
						"description": "moderate rain",
						"icon": "10d"
					}
				],
				"speed": 9.33,
				"deg": 73,
				"clouds": 100,
				"rain": 3.48
			}
		]
}

export default testData;