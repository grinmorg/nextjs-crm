export const POST_DEFAULT_CONTENT = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 1 },
      content: [{ type: "text", text: "Заголовок h1" }],
    },
    {
      type: "taskList",
      content: [
        {
          type: "taskItem",
          attrs: { checked: true },
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: "Первый пункт" }],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: { checked: false },
          content: [
            {
              type: "paragraph",
              content: [
                { type: "text", text: "Второй пункт с " },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://www.npmjs.com/package/novel",
                        target: "_blank",
                        class:
                          "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
                      },
                    },
                  ],
                  text: "ссылкой",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: { checked: false },
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Третий пункт",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const EMAIL_DEFAULT_CONTENT = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Ваше сообщение" }],
    },
  ],
};

export const EVENT_DEFAULT_CONTENT = { "type": "doc", "content": [{ "type": "paragraph", "content": [{ "type": "text", "text": "Старт:" }] }, { "type": "paragraph", "content": [{ "type": "text", "marks": [{ "type": "textStyle", "attrs": { "color": "rgb(107 114 128 / var(--tw-text-opacity))" } }], "text": "15.12.2023 14:00" }] }, { "type": "paragraph", "content": [{ "type": "text", "text": "Завершение:" }] }, { "type": "paragraph", "content": [{ "type": "text", "marks": [{ "type": "textStyle", "attrs": { "color": "rgb(107 114 128 / var(--tw-text-opacity))" } }], "text": "17.12.2023 22:00" }] }, { "type": "paragraph", "content": [{ "type": "text", "text": "Описание:" }] }] };


