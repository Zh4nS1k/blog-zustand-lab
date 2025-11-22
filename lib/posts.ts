export type Post = {
  id: number;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  previewText: string;
  fullText: string;
  image: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Пересел на App Router и понял, что жил в матрице",
    author: {
      name: "Данияр К.",
      avatar: "https://i.pravatar.cc/1000?img=12",
    },
    date: "2025-11-20",
    previewText:
      "Ребят, я три года ковырял pages directory, а теперь открыл app и чувствую себя идиотом. Как я вообще раньше без loading.tsx и layout.tsx жил...",
    fullText:
      "Всё просто лежит по папкам, параллельные роуты — это теперь просто две папки рядом, стримить данные — пара строк. Единственный минус: пока ловишь себя на том, что пытаешься засунуть useEffect в Server Component и сидишь потом 15 минут в ступоре. Но это уже мои кривые руки. Короче, если ещё не пробовали — бросайте всё и идите в app directory прямо сейчас.",
    image: "https://picsum.photos/seed/appr1/1000/500",
  },
  {
    id: 2,
    title: "Zustand против Redux Toolkit в 2025 году — бойня закончилась",
    author: {
      name: "Темирлан",
      avatar: "https://i.pravatar.cc/1000?img=38",
    },
    date: "2025-11-18",
    previewText:
      "Пишу четвёртый проект подряд на Zustand и официально объявляю: Redux умер, просто ещё не все это заметили...",
    fullText:
      "10 строк — и у тебя полноценный стор с devtools, persist, middleware и идеальными типами. Никаких createSlice, configureStore и прочего шаманства. А если ещё immer подключить — вообще сказка. Последний раз Redux трогал полгода назад на легаси-проекте и чуть не заплакал от боли. Zustand — это то, каким Redux должен был быть с самого начала.",
    image: "https://picsum.photos/seed/zusvsredux/600/300",
  },
  {
    id: 3,
    title: "Next.js 15 + Turbopack = билд за 8 секунд вместо 2 минут",
    author: {
      name: "Ербол",
      avatar: "https://i.pravatar.cc/1000?img=55",
    },
    date: "2025-11-21",
    previewText:
      "Обновился на Next 15 с Turbopack в dev режиме и чуть не упал со стула. То, что раньше собиралось 2+ минуты, теперь стартует за 8 секунд...",
    fullText:
      "На проекте 1200+ компонентов, куча md-мдх файлов, Tailwind, всё как у людей. На webpack dev сервер стартовал 2–2.5 минуты. Переключил одну галку — turbo: true — и теперь 7–9 секунд. Холодный старт, без кэша. Это не улучшение, это телепортация. Единственное, иногда падает с странными ошибками, но ребята из Vercel фиксят за часы. Короче, 2025 год, а я только сейчас начал жить.",
    image: "https://picsum.photos/seed/turbopack/600/300",
  },
  {
    id: 4,
    title: "tRPC в 2025 году — это просто нечестно",
    author: {
      name: "Рустем А.",
      avatar: "https://i.pravatar.cc/1000?img=17",
    },
    date: "2025-11-17",
    previewText:
      "Забыл, как выглядит fetch. Пишу процедуры на сервере, вызываю их на клиенте как обычные функции. Типы везде, инвалейты автоматом...",
    fullText:
      "Серьёзно, больше не надо:\n- OpenAPI\n- генерацию клиентов\n- ручные invalidations в TanStack Query\n- дебаг 404 потому что забыл / в конце\n\nПросто пишешь router, процедура — и всё. На клиенте автокомплит и типы из коробки. В Server Components вообще можно вызвать серверную процедуру напрямую без http. Это уже даже не fullstack, это какой-то сверхразум.",
    image: "https://picsum.photos/seed/trpc2025/600/300",
  },
  {
    id: 5,
    title: "Нашёл способ делать mutate прямо из Server Components",
    author: {
      name: "Санжар",
      avatar: "https://i.pravatar.cc/1000?img=61",
    },
    date: "2025-11-19",
    previewText:
      "Оказывается, можно вызывать server actions из TanStack Query mutate и не городить клиентский API слой вообще...",
    fullText:
      "Делаешь так:\nconst { mutate } = useMutation({\n  mutationFn: updateUserAction, // это server action!\n  onSuccess: () => queryClient.invalidateQueries(...)\n})\n\nНикаких route handlers, никаких лишних эндпоинтов. Данные летят прямо из формы или кнопки на сервер, валидируются там же, и всё. Плюс полная типизация через tRPC или zod. Я теперь вообще не понимаю, зачем существуют REST API в 2025 году.",
    image: "https://picsum.photos/seed/servermutate/600/300",
  },
  {
    id: 6,
    title: "Next.js 15 ругается на useState в серверных компонентах на этапе билда",
    author: {
      name: "Алмат Б.",
      avatar: "https://i.pravatar.cc/1000?img=14",
    },
    date: "2025-11-16",
    previewText:
      "Обновился на продакшене ночью, билд упал с ошибкой 'useState is not allowed in Server Components'. Раньше хоть в рантайме падало...",
    fullText:
      "Теперь Next 15 прямо на сборке валится, если видит хуки в серверном компоненте. Пришлось в 3 часа ночи писать скрипт, который ищет useState/useEffect и автоматически добавляет 'use client'. 400+ файлов, 40 минут боли. Зато теперь чисто. Кто тоже попал — пишите, скину скрипт, реально спасает.",
    image: "https://picsum.photos/seed/next15error/600/300",
  },
];