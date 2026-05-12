# Portfolio Website

Портфолио графического дизайнера на `Astro` с отдельными страницами кейсов и автодеплоем на
GitHub Pages.

## Стек

- Astro + TypeScript
- Контент кейсов через `src/content/projects/*.md`
- GitHub Actions для публикации `dist` на GitHub Pages

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Добавление нового кейса

1. Создайте новый markdown-файл в `src/content/projects/`.
2. Заполните frontmatter по схеме из `src/content/config.ts`.
3. Кейс автоматически появится на главной и на странице `/projects`.

## Деплой

Workflow находится в `.github/workflows/deploy.yml`.
После пуша в `main` GitHub Pages публикует содержимое `dist`.
