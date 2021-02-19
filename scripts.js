const Car = function(model, indexA ) {
    this.model = model;
    this.indexA = indexA;
    this.inMove = false;
    this.speed = 0;

    this.start = function() {
        this.inMove = true;
        this.speed = 10 * this.indexA;
        console.log(`Начальная скорость ${this.model} = ${this.speed} км/ч`);
    }

    this.finish = function() {
        this.inMove = false;
        this.speed = 0;
        console.log(`${this.model} больше не в движении, скорость = ${this.speed} км/ч`);
    }

    this.road = function() {
        const turn = prompt('Сколько времени заняла ваша поездка?')
        if (turn) {
            return turn*this.speed;
            //запуталась как вывести пройденный путь, если известна начальная скорость и пользователь вводит время?
        }
    }
}


const tesla = new Car('Tesla', 4)
const suzuki = new Car('Suzuki', 3)

tesla.start()
tesla.road()
//tesla.finish()