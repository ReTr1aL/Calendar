import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";

const ExternalLinks = () => {
  const data = useSelector((store) => store.company.linksList.externalLink);
  const columns = [
    {
      title: "Author",
      dataIndex: "author",
      filters: [
        {
          text: "Joh",
          value: "Joh",
        },
        {
          text: "Sandra",
          value: "Sandra",
        },
      ],
      onFilter: (value, record) => record.author.indexOf(value) === 0,
      sorter: (a, b) => a.author.length - b.author.length,
    },
    {
      title: "Post",
      dataIndex: "post",
      filters: [
        {
          text: "www.google.com",
          value: "www.google.com",
        },
        {
          text: "www.amazon.com",
          value: "www.amazon.com",
        },
      ],
      onFilter: (value, record) => record.post.includes(value),
    },
    {
      title: "Priority",
      dataIndex: "priority",
      filters: [
        {
          text: "High",
          value: "High",
        },
        {
          text: "Medium",
          value: "Medium",
        },
        {
          text: "Low",
          value: "Low",
        },
      ],
      onFilter: (value, record) => record.priority.indexOf(value) === 0,
      sorter: (a, b) => {
        const priorityOrder = { High: 3, Medium: 2, Low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      },
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};

export default ExternalLinks;
