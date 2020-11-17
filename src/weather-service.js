export class WeatherService {
  static getWeather(city) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

//pseudo code

class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  static sortColor(color) {  
    return this.color;
  }
}

let cars = [
  new Car("civic", "red"),
  new Car("acord", "blue"),
  new Car("mustang", "white"),
  new Car("avalong", "red"),
  new Car("bronco", "gold"),
];


car1 = new Car("civic", "red");
car2 = new Car("acord", "blue");
car3 = new Car("mustang", "white");
car4 = new Car("avalong", "red");
car5 = new Car("bronco", "gold");
