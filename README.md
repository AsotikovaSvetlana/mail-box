# :envelope: Mail Box

<h3 align="center"><a href="https://mail-box.vercel.app" target="_blank">Demo</a></h3>

Почтовый клиент (readonly), который позволяет: просматривать письма, сгруппированные по папкам, удалять и перемещать письма между папками, добавлять/удалять/редактировать пользовательские папки.

---
## How it works

<img style="border-radius: 5px" src="./screens/main.gif">

## :hammer_and_wrench: Технологии

React, Redux, Redux Toolkit, Redux Thunk, React Router, HTML, SCSS

---

## :heavy_check_mark: Функционал
- Отображение списка писем с сортировкой по папкам.
- CRUD для папок: создание, просмотр, редактирование и удаление кастомных папок.
- Просмотр полного текста письма.
- Поиск по всем письмам.
- Удаление/перемещение письма в другую папку.
- Тег прочитано/не прочитано, автоматическая прочитанность после открытия письма.
- Выбор темы, сохранение темы в localStorage.
- Серверная часть, [тут](https://github.com/AsotikovaSvetlana/mail-box-backend).


---
## Быстрый старт
- Клонируйте репозиторий: `git clone https://github.com/AsotikovaSvetlana/mail-box.git`
- Перейдите в папку с проектом: `cd mail-box`
- Установите зависимости: `npm install`
- Запустите проект: `npm start`