# Not official Node.js client for anilibria api.

## Установка

Установка используя yarn:

```
yarn add anilibria-api-wrapper
```

Установка используя npm:

```
npm i anilibria-api-wrapper
```

## Пример

### Импорт

#### CommonJS

```ts
const { getAnilibriaTitle, Series } = require('anilibria-api-wrapper');
```

#### ES6

```ts
import { Anilibria, Title } from 'anilibria-api-wrapper';
```

### Использование

#### Инициализация клиента

```ts
const anilibriaApi = new Anilibria();
```
Или вы можете использовать сразу нужные вам функции сразу их импортируя (Такой способ использования менее гибкий в настройке)

#### Получение тайтла (аниме)

```js
anilibriaApi.getTitle().then(response => {
	console.log(response.data)
})
```

#### Получение рандомного тайтла
```js
await anilibriaApi.getRandomTitle() // Random Title
// or
await getAnilibriaRandomTitle()
````

#### Поиск

```js
anilibriaApi.searchTitles({
  search: 'Клинок'
}).then(async response => {
	console.log(response.data) // Результат поиска
});
```

Под капотом используется axios и если вы хотите изменить настройки, то нужно дать соответствующие настройки конструктуру Anilibria
```js
const anilibriaApi = new Anilibria({
  axiosOptions: {
		//...your axiosOptions
  }
})
```
