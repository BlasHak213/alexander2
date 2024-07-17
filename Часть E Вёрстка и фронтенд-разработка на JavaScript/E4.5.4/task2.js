<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2024 by anonymous (http://jsbin.com/letopiqipi/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">

<script id="jsbin-javascript">
const hasProperty = (propertyName, obj) => {
    return obj.hasOwnProperty(propertyName);
};

// Пример использования
const exampleObject = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
};

console.log(hasProperty('name', exampleObject)); // true
console.log(hasProperty('country', exampleObject)); // false
</script>