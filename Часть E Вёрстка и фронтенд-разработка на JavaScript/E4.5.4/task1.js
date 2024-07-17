<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2024 by anonymous (http://jsbin.com/letopiqipi/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">

<script id="jsbin-javascript">
const printOwnProperties = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
};

// Пример использования
const exampleObject = {
    ownProp1: 'value1',
    ownProp2: 'value2'
};

Object.prototype.inheritedProp = 'inheritedValue';

printOwnProperties(exampleObject);
// Вывод:
// ownProp1: value1
// ownProp2: value2
</script>