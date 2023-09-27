import { Collection } from "tinacms"

export const post: Collection = {
        name: "post",
        label: "Posts",
        path: "content/post",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
        ],
}