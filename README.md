# node-edbo-rest-client

Кліент EDBO на node.js

# Встановлення

Розпаковуємо, в папці виконуємо `npm install`. У файлі `altlogin.js` обов'язково замінити api key! Створіть папку `data`.

# Логін

Логін відбувається командою `node altlogin.js -l prizvysche.imya -p parol`. В логіні додавати @edbo.gov.ua не потрібно.

# Запит

Запит треба виконувати командою `node index.js -d {jsondata} -u http://edbo.gov.ua/data...`

# Відповідь

Відповідь збергіається у файлах ` /data/data.json`
