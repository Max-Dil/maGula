# Maula Game Engine

Maula Game Engine - это легковесный игровой движок, написанный на языке программирования Maula, который находится в стадии бета-тестирования. Движок предоставляет базовые возможности для создания 2D-игр с поддержкой графики, звука и управления ресурсами.

## Установка

1. Убедитесь, что у вас установлен интерпретатор языка Maula (версия бета от марта 2025 или новее).
2. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/username/maula-game-engine.git
   ```
3. Поместите файлы движка в ваш проект.

## Структура проекта
1. init.maula - точка входа движка, инициализация основных модулей
2. graphics.maula - модуль для работы с 2D-графикой
3. resources.maula - модуль для загрузки ресурсов (изображения, аудио)
4. audio.maula - модуль для работы со звуком
5. audio.js - вспомогательный JavaScript-файл для работы с Web Audio API
6. image.js - вспомогательный JavaScript-файл для загрузки изображений

## Основные возможности

Core
Модуль core управляет игровым циклом:
1. core.run(updateFps, drawFps) - запускает игровой цикл с заданной частотой обновления логики и рисования
2. core.update(dt) - функция обновления логики (нужно определить вручную)
3. core.draw() - функция отрисовки (нужно определить вручную)

Graphics
Модуль graphics предоставляет функции для 2D-рисования:
1. graphics.clear() - очищает канвас
2. graphics.color(color) - задает цвет заливки
3. graphics.rect(x, y, width, height) - рисует прямоугольник
4. graphics.circle(x, y, radius, fill) - рисует круг (с заливкой или без)
5. graphics.line(x1, y1, x2, y2) - рисует линию
6. graphics.lineWidth(width) - задает толщину линии
7. graphics.strokeColor(color) - задает цвет обводки
8. graphics.font(fontString) - задает шрифт для текста
9. graphics.text(text, x, y) - рисует текст
10. graphics.drawImage(image, x, y, width, height) - рисует изображение
11. graphics.rotate(angle) - поворачивает канвас
12. graphics.translate(x, y) - смещает канвас
13. graphics.save() - сохраняет состояние контекста
14. graphics.restore() - восстанавливает состояние контекста

Resources
Модуль resources отвечает за загрузку ресурсов:
1. resources.loadImage(path) - загружает изображение (возвращает Promise)
2. resources.loadAudio(url) - загружает аудиофайл (возвращает Promise)

Audio
Модуль audio управляет звуком:
1. audio.playSound(buffer) - воспроизводит загруженный аудиобуфер