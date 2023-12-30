interface IWorkExperience {
  jobName: string;
  jobLocation: string;
  link: string;
  careerStartAt: number;
  careerEndAt: null | number;
  position: string;
  aboutJob: string;
  myTasks: string;
  tasksRealizedByMe: string;
}

const workExperience: Array<IWorkExperience> = [
  {
    jobName: "QTalents",
    jobLocation: "Greece",
    link: "https://code.qtalents.co/",
    careerStartAt: 1643701347000,
    careerEndAt: null,
    position: "React Developer",
    aboutJob:
      "An innovative platform designed to conduct technical interviews and assess programming candidates. With our help, you can conduct live video programming interviews using over 15 popular programming languages right in your browser.\n\nThe platform provides a wide range of microservices designed to optimize the technical interview process and includes: \n1. Personal account:\nEasy access to personalized statistics containing information on completed interviews, feedback and plans for upcoming sessions. Functionality to interact with feedback and prepare for future interviews. \n2. Collaborative Code Editor:\nIntegrated collaborative editor with video link for efficient collaborative programming. Ability to run code in real-time, chat for instant messaging, record interviews for later analysis. Integration with Miro platform for additional visualization and collaboration. \n3. Telegram bot for random interview matching:\nA bot for creating random interviews and conveniently match candidates. Providing flexibility and convenience in organizing and conducting interviews.",
    myTasks:
      "\n- New Functionality Development: Design and develop new features to meet user requirements and needs. Researching current technologies and methods for innovative solutions. \n- Refactoring Old Code: Analyzing existing code to improve readability, efficiency, and scalability. Implementing best programming practices and coding standard- Debugging and Bug Fixing: Identifying and analyzing emerging bugs in the code. Designing and implementing solutions to eliminate bugs with minimal impact on overall system stability. \n- Implementing New UI Components: Designing and integrating new UI components with a focus on improving user experience. Testing and optimizing new UI elements to ensure high performance.",
    tasksRealizedByMe:
      "\n- Post-Interview Feedback:\nA feedback form has been implemented, giving users the opportunity to share their opinions and receive constructive feedback after the interview is completed.\n- Fullscreen Mode: \n Designed and implemented fullscreen mode to enhance platform usability and maximize workspace.- Language Switching in the Code Editor:\nAdded functionality to switch language in the Code Editor, providing a user-friendly experience.\n- Authorization in the Code Editor:\nImplemented an authorization system in the Code Editor, providing secure access and accounting of user actions.\n- Audio/Video Device Permission Checking:\nDeveloped a mechanism to check and request permissions to use audio/video devices and then notify the user to provide transparency and control.\n- Chat:\nImplemented functional chat for messaging between interviewees, facilitating effective communication.\n- Code Launch and Output to Output:\nDeveloped and successfully implemented a mechanism to run code with output to output, providing an instantaneous view of the results of code execution.\n- Adaptive Vertical Panels:\nCreated and implemented adaptive vertical panels to optimize the interface space in different usage conditions.\n- Hotkeys:\nDesigned and implemented hotkeys to simplify and speed up programmers' workflow.\n- Link Quality Detection and Indication:\nIntroduced a mechanism to detect link quality with appropriate indication, allowing users to optimize interviews when the connection is unstable.\n",
  },
];

export default workExperience;
