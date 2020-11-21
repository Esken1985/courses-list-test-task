const express = require("express");
const app = express();

app.get("/getData", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Fundamentals of Credit",
      imageUrl: "https://picsum.photos/100/100",
      status: "DRAFT",
      instructors: [
        {
          name: "Roli Jain",
          image: "https://picsum.photos/300/300",
        },
        {
          name: "Sebastian Taylor",
          image: "https://picsum.photos/300/300",
        },
      ],
    },
    {
      id: 2,
      name: "Financial Management",
      imageUrl: "https://picsum.photos/100/100",
      status: "PUBLISHED",
      instructors: [
        {
          name: "Sarah Connor",
          image: "https://picsum.photos/300/300",
        },
        {
          name: "John Connor",
          image: "https://picsum.photos/300/300",
        },
      ],
    },
    {
      id: 3,
      name: "Forensic Accounting and Fraud Examination",
      imageUrl: "https://picsum.photos/100/100",
      status: "DRAFT",
      instructors: [
        {
          name: "Kyle Reese",
          image: "https://picsum.photos/300/300",
        },
        {
          name: "John Connor",
          image: "https://picsum.photos/300/300",
        },
      ],
    },
    {
      id: 4,
      name: "Think like a CFO",
      imageUrl: "https://picsum.photos/100/100",
      status: "DRAFT",
      instructors: [
        {
          name: "Sebastian Taylor",
          image: "https://picsum.photos/300/300",
        }
      ],
    },
    {
      id: 5,
      name: "Formal Financial Accounting",
      imageUrl: "https://picsum.photos/100/100",
      status: "PUBLISHED",
      instructors: [
        {
          name: "Will Smith",
          image: "https://picsum.photos/300/300",
        }
      ],
    },
    {
      id: 6,
      name: "Business Foundations",
      imageUrl: "https://picsum.photos/100/100",
      status: "PUBLISHED",
      instructors: [
        {
          name: "John Snow",
          image: "https://picsum.photos/300/300",
        },
        {
          name: "Eddard Stark",
          image: "https://picsum.photos/300/300",
        },
      ],
    },
    {
      id: 7,
      name: "Accounting and Finance For IT Specialists",
      imageUrl: "https://picsum.photos/100/100",
      status: "DRAFT",
      instructors: [
        {
          name: "Stanley Jobson",
          image: "https://picsum.photos/300/300",
        },
        {
          name: "Kevin David Mitnik",
          image: "https://picsum.photos/300/300",
        },
      ],
    },
    {
      id: 8,
      name: "Business Analytics",
      status: "PUBLISHED",
      imageUrl: "https://picsum.photos/100/100",
      instructors: [
        {
          name: "Lisbet Salander",
          image: "https://picsum.photos/300/300",
        },
      ],
    },
  ]);
});

app.listen(3000, (req, res) => {
  console.log("Express is running port 3000");
});
