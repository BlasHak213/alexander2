<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2024 by anonymous (http://jsbin.com/letopiqipi/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">

<script id="jsbin-javascript">
const createEmptyObject = () => Object.create(null);

// Пример использования
const emptyObject = createEmptyObject();
console.log(emptyObject); // {}
console.log(Object.getPrototypeOf(emptyObject)); // null
console.log(emptyObject.toString); // undefined
</script>