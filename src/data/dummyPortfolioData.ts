import { DetailPortfolioType } from "../types/api-types/PortfolioType";

export const dummyPortfolioData: DetailPortfolioType[] = [
  {
    _id: "portfolio_1",
    title: "포트폴리오 제목 1",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image1-1.jpg", "image1-2.jpg", "image1-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "JavaScript", "React", "UI/UX"],
    techStack: [
      {
        skill: "JavaScript",
        bgColor: "#F7DF1E",
        textColor: "#000000",
        jobCode: "Frontend Developer",
      },
      {
        skill: "React",
        bgColor: "#61DAFB",
        textColor: "#282C34",
        jobCode: "Frontend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_1",
      name: "사용자 1",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-1",
      job: "Frontend Developer",
    },
    view: 150,
    createdAt: "2023-11-01T10:00:00.000Z",
    likeCount: 30,
  },
  {
    _id: "portfolio_2",
    title: "포트폴리오 제목 2",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image2-1.jpg", "image2-2.jpg", "image2-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "TypeScript", "React", "UI/UX"],
    techStack: [
      {
        skill: "TypeScript",
        bgColor: "#007ACC",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "Node.js",
        bgColor: "#8CC84B",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_2",
      name: "사용자 2",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-2",
      job: "Fullstack Developer",
    },
    view: 200,
    createdAt: "2023-11-02T11:00:00.000Z",
    likeCount: 45,
  },
  {
    _id: "portfolio_3",
    title: "포트폴리오 제목 3",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image3-1.jpg", "image3-2.jpg", "image3-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Angular", "UI/UX"],
    techStack: [
      {
        skill: "Angular",
        bgColor: "#dd0031",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "Django",
        bgColor: "#092e20",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_3",
      name: "사용자 3",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-3",
      job: "Fullstack Developer",
    },
    view: 350,
    createdAt: "2023-11-03T12:30:00.000Z",
    likeCount: 60,
  },
  {
    _id: "portfolio_4",
    title: "포트폴리오 제목 4",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image4-1.jpg", "image4-2.jpg", "image4-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Vue.js", "UI/UX"],
    techStack: [
      {
        skill: "Vue.js",
        bgColor: "#42b883",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "Flask",
        bgColor: "#000000",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_4",
      name: "사용자 4",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-4",
      job: "Fullstack Developer",
    },
    view: 450,
    createdAt: "2023-11-04T09:15:00.000Z",
    likeCount: 75,
  },
  {
    _id: "portfolio_5",
    title: "포트폴리오 제목 5",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image5-1.jpg", "image5-2.jpg", "image5-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Bootstrap", "UI/UX"],
    techStack: [
      {
        skill: "Bootstrap",
        bgColor: "#563d7c",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "Spring",
        bgColor: "#6db33f",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_5",
      name: "사용자 5",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-4",
      job: "Fullstack Developer",
    },
    view: 450,
    createdAt: "2023-11-04T09:15:00.000Z",
    likeCount: 75,
  },
  {
    _id: "portfolio_6",
    title: "포트폴리오 제목 6",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image6-1.jpg", "image6-2.jpg", "image6-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Tailwind CSS", "UI/UX"],
    techStack: [
      {
        skill: "Tailwind CSS",
        bgColor: "#06b6d4",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "Ruby on Rails",
        bgColor: "#e45d27",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_6",
      name: "사용자 6",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-6",
      job: "Fullstack Developer",
    },
    view: 600,
    createdAt: "2023-11-05T14:00:00.000Z",
    likeCount: 90,
  },
  {
    _id: "portfolio_7",
    title: "포트폴리오 제목 7",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image7-1.jpg", "image7-2.jpg", "image7-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Sass", "UI/UX"],
    techStack: [
      {
        skill: "Sass",
        bgColor: "#cc6699",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "GraphQL",
        bgColor: "#e10098",
        textColor: "#ffffff",
        jobCode: "API",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_7",
      name: "사용자 7",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-7",
      job: "Fullstack Developer",
    },
    view: 730,
    createdAt: "2023-11-06T15:30:00.000Z",
    likeCount: 110,
  },
  {
    _id: "portfolio_8",
    title: "포트폴리오 제목 8",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image8-1.jpg", "image8-2.jpg", "image8-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "jQuery", "UI/UX"],
    techStack: [
      {
        skill: "jQuery",
        bgColor: "#0868ac",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "Firebase",
        bgColor: "#ffca28",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_8",
      name: "사용자 8",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-8",
      job: "Fullstack Developer",
    },
    view: 800,
    createdAt: "2023-11-07T16:45:00.000Z",
    likeCount: 130,
  },
  {
    _id: "portfolio_9",
    title: "포트폴리오 제목 9",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image9-1.jpg", "image9-2.jpg", "image9-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "HTML", "UI/UX"],
    techStack: [
      {
        skill: "HTML",
        bgColor: "#e34f26",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "PostgreSQL",
        bgColor: "#336791",
        textColor: "#ffffff",
        jobCode: "Database",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_9",
      name: "사용자 9",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-9",
      job: "Fullstack Developer",
    },
    view: 900,
    createdAt: "2023-11-08T17:10:00.000Z",
    likeCount: 150,
  },
  {
    _id: "portfolio_10",
    title: "포트폴리오 제목 10",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image10-1.jpg", "image10-2.jpg", "image10-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "CSS", "UI/UX"],
    techStack: [
      {
        skill: "CSS",
        bgColor: "#1572B6",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "MongoDB",
        bgColor: "#47A248",
        textColor: "#ffffff",
        jobCode: "Database",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_10",
      name: "사용자 10",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-10",
      job: "Fullstack Developer",
    },
    view: 1000,
    createdAt: "2023-11-08T17:10:00.000Z",
    likeCount: 200,
  },
  {
    _id: "portfolio_11",
    title: "포트폴리오 제목 11",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image11-1.jpg", "image11-2.jpg", "image11-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Flutter", "UI/UX"],
    techStack: [
      {
        skill: "Flutter",
        bgColor: "#02569B",
        textColor: "#FFFFFF",
        jobCode: "Frontend Developer",
      },
      {
        skill: "Firebase",
        bgColor: "#ffca28",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_11",
      name: "사용자 11",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-11",
      job: "Fullstack Developer",
    },
    view: 1100,
    createdAt: "2023-11-10T19:30:00.000Z",
    likeCount: 210,
  },
  {
    _id: "portfolio_12",
    title: "포트폴리오 제목 12",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image12-1.jpg", "image12-2.jpg", "image12-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Java", "UI/UX"],
    techStack: [
      {
        skill: "Java",
        bgColor: "#007396",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
      {
        skill: "Spring",
        bgColor: "#6db33f",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_12",
      name: "사용자 12",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-12",
      job: "Fullstack Developer",
    },
    view: 1200,
    createdAt: "2023-11-11T20:45:00.000Z",
    likeCount: 220,
  },
  {
    _id: "portfolio_13",
    title: "포트폴리오 제목 13",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image13-1.jpg", "image13-2.jpg", "image13-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "ASP.NET", "UI/UX"],
    techStack: [
      {
        skill: "ASP.NET",
        bgColor: "#512BD4",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
      {
        skill: "React",
        bgColor: "#61DAFB",
        textColor: "#282C34",
        jobCode: "Frontend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_13",
      name: "사용자 13",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-13",
      job: "Fullstack Developer",
    },
    view: 1300,
    createdAt: "2023-11-12T21:15:00.000Z",
    likeCount: 230,
  },
  {
    _id: "portfolio_14",
    title: "포트폴리오 제목 14",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image14-1.jpg", "image14-2.jpg", "image14-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Kotlin", "UI/UX"],
    techStack: [
      {
        skill: "Kotlin",
        bgColor: "#A445D2",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
      {
        skill: "Docker",
        bgColor: "#2496ed",
        textColor: "#ffffff",
        jobCode: "DevOps",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_14",
      name: "사용자 14",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-14",
      job: "Fullstack Developer",
    },
    view: 1400,
    createdAt: "2023-11-13T22:00:00.000Z",
    likeCount: 240,
  },
  {
    _id: "portfolio_15",
    title: "포트폴리오 제목 15",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image15-1.jpg", "image15-2.jpg", "image15-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "MySQL", "UI/UX"],
    techStack: [
      {
        skill: "MySQL",
        bgColor: "#00758f",
        textColor: "#ffffff",
        jobCode: "Database",
      },
      {
        skill: "JavaScript",
        bgColor: "#F7DF1E",
        textColor: "#000000",
        jobCode: "Frontend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_15",
      name: "사용자 15",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-15",
      job: "Fullstack Developer",
    },
    view: 1500,
    createdAt: "2023-11-14T23:30:00.000Z",
    likeCount: 250,
  },
  {
    _id: "portfolio_16",
    title: "포트폴리오 제목 16",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image16-1.jpg", "image16-2.jpg", "image16-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Redis", "UI/UX"],
    techStack: [
      {
        skill: "Redis",
        bgColor: "#d50000",
        textColor: "#ffffff",
        jobCode: "Database",
      },
      {
        skill: "Flask",
        bgColor: "#000000",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_16",
      name: "사용자 16",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-16",
      job: "Fullstack Developer",
    },
    view: 1600,
    createdAt: "2023-11-15T10:00:00.000Z",
    likeCount: 260,
  },
  {
    _id: "portfolio_17",
    title: "포트폴리오 제목 17",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image17-1.jpg", "image17-2.jpg", "image17-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Docker", "UI/UX"],
    techStack: [
      {
        skill: "Docker",
        bgColor: "#2496ed",
        textColor: "#ffffff",
        jobCode: "DevOps",
      },
      {
        skill: "GraphQL",
        bgColor: "#e10098",
        textColor: "#ffffff",
        jobCode: "API",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_17",
      name: "사용자 17",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-17",
      job: "Fullstack Developer",
    },
    view: 1700,
    createdAt: "2023-11-16T11:15:00.000Z",
    likeCount: 270,
  },
  {
    _id: "portfolio_18",
    title: "포트폴리오 제목 18",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image18-1.jpg", "image18-2.jpg", "image18-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Kubernetes", "UI/UX"],
    techStack: [
      {
        skill: "Kubernetes",
        bgColor: "#326ce5",
        textColor: "#ffffff",
        jobCode: "DevOps",
      },
      {
        skill: "AWS",
        bgColor: "#ff9900",
        textColor: "#ffffff",
        jobCode: "DevOps",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_18",
      name: "사용자 18",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-18",
      job: "Fullstack Developer",
    },
    view: 1800,
    createdAt: "2023-11-17T12:30:00.000Z",
    likeCount: 280,
  },
  {
    _id: "portfolio_19",
    title: "포트폴리오 제목 19",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image19-1.jpg", "image19-2.jpg", "image19-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "HTML5", "UI/UX"],
    techStack: [
      {
        skill: "HTML5",
        bgColor: "#e34f26",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "CSS3",
        bgColor: "#1572B6",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_19",
      name: "사용자 19",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-19",
      job: "Frontend Developer",
    },
    view: 1900,
    createdAt: "2023-11-18T13:45:00.000Z",
    likeCount: 290,
  },
  {
    _id: "portfolio_20",
    title: "포트폴리오 제목 20",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image20-1.jpg", "image20-2.jpg", "image20-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Tailwind CSS", "UI/UX"],
    techStack: [
      {
        skill: "Tailwind CSS",
        bgColor: "#06b6d4",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "Django",
        bgColor: "#092e20",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_20",
      name: "사용자 20",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-20",
      job: "Fullstack Developer",
    },
    view: 2000,
    createdAt: "2023-11-19T14:50:00.000Z",
    likeCount: 300,
  },
  {
    _id: "portfolio_21",
    title: "포트폴리오 제목 21",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image21-1.jpg", "image21-2.jpg", "image21-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "GraphQL", "UI/UX"],
    techStack: [
      {
        skill: "GraphQL",
        bgColor: "#e10098",
        textColor: "#ffffff",
        jobCode: "API",
      },
      {
        skill: "Node.js",
        bgColor: "#8CC84B",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_21",
      name: "사용자 21",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-21",
      job: "Fullstack Developer",
    },
    view: 2100,
    createdAt: "2023-11-20T15:05:00.000Z",
    likeCount: 310,
  },
  {
    _id: "portfolio_22",
    title: "포트폴리오 제목 22",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image22-1.jpg", "image22-2.jpg", "image22-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Sass", "UI/UX"],
    techStack: [
      {
        skill: "Sass",
        bgColor: "#cc6699",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "Ruby on Rails",
        bgColor: "#e45d27",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_22",
      name: "사용자 22",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-22",
      job: "Fullstack Developer",
    },
    view: 2200,
    createdAt: "2023-11-21T16:30:00.000Z",
    likeCount: 320,
  },
  {
    _id: "portfolio_23",
    title: "포트폴리오 제목 23",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image23-1.jpg", "image23-2.jpg", "image23-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "JavaScript", "UI/UX"],
    techStack: [
      {
        skill: "JavaScript",
        bgColor: "#F7DF1E",
        textColor: "#000000",
        jobCode: "Frontend Developer",
      },
      {
        skill: "React",
        bgColor: "#61DAFB",
        textColor: "#282C34",
        jobCode: "Frontend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_23",
      name: "사용자 23",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-23",
      job: "Fullstack Developer",
    },
    view: 1675,
    createdAt: "2023-11-22T09:15:00.000Z",
    likeCount: 215,
  },
  {
    _id: "portfolio_24",
    title: "포트폴리오 제목 24",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image24-1.jpg", "image24-2.jpg", "image24-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Node.js", "UI/UX"],
    techStack: [
      {
        skill: "Node.js",
        bgColor: "#8CC84B",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
      {
        skill: "Express",
        bgColor: "#000000",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_24",
      name: "사용자 24",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-24",
      job: "Fullstack Developer",
    },
    view: 1320,
    createdAt: "2023-11-21T11:30:00.000Z",
    likeCount: 180,
  },
  {
    _id: "portfolio_25",
    title: "포트폴리오 제목 25",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image25-1.jpg", "image25-2.jpg", "image25-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Angular", "UI/UX"],
    techStack: [
      {
        skill: "Angular",
        bgColor: "#dd0031",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "Django",
        bgColor: "#092e20",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_25",
      name: "사용자 25",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-25",
      job: "Fullstack Developer",
    },
    view: 2450,
    createdAt: "2023-11-20T14:45:00.000Z",
    likeCount: 340,
  },
  {
    _id: "portfolio_26",
    title: "포트폴리오 제목 26",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image26-1.jpg", "image26-2.jpg", "image26-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Bootstrap", "UI/UX"],
    techStack: [
      {
        skill: "Bootstrap",
        bgColor: "#563d7c",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "Ruby on Rails",
        bgColor: "#e45d27",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_26",
      name: "사용자 26",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-26",
      job: "Fullstack Developer",
    },
    view: 1980,
    createdAt: "2023-11-19T09:00:00.000Z",
    likeCount: 250,
  },
  {
    _id: "portfolio_27",
    title: "포트폴리오 제목 27",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image27-1.jpg", "image27-2.jpg", "image27-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Vue.js", "UI/UX"],
    techStack: [
      {
        skill: "Vue.js",
        bgColor: "#42b883",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "Laravel",
        bgColor: "#ff2d55",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_27",
      name: "사용자 27",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-27",
      job: "Fullstack Developer",
    },
    view: 1650,
    createdAt: "2023-11-23T08:30:00.000Z",
    likeCount: 275,
  },
  {
    _id: "portfolio_28",
    title: "포트폴리오 제목 28",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image28-1.jpg", "image28-2.jpg", "image28-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "TypeScript", "UI/UX"],
    techStack: [
      {
        skill: "TypeScript",
        bgColor: "#007ACC",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
      {
        skill: "ASP.NET",
        bgColor: "#512BD4",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_28",
      name: "사용자 28",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-28",
      job: "Fullstack Developer",
    },
    view: 2100,
    createdAt: "2023-11-22T11:15:00.000Z",
    likeCount: 310,
  },
  {
    _id: "portfolio_29",
    title: "포트폴리오 제목 29",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image29-1.jpg", "image29-2.jpg", "image29-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "Firebase", "UI/UX"],
    techStack: [
      {
        skill: "Firebase",
        bgColor: "#ffca28",
        textColor: "#ffffff",
        jobCode: "Backend Developer",
      },
      {
        skill: "jQuery",
        bgColor: "#0868ac",
        textColor: "#ffffff",
        jobCode: "Frontend Developer",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_29",
      name: "사용자 29",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-29",
      job: "Fullstack Developer",
    },
    view: 1750,
    createdAt: "2023-11-24T09:00:00.000Z",
    likeCount: 290,
  },
  {
    _id: "portfolio_30",
    title: "포트폴리오 제목 30",
    contents:
      '<figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Server.png" alt="Uploaded Image"/></figure><p>이미지를 업로드하세요.</p><p>안녕하세요</p><p>반가워요</p><p>잘있어요</p><p>다시만나요</p><figure class="image"><img src="https://devfolio-vercel-test.s3.amazonaws.com/Vercel.png" alt="Uploaded Image"/></figure>',
    images: ["image30-1.jpg", "image30-2.jpg", "image30-3.jpg"],
    tags: ["웹 개발", "프론트엔드", "PostgreSQL", "UI/UX"],
    techStack: [
      {
        skill: "PostgreSQL",
        bgColor: "#336791",
        textColor: "#ffffff",
        jobCode: "Database",
      },
      {
        skill: "Kubernetes",
        bgColor: "#326ce5",
        textColor: "#ffffff",
        jobCode: "DevOps",
      },
    ],
    thumbnailImage: "https://picsum.photos/400/400",
    userInfo: {
      userID: "user_30",
      name: "사용자 30",
      profileImage: "https://picsum.photos/300/300",
    },
    jobGroup: {
      _id: "job-30",
      job: "Fullstack Developer",
    },
    view: 2200,
    createdAt: "2023-11-25T10:30:00.000Z",
    likeCount: 330,
  },
];