# node-edbo-rest-client

Кліент EDBO на node.js

# Встановлення

Розпаковуємо, в папці виконуємо `npm install`. У файлі `login.js` обов'язково замінити api key!

# Логін

Логін відбувається командою `node login.js -l prizvysche.imya -p parol`. В логіні додавати @edbo.gov.ua не потрібно.

# Запит

Запит треба виконувати командою `node index.js -d {jsondata} -u http://edbo.gov.ua/data...`

# Відповідь

Відповідь збергіається у файлах ` /data/data.json`
