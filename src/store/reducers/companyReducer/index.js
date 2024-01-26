import * as companyActions from "../../actions/companyActions/constants";

const initialState = {
  company: [
    {
      id: 1,
      company: `Tesla`,
      phone: 32988473984,
      address: `London, Park Lane no.`,
    },
  ],
  linksList: {
    externalLink: [
      {
        id: 1,
        key: 1,
        author: `Joh Smitt`,
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. www.google.com",
        priority: "High",
      },
      {
        id: 1,
        key: 2,
        author: `Sandra Bullock`,
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. www.amazon.com",
        priority: "Low",
      },
      {
        id: 1,
        key: 3,
        author: `Joh Smitt`,
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. www.google.com",
        priority: "High",
      },
      {
        id: 1,
        key: 4,
        author: `Sandra Bullock`,
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. www.amazon.com",
        priority: "Medium",
      },
      {
        id: 1,
        key: 5,
        author: `Joh Smitt`,
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. www.google.com",
        priority: "High",
      },
    ],
    internalLink: [
      {
        id: 1,
        key: 1,
        author: `Joh Smitt`,
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. '/'",
        priority: "High",
      },
      {
        id: 1,
        key: 2,
        author: `Sandra Bullock`,
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. '/company'",
        priority: "Low",
      },
      {
        id: 1,
        key: 3,
        author: `Joh Smitt`,
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. '/edit'",
        priority: "High",
      },
      {
        id: 1,
        key: 4,
        author: `Sandra Bullock`,
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. '/'",
        priority: "Medium",
      },
      {
        id: 1,
        key: 5,
        author: `Joh Smitt`,
        post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. '/company'",
        priority: "High",
      },
    ],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case companyActions.GET_COMPANY:
      return {
        ...state,
        company: action.payload,
      };
    case companyActions.ADD_COMPANY:
      return {
        ...state,
        company: [
          ...state.company,
          { ...action.payload, id: state.company.length + 1 },
        ],
      };
    case companyActions.DELETE_COMPANY:
      return {
        ...state,
        company: [...state.company]
          .filter((item) => item.id !== action.payload)
          .map((elem, index) => ({ ...elem, id: index + 1 })),
      };
    case companyActions.EDIT_COMPANY:
      console.log(action.payload);
      return {
        ...state,
        company: [...state.company].map((item) => {
          if (item.id !== action.payload.id) {
            return item;
          } else {
            return action.payload;
          }
        }),
      };
    default:
      return state;
  }
};
