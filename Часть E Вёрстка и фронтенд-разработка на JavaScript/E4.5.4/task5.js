<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2024 by anonymous (http://jsbin.com/letopiqipi/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">

<script id="jsbin-javascript">
    // Родительский класс для электроприборов
    class ElectricalAppliance {
        constructor(name, power) {
            this.name = name;
            this.power = power;
            this.isPlugged = false;
        }

        plugIn() {
            console.log(`${this.name} is now plugged in.`);
            this.isPlugged = true;
        }

        unplug() {
            console.log(`${this.name} is now unplugged.`);
            this.isPlugged = false;
        }
    }

// Класс для настольной лампы
class DeskLamp extends ElectricalAppliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    adjustBrightness(level) {
        this.brightness = level;
        console.log(`${this.name} brightness is set to ${this.brightness}.`);
    }
}

// Класс для компьютера
class Computer extends ElectricalAppliance {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }

    showBrand() {
        console.log(`${this.name} is made by ${this.brand}.`);
    }
}

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