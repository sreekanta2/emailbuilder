export const componentData = [
  {
    id: "OneProduct",
    componentInfo: {
      name: "One Product",
      attributes: {
        height: 320,
        style: {
          width: "100%",
          borderRadius: 12,
          objectFit: "cover",
        },
      },
    },
    subcomponents: [
      {
        pk: "OneProduct_sub_component_1",
        sk: "OneProduct_sub_component_1",
        mainComponentId: "OneProduct",
        componentInfo: {
          for: "oneProduct.section1.img",
          label: "Product Image",
          type: "image",
          src: "https://react.email/static/braun-collection.jpg",
          alt: "Braun Collection",
          attributes: {
            height: 320,
            style: {
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            },
          },
        },
      },
      {
        pk: "OneProduct_sub_component_2",
        sk: "OneProduct_sub_component_2",
        mainComponentId: "OneProduct",
        componentInfo: {
          for: "oneProduct.section2.text1",
          label: "Sub Title",
          type: "text",
          value: "Classic Watches",
          attributes: {
            style: {
              marginTop: "16px",
              fontSize: "16px",
              lineHeight: "28px",
              fontWeight: 600,
              color: "rgb(79,70,229)",
            },
          },
        },
      },
      {
        pk: "OneProduct_sub_component_3",
        sk: "OneProduct_sub_component_3",
        mainComponentId: "OneProduct",
        componentInfo: {
          for: "oneProduct.section2.heading1",
          label: "Product Title",
          type: "heading",
          as: "h1",
          attributes: {
            style: {
              fontSize: "36px",
              lineHeight: "40px",
              fontWeight: 600,
              letterSpacing: 0.4,
              color: "rgb(17,24,39)",
            },
          },
          value: "Elegant Comfort",
        },
      },
      {
        pk: "OneProduct_sub_component_4",
        sk: "OneProduct_sub_component_4",
        mainComponentId: "OneProduct",
        componentInfo: {
          for: "oneProduct.section2.text2",
          label: "Product Description",
          type: "text",
          attributes: {
            style: {
              marginTop: "10px",
              fontSize: "16px",
              lineHeight: "24px",
              color: "rgb(107,114,128)",
            },
          },
          value:
            "Dieter Rams' work has an outstanding quality which distinguishes it from the vast majority of industrial design of the entire 20th Century.",
        },
      },
      {
        pk: "OneProduct_sub_component_5",
        sk: "OneProduct_sub_component_5",
        mainComponentId: "OneProduct",
        componentInfo: {
          for: "oneProduct.section2.text3",
          label: "Product Price",
          type: "text",
          attributes: {
            style: {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 600,
              color: "rgb(17,24,39)",
            },
          },
          value: "$210.00",
        },
      },
      {
        pk: "OneProduct_sub_component_6",
        sk: "OneProduct_sub_component_6",
        mainComponentId: "OneProduct",
        componentInfo: {
          for: "oneProduct.section2.button1",
          label: "Buy Button",
          type: "button",
          href: "https://react.email",
          attributes: {
            style: {
              marginTop: "16px",
              borderRadius: 8,
              backgroundColor: "rgb(79,70,229)",
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 12,
              paddingBottom: 12,
              fontWeight: 600,
              color: "rgb(255,255,255)",
            },
          },
          value: "Buy Now",
        },
      },
    ],
  },
  {
    id: "TwoProduct",
    componentInfo: {
      name: "Two Product",
      attributes: {
        height: 320,
        style: {
          width: "100%",
          borderRadius: 12,
          objectFit: "cover",
        },
      },
    },
    subcomponents: [
      {
        pk: "TwoProduct_sub_component_1",
        sk: "TwoProduct_sub_component_1",
        mainComponentId: "TwoProduct",
        componentInfo: {
          for: "twoProduct.section1.img",
          label: "Product Image",
          type: "image",
          src: "https://react.email/static/braun-collection.jpg",
          alt: "Braun Collection",
          attributes: {
            height: 320,
            style: {
              width: "100%",
              borderRadius: 12,
              objectFit: "cover",
            },
          },
        },
      },
      {
        pk: "TwoProduct_sub_component_2",
        sk: "TwoProduct_sub_component_2",
        mainComponentId: "TwoProduct",
        componentInfo: {
          for: "twoProduct.section2.text1",
          label: "Sub Title",
          type: "text",
          value: "Classic Watches",
          attributes: {
            style: {
              marginTop: "16px",
              fontSize: "18px",
              lineHeight: "28px",
              fontWeight: 600,
              color: "rgb(79,70,229)",
            },
          },
        },
      },
      {
        pk: "TwoProduct_sub_component_3",
        sk: "TwoProduct_sub_component_3",
        mainComponentId: "TwoProduct",
        componentInfo: {
          for: "twoProduct.section2.heading1",
          label: "Product Title",
          type: "heading",
          as: "h1",
          attributes: {
            style: {
              fontSize: "36px",
              lineHeight: "40px",
              fontWeight: 600,
              letterSpacing: 0.4,
              color: "rgb(17,24,39)",
            },
          },
          value: "Elegant Comfort",
        },
      },
      {
        pk: "TwoProduct_sub_component_4",
        sk: "TwoProduct_sub_component_4",
        mainComponentId: "TwoProduct",
        componentInfo: {
          for: "twoProduct.section2.text2",
          label: "Product Description",
          type: "text",
          attributes: {
            style: {
              marginTop: "10px",
              fontSize: "16px",
              lineHeight: "24px",
              color: "rgb(107,114,128)",
            },
          },
          value:
            "Dieter Rams' work has an outstanding quality which distinguishes it from the vast majority of industrial design of the entire 20th Century.",
        },
      },
      {
        pk: "TwoProduct_sub_component_5",
        sk: "TwoProduct_sub_component_5",
        mainComponentId: "TwoProduct",
        componentInfo: {
          for: "twoProduct.section2.text3",
          label: "Product Price",
          type: "text",
          attributes: {
            style: {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 600,
              color: "rgb(17,24,39)",
            },
          },
          value: "$210.00",
        },
      },
      {
        pk: "TwoProduct_sub_component_6",
        sk: "TwoProduct_sub_component_6",
        mainComponentId: "TwoProduct",
        componentInfo: {
          for: "twoProduct.section2.button1",
          label: "Buy Button",
          type: "button",
          href: "https://react.email",
          attributes: {
            style: {
              marginTop: "16px",
              borderRadius: 8,
              backgroundColor: "rgb(79,70,229)",
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 12,
              paddingBottom: 12,
              fontWeight: 600,
              color: "rgb(255,255,255)",
            },
          },
          value: "Buy Now",
        },
      },
    ],
  },
];
