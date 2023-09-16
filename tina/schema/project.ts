import { Collection } from "tinacms"

export const project: Collection = {
        name: "project",
        label: "Project",
        path: "content/project",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "items",
            label: "Items",
            list: true,
            ui: {
              itemProps: (item) => {
                return {label: item?.title};
              },
            },            
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "image",
                name: "file",
                label: "File",
              }
            ],
          }
        ],
}