<!--
Created using JS Bin
http://jsbin.com

    Copyright (c) 2024 by anonymous (http://jsbin.com/letopiqipi/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
    -->
    <meta name="robots" content="noindex">

    <script id="jsbin-javascript">
    // Родительская функция-конструктор для электроприборов
    function ElectricalAppliance(name, power) {
      this.name = name;
      this.power = power;
      this.isPlugged = false;
    }

// Метод для включения прибора в розетку
ElectricalAppliance.prototype.plugIn = function() {
  console.log(`${this.name} is now plugged in.`);
  this.isPlugged = true;
};

// Метод для выключения прибора из розетки
ElectricalAppliance.prototype.unplug = function() {
  console.log(`${this.name} is now unplugged.`);
  this.isPlugged = false;
};

// Конструктор для настольной лампы
function DeskLamp(name, power, brightness) {
  ElectricalAppliance.call(this, name, power);
  this.brightness = brightness;
}

// Делегирующая связь [[Prototype]]
DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

// Метод для регулирования яркости настольной лампы
DeskLamp.prototype.adjustBrightness = function(level) {
  this.brightness = level;
  console.log(`${this.name} brightness is set to ${this.brightness}.`);
};

// Конструктор для компьютера
function Computer(name, power, brand) {
  ElectricalAppliance.call(this, name, power);
  this.brand = brand;
}

// Делегирующая связь [[Prototype]]
Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

// Метод для отображения бренда компьютера
Computer.prototype.showBrand = function() {
  console.log(`${this.name} is made by ${this.brand}.`);
};

// Создание экземпляров каждого прибора
const lamp = new DeskLamp('Desk Lamp', 15, 'medium');
const computer = new Computer('Computer', 300, 'Dell');

// Включение приборов в розетку
lamp.plugIn();
computer.plugIn();

// Регулирование яркости лампы
lamp.adjustBrightness('high');

// Отображение бренда компьютера
computer.showBrand();

// Функция для расчета общей потребляемой мощности
function calculateTotalPower(...appliances) {
  return appliances.reduce((total, appliance) => {
    return total + (appliance.isPlugged ? appliance.power : 0);
  }, 0);
}

// Расчет и вывод потребляемой мощности
const totalPower = calculateTotalPower(lamp, computer);
console.log(`Total power consumption is ${totalPower} watts.`);

</script>